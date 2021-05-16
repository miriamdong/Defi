
import { useState, useEffect } from "react";
import "firebase/auth";
import Pusher from 'pusher-js'


const Notification = () => {

  const [notification, setNotification] = useState('')
  useEffect(() => {
    console.log('Notification page')
    Pusher.logToConsole = true;

    var pusher = new Pusher('b5b0e36c250391e3c781', {
      cluster: 'us3'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data) {
      console.log('Notification triggered')
      setNotification('One new investor')
    });

  }, []);



  return (
    <div className="flex flex-col">
      <p className="text-blue-500">{notification}</p>
    </div>
  );
};

export default Notification;
