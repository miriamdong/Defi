import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Project_form";
import Footer from "../components/Footer";
import Image from "next/image";
// import main from "../components/video/main";
import React from "react";

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
      {/* <div className="pt-40">
        <video
          className="video-js"
          preload="auto"
          autoplay
          loop
          muted
          style={{
            postion: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}>
          <source src={main} type="video/mp4"></source>
        </video>
      </div> */}

      <div>
        <Header />
        <Card />
        <Form />
      </div>
    </>
  );
}
