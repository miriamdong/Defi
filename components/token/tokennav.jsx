import { useUser } from "../../firebase/useUser";
import React, { useRef, useState ,useEffect} from "react"
import {tabs} from '../scr/tokennav'
import Nav from '../scr/nav'
import FirebaseAuth from "../Auth/FirebaseAuth";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Tokennav() {
  const { user, logout } = useUser();
  console.log("#####",user)
 
 return (
   <Nav tabs={tabs} href={"/user/SdyB5lXR6VSIiZGgTIQhCpvi07r1"} name="hi"/>
 )
  
}