<<<<<<< HEAD
import Head from 'next/head';
import  Navbar  from '../components/Navbar';
import  Header from '../components/Header';
import  Card from '../components/Card';
import  Form from '../components/Project_form';
import  Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
=======
import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import styles from '../styles/Home.module.css'
// import WriteToCloudFirestore from '../components/cloudFirestore/Write'
// import ReadDataFromCloudFirestore from '../components/cloudFirestore/Read'
import { useUser } from '../firebase/useUser'
// import Counter from '../components/realtimeDatabase/Counter'
// import UploadFile from '../components/storage/UploadFile'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

export default function Home () {
  const { user, logout } = useUser()
return (
  <div className={styles.container}>
    <p><a href="/auth">Log In!</a></p>
>>>>>>> auth
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
<<<<<<< HEAD
      <Navbar />
      <Header />
      
      
      <Card />
      <Form />
      <Footer />
      <div>Hello World</div>
=======
      {/* <section className="header">
				<React.StrictMode>
					<Nav />
				</React.StrictMode>
			</section> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/auth">Log In</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
>>>>>>> auth
    </div>
  );
}