import '../styles/main.css';
import  FirebaseAuth from '../components/Auth/FirebaseAuth';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'next/app';
import Card from "../components/Card"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
      {/* <Card data={pageProps.projects} /> */}
    </>
  )}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   const res = await fetch(`https://defidapp.herokuapp.com/projects`)
//   const projects = await res.json()
//   console.log(projects);
//   return { ...appProps, projects};
// };


export default MyApp;