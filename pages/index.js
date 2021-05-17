import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Project_form";
import Footer from "../components/Footer";
import Image from "next/image";
import React from "react";
// import WriteToCloudFirestore from '../components/cloudFirestore/Write'
// import ReadDataFromCloudFirestore from '../components/cloudFirestore/Read'
import { useUser } from "../firebase/useUser";
import Marquee from "react-fast-marquee";
// import Counter from '../components/realtimeDatabase/Counter'
// import UploadFile from '../components/storage/UploadFile'


export default function Home () {
  const { user, logout } = useUser()
return (
    <div>    
      <div>
      <Header />
      <Card />
      <Form />
      </div>
    </div>
  );
}
