import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import  Nav  from '/components/dashboard/Nav';
import firebase from "firebase/app";
import "firebase/auth";
const User = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    user_id: "",
    image: "",
  });

  useEffect(() => {
    axios.get(`https://defidapp.herokuapp.com/users/auth/${firebase.auth().currentUser.uid}`).then((response) => {
      setUser(response.data[0]);
      console.log("^^^",response.data[0])
    });
  }, []);

 
  return (
    <div>
      <Nav />
    </div>
  );
};

export default User;
