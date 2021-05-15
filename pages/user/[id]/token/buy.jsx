import  Tokennav from '/components/token/tokennav';
import  Buy from '/components/token/buy';
import {useState, useEffect} from 'react'
import axios from 'axios';
import firebase from "firebase/app";
import "firebase/auth";


export default function Example() {

  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://defidapp.herokuapp.com/projects/users/${firebase.auth().currentUser.uid}`)
  //     .then((response) => {
  //       console.log(response)
  //       setProjects(response.data)
  //     });
  // }, [])

  return (
    <>
    <Tokennav href={"/user/SdyB5lXR6VSIiZGgTIQhCpvi07r1"} />  
    <Buy />
  </>
  )
}
