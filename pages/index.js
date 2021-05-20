import Head from "next/head";
import Header from "../components/Header";
import Card from "../components/Card";
import Form from "../components/Project_form";
import React from "react";
import Testimonial from "../components/Testimonials";

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
        <Form />
      </div>
    </>
  );
}
