/* This example requires Tailwind CSS v2.0+ */
import { NewspaperIcon, PhoneIcon, SupportIcon } from "@heroicons/react/outline";
import Link from 'next/link';
import {useEffect} from 'react';
import Head from 'next/head';
import useAppData from "../hooks/useAppData.js";

// import { getSortedData } from '../lib/data'

      // const paths = supportLinks.map(project => ({
      //   params: { id: project.ID.toString() }
      // }))

      // return { paths, fallback: false }


// export async function getStaticProps() {
//   const res = await fetch( 'https://defidapp.herokuapp.com/projects' )
//     const projects = res.json();
//   return { props: { projects } };
// }


export default function Card() {

  const {state} = useAppData();


  // useEffect( () => {
  //   fetch( 'http://defidapp.herokuapp.com/projects' )
  //   .then( response => response.json() )
  //   .then( data => {
  //     console.log( data )
  //   })
  // }, [] )
  return (
    <section
      className=" -mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8  "
      aria-labelledby="contact-heading">
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8 ">
        {state.projects.map((link) => (
          <div key={link.id} className="flex flex-col bg-white rounded-2xl shadow-xl">
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="px-4 py-5 sm:px-6">
                <h3>{link.name}</h3>
              </div>
              <div className="px-4 py-5 sm:p-6">{link.description}</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href={link.href}
                className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                Link to {link.href}
              </a>
            </div>

          </div>

        ))}
        <Link href="/project/create">
        <div className="flex flex-col bg-purple-900 rounded-2xl shadow-xl ">

            <div className="flex-1 relative ">
              <div className=" px-4 py-10 sm:px-6 text-white">
                <h3>CREATE NEW PROJECT</h3>

              </div>
              <div  ><img
                    src="./img/min.gif"
                    alt="New Project"
              /></div>
              </div>

      </div>
       </Link>
      </div>

    </section>
  );
}