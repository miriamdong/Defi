/* This example requires Tailwind CSS v2.0+ */
import { NewspaperIcon, PhoneIcon, SupportIcon } from "@heroicons/react/outline";
import Link from "next/link";
import FirebaseAuth from "./Auth/FirebaseAuth";
import React, { useRef, useState } from "react";
import { firebaseClient } from "../firebase/initFirebase";
import { useUser } from "../firebase/useUser";
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Sign_in from './Sign_in';

const supportLinks = [
  {
    name: "Venus Head",
    href: "http:// Venus.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "MARS",
    href: "Mars.com",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  },
  {
    name: "STAR",
    href: "Star.com",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  },
  {
    name: "AMAZING ONE",
    href: "Star.com",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  },
];

export default function Card() {
  const { user, logout } = useUser();
  const [isShown,setIsShown] = useState(false)
  const [toggle, setToggle] =useState(false)
  return (
    <section
      className=" -mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8  "
      aria-labelledby="contact-heading">
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8 ">
        {supportLinks.map((link) => (
          <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
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
        {user ? (
          <Link href="/project/create">
            <div className="flex flex-col bg-purple-900 rounded-2xl shadow-xl " style={{textAlign: "center"}}>
              <div className="flex-1 relative ">
                <div className=" px-4 py-10 sm:px-6 text-white">
                  <h3>CREATE NEW PROJECT</h3>
                </div>
                <div>
                  <img src="./img/min.gif" alt="New Project" />
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="flex flex-col bg-purple-900 rounded-2xl shadow-xl " onClick={()=>{
            const abc = document.getElementsByClassName("sign-in-button")
            abc[0].click()
            setToggle((prev)=>{
              return !prev
            })
          }}>
            <div className="flex-1 relative ">
              <div className=" px-4 py-10 sm:px-6 text-white" style={{textAlign: "center"}} >
                {!toggle ? 
                <h3>CREATE NEW PROJECT</h3>: <h3>PLEASE LOGIN FIRST!!!</h3>}
              </div>
              <div>
                <img src="./img/min.gif" alt="New Project" />
              </div>
            </div>
           
          </div>
          
        )}
      </div>
    </section>
  );
}
