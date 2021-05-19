
import { useState, useEffect } from "react";
import "firebase/auth";
import Pusher from 'pusher-js'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Notification = () => {

  const [notification, setNotification] = useState(false)
  useEffect(() => {
    console.log('Notification page')
    Pusher.logToConsole = true;

    var pusher = new Pusher('b5b0e36c250391e3c781', {
      cluster: 'us3'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data) {
      console.log('Notification triggered')
      setNotification(true)
    });

  }, []);



  return (
    <div>
      
      {notification ?
      <Badge color="secondary" badgeContent={"1"} showZero>
      <MailIcon />
    </Badge>
    :
    <Badge color="secondary" badgeContent={0}>
        <MailIcon />
      </Badge>
    }
      
    </div>
  );
};

export default Notification;
