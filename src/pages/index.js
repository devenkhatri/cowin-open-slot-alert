import React from 'react';
import FeedItems from 'gatsby-theme-chronoblog/src/components/feed-items';
import FeedSearch from 'gatsby-theme-chronoblog/src/components/feed-search';
import Layout from 'gatsby-theme-chronoblog/src/components/layout';
import Tags from 'gatsby-theme-chronoblog/src/components/tags';
import AuthorBanner from 'gatsby-theme-chronoblog/src/components/author-banner';
import addNotification from 'react-push-notification';

export default () => {
    const buttonClick = () => {
        addNotification({
            title: 'Warning',
            subtitle: 'This is a subtitle',
            message: 'This is a very long message',
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
        });
    };
    return (
        <Layout>
            <AuthorBanner />
            <h3>Please make sure to enable notification for this site to get the alert immediately when an open slot is available</h3>
            <button onClick={buttonClick} className="button">
                Test Notification
            </button>
            {/* <FeedSearch />
            <Tags />
            <FeedItems /> */}
        </Layout>
    );
};
