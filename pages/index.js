import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Project_form";
import Footer from "../components/Footer";
import Image from "next/image";
import React from "react";
import Testimonial from "../components/Testimonials";
import Brand from "../components/Brand";
import { useUser } from "../firebase/useUser";
import Marquee from "react-fast-marquee";

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
        <Testimonial />
        <Form />
      </div>
    </>
  );
}
