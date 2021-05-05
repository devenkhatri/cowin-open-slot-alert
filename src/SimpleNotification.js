import React, { Component } from "react";

var notification 

class SimpleNotification extends Component {
  constructor() {
    super();
    this.showNotification = this.showNotification.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  showNotification() {
    var options = {
      body: "This is the body of the Notification",
      icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      dir: "ltr"
    };
   notification = new Notification("Notification Demo", options);
  }

  closeNotification() {
    notification.close();
  }

  render() {
    return (
      <div>
        <button onClick={this.showNotification}>
          Click to show notification
        </button>
        <button onClick={this.closeNotification}>
          Close notification
        </button>
      </div>
    );
  }
}

export default SimpleNotification;
