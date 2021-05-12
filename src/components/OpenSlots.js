import React from 'react';
import axios from 'axios';
import { Spinner, Badge, Flex, Card, Box, Message, Heading, Button, Divider, Alert, Text } from '@theme-ui/components';
import Moment from 'react-moment';
import moment from 'moment';
import addNotification from 'react-push-notification';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';

const OpenSlots = () => {
    const [slotData, setSlotData] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)

    const INTERVAL_MS = 15 * 1000;

    const getLiveData = (fetchDate) => {
        setLoaded(false)
        if (!fetchDate) fetchDate = moment().format('DD-MM-YYYY')
        const apiURL = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=772&date=' + fetchDate
        console.log(apiURL)
        axios.get(apiURL)
            .then(function (response) {
                // handle success
                if (response.status === 200) {
                    console.log(response.data);
                    if (response.data && response.data.centers) {
                        setSlotData(response.data.centers)
                        setLoaded(true)
                    }
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const showNotification = (slotname, date, min_age_limit, available_capacity) => {
        if (min_age_limit != 18) return;
        toast.dismiss();
        toast("Slot available at - " + slotname);
        addNotification({
            title: slotname,
            message: 'Date=' + date + ", AgeLimit=" + min_age_limit + "+, AvailableCount=" + available_capacity,
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
        });
    }

    const doBooking = () => {
        axios.post('https://cdn-api.co-vin.in/api/v2/appointment/schedule', {
            center_id: 692732,
            dose: 1,
            session_id: "fd726758-270b-462f-b401-201d245f6d87",
            slot: "01:00PM-03:00PM",
            beneficiaries: ["96398840052410"],
        })
            .then(function (response) {
                console.log(response);
            })
    }

    React.useEffect(() => {
        //call the function every xx miliseconds
        // setInterval(() => {
        //     getLiveData()
        // }, INTERVAL_MS);
        getLiveData()
    }, [])

    return (
        <div>
            <ToastContainer position="top-center" pauseOnHover />
            <Heading as="h4">Please make sure to enable notification for this site to get the alert immediately when an open slot is available. <em>Choose 'Allow' from the popup which comes after clicking the below button</em></Heading>
            <Button m={2} variant="outline" onClick={() => { showNotification('Test Notification', 'dd-mm-yyyy', '18', '999') }}>
                Enable Notification
            </Button>
            <Divider />
            <Box bg="secondary" color="white" p={3}><Heading>Available Slots on CoWin Portal for 18+ category</Heading></Box>
            {!loaded && <Spinner />}
            {/* {slotData &&
                <Flex>
                    <Button mr={2} onClick={() => { getLiveData() }}>
                        <Moment format="DD-MM-YYYY" date={moment()} />
                    </Button>
                    <Button mr={2} onClick={() => { getLiveData(moment().add(1, 'd').format('DD-MM-YYYY')) }}>
                        <Moment format="DD-MM-YYYY" date={moment().add(1, 'd')} />
                    </Button>
                    <Button mr={2} onClick={() => { getLiveData(moment().add(2, 'd').format('DD-MM-YYYY')) }}>
                        <Moment format="DD-MM-YYYY" date={moment().add(2, 'd')} />
                    </Button>
                </Flex>
            } */}
            {slotData && slotData.map((slot, index) => {
                return (
                    <>
                    {(_.find(slot.sessions, item => item.min_age_limit == 18) || []).length > 0 &&
                    <Card key={index} style={{ borderBottom: "1px solid", borderLeft: "1px solid" }}>
                        <Alert m={3} mx={0}>{slot.name} &nbsp;{slot.fee_type !== 'Free' && <Badge variant='secondary'>{slot.fee_type}</Badge>}</Alert>
                        {slot.sessions && slot.sessions.map((session, index) => {
                            if (session.available_capacity > 0) showNotification(slot.name, session.date, session.min_age_limit, session.available_capacity)
                            if (session.min_age_limit != 18) return <div/>
                            return (
                                <Flex key={index}>
                                    <Text m={1}>{session.date}</Text>
                                    <Badge m={1} variant="outline">{session.min_age_limit}+</Badge>
                                    {session.available_capacity > 0 && <Badge variant="success" m={1}>Available</Badge>}
                                    {session.available_capacity <= 0 && <Badge variant="error" m={1}>Booked</Badge>}
                                    {session.available_capacity > 0 && <Text m={1}>- {session.available_capacity}</Text>}
                                </Flex>
                            )
                        })}
                    </Card>
                    }
                    </>
                )
            })}
        </div>
    )
}

export default OpenSlots;