import { projectManagement } from "firebase-admin";
import React, { useRef, useState ,useEffect} from "react"
import {tabs} from '../scr/projectnav'
import Nav from '../scr/nav'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Projectnav() {
  const { user, logout } = useUser();
  console.log(user)
 return (
   <Nav tabs={tabs} href={"/project/" + projec.id} name={project.name}/>
 )
  
}