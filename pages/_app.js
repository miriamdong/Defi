import '../styles/main.css';
import  FirebaseAuth from '../components/Auth/FirebaseAuth';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'next/app';
import Card from "../components/Card"
import  Navbar  from '../components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>rocketMEOW</title>
        <link rel='icon' href='/rocket.ico' />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    </>
  )}


export default MyApp;