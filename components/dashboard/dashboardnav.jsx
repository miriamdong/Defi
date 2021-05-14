import { useUser } from "../../firebase/useUser";
import React, { useRef, useState ,useEffect} from "react"
import {tabs} from '../scr/dashboardnav'
import Nav from '../scr/nav'
import FirebaseAuth from "../Auth/FirebaseAuth";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Dashboardnav() {
  const { user, logout } = useUser();

 
 return (
   <Nav tabs={tabs} href={"/user/" + firebase.auth().currentUser.uid} name="hi"/>
 )
  
}