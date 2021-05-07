import Head from 'next/head';
import  Navbar  from '../components/Navbar';
import  Header from '../components/Header';
import  Card from '../components/Card';
import  Form from '../components/Project_form';
import  Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Header />
      
      
      <Card />
      <Form />
      <Footer />
      <div>Hello World</div>
    </div>
  );
}