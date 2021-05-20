import "../styles/main.css";
import "../styles/tailwind.css";
import FirebaseAuth from "../components/Auth/FirebaseAuth";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "next/app";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { userContext } from "../hooks/userContext";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>rocketMEOW</title>
        <link rel="icon" href="/rocket.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
