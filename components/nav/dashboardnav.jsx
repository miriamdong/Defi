import { useUser } from "../../firebase/useUser";
import React, { useRef, useState ,useEffect} from "react"
import {tabs} from '../scr/dashboardnav'
import Nav from '../scr/nav'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Dashboardnav() {
  const { user, logout } = useUser();

  const currentUser = firebase.auth().currentUser
  console.log(user)
 return (
   <Nav tabs={tabs} href={"/user/" + currentUser.uid} name="hi"/>
 )
  
}