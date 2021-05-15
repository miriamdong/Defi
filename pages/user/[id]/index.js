import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
const User = () => {
  const router = useRouter();

  useEffect(() => {
    axios.get(`https://defidapp.herokuapp.com/users/auth/${firebase.auth().currentUser.uid}`).then((response) => {
      setUser(response.data[0]);
      console.log("^^^",response.data[0])
    });
  }, []);
console.log("###",user)
 
  return (
    <div>
    </div>
  );
};

export default User;
