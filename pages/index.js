import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Project_form";
import Footer from "../components/Footer";
import Image from "next/image";
import BackgroundVideo from "../components/video/index";
import React from "react";
import Testimonial from "../components/Testimonials";
import Brand from "../components/Brand";

// import WriteToCloudFirestore from '../components/cloudFirestore/Write'
// import ReadDataFromCloudFirestore from '../components/cloudFirestore/Read'
import { useUser } from "../firebase/useUser";
import Marquee from "react-fast-marquee";
// import Counter from '../components/realtimeDatabase/Counter'
// import UploadFile from '../components/storage/UploadFile'

export default function Home() {
  const Image = (props) => {
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
      setWidth(window.innerWidth);
    });
    return <img src={props.src} style={{ width: width }} />;
  };

  return (
    <>
      <div>
        <Header />
        <Card />
        <Brand />
        <Testimonial />
        <Form />
      </div>
    </>
  );
}
