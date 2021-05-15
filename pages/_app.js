import '../styles/main.css';
import  FirebaseAuth from '../components/Auth/FirebaseAuth';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'next/app';
import Card from "../components/Card"
import  Navbar  from '../components/Navbar';
import  Footer  from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Card data={pageProps.projects} /> */}

    <Head>
        <title>rocketMEOW</title>
        <link rel='icon' href='/rocket.ico' />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   const res = await fetch(`https://defidapp.herokuapp.com/projects`)
//   const projects = await res.json()
//   console.log(projects);
//   return { ...appProps, projects};
// };

export default MyApp;
