// import UploadFile from '../../components/storage/UploadFile'
import Upload from "../../components/storage/AWS";
import Link from "next/link";
import React, { useRef, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from "../../firebase/useUser";
import { firebaseClient } from "../../firebase/initFirebase";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import Escrow from "../Escrow";
import Createsteps from "./createsteps";
import Kyc from "../../components/Meta/Kyc";

const steps = [
  { id: '01', name: 'KYC', href: 'KYC', status: 'current'},
  { id: '02', name: 'Create form', href: 'create', status: 'upcoming'},
  { id: '03', name: 'Shared Wallet', href: 'sharedWallet', status: 'upcoming' },
]


export default function Create() {
  const router = useRouter();
  const { user, logout } = useUser();
  // const [date, setDate] = useState(new Date());
  const [state, setState] = useState({
    name: "",
    description: "",
    target_amount: "",
    target_date: new Date(),
    min_amount: "",
    link: "",
    round: 1,
    contract: "",
    user_id: "",
    image: "",
    wallet_id: "",
  });

  const handleChange = (event) => {
    const sth = { ...state };
    sth[event.target.name] = event.target.value;
    setState({ ...sth, user_id: firebase.auth().currentUser.uid });
    console.log("user_id:", state.user_id);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    console.log(state);
    axios
      .post("https://defidapp.herokuapp.com/projects", state, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        router.replace("/user/" + firebase.auth().currentUser.uid + "/dashboard/myproject");
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  console.log(state);
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 p-0">
        <main className="bg-white">
          <div className="max-w-3xl mx-auto">
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
              <div className="space-y-8 divide-y divide-gray-200">
                <div>
                  <div className="text-center">
                    <h1 className="text-6xl leading-6 font-medium text-gray-900 p-4">
                      New Project
                    </h1>
                    <p className="mt-10 mb-0 text-sm text-gray-500">
                      This information will be displayed publicly so be careful what you share.
                    </p>
                  </div>
                </div>
                <Createsteps steps={steps}/>
                <div className="pt-8">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Join Our KYC Program
                    </h3>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="Project_name"
                        className="block text-sm font-medium text-gray-700">
                        My Wallet Address
                      </label>
                      <div className="mt-1">
                        {/* <input
                          type="text"
                          name="name"
                          id="Project_name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full l:text-l border-gray-300 rounded-md p-2 border-2"
                          onChange={handleChange}
                        /> */}
                        <Kyc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
