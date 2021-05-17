/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
import useAppData from "../hooks/useAppData.js";
import { NewspaperIcon, PhoneIcon, SupportIcon } from "@heroicons/react/outline";
import FirebaseAuth from "./Auth/FirebaseAuth";
import React, { useRef, useState, useEffect } from "react";
import { firebaseClient } from "../firebase/initFirebase";
import { useUser } from "../firebase/useUser";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import C from "./scr/cards";
import firebase from "firebase/app";

export default function Card() {
  const { state } = useAppData();
  const { user, logout } = useUser();
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  let [isShowing, setIsShowing] = useState(false);
  console.log("$$$", state);

  return (
    <section
      className=" -mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-10  "
      aria-labelledby="contact-heading">
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-12">
        <C projects={state.projects} />
        {user ? (
          <Link href="/project/KYC">
            <div
              className="flex flex-col bg-purple-900 rounded-2xl shadow-xl "
              style={{ textAlign: "center" }}>
              <div className="flex-1 relative ">
                <div className=" px-6 py-10 sm:px-6 text-white">
                  <h3>CREATE NEW PROJECT</h3>
                </div>
                <div>
                  <img src="./img/meow.gif" alt="New Project" />
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div
            className="flex flex-col bg-purple-900 rounded-2xl shadow-xl "
            onClick={() => {
              const Sign_in = document.getElementsByClassName("sign-in-button");
              Sign_in[0].click();
              setToggle((prev) => {
                return !prev;
              });
            }}>
            <div className="flex-1 relative ">
              <div className=" px-4 py-10 sm:px-6 text-white" style={{ textAlign: "center" }}>
                {!toggle ? <h3>CREATE NEW PROJECT</h3> : <h3>PLEASE LOGIN FIRST!!!</h3>}
              </div>
              <div>
                <img src="./img/meow.gif" alt="New Project" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
