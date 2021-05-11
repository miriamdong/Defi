import '../styles/main.css';
import  FirebaseAuth from '../components/Auth/FirebaseAuth';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'next/app';
import Card from "../components/Card"
import  Navbar  from '../components/Navbar';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  )}


export default MyApp;