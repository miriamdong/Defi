import { useUser, mapUserData } from "../../firebase/useUser";
import React, { useRef, useState, useEffect } from "react";
import { tabs } from "../scr/dashboardnav";
import Nav from "../scr/nav";
import firebase from "firebase/app";
import { auth } from "../../firebase/initFirebase";

console.log({ auth });

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboardnav() {
  const { user, logout } = useUser();
  const [uid, setUid] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  console.log({ user });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const userData = mapUserData(user);
        console.log({ userData });
        setUid(userData.id);
      }
    });
    const current = firebase.auth().currentUser;
    if (current) {
      console.log({ current });

      console.log(current.uid);
      setCurrentUser(current);
      setUid(current.uid);

      console.log("auth", auth.currentUser);
      console.log(auth.currentUser.uid);
    }
  }, [user]);

  return <Nav tabs={tabs} href={"/user/" + { uid }} />;
}
