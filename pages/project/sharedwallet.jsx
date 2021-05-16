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
<<<<<<< HEAD
import Escrow from "../../components/Meta/Escrow";
=======
import Escrow from "../Escrow";
>>>>>>> 24ea3e4cfc5bacf6088acb9140aa879fc9889708
import Createsteps from "./createsteps";
const steps = [
  { id: "01", name: "KYC", href: "KYC", status: "complete" },
  { id: "02", name: "create form", href: "Create", status: "complete" },
  { id: "03", name: "Shared Wallet", href: "sharedwallet", status: "current" },
];
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
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 p-40">
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
                <Createsteps steps={steps} />
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create Wallet
                  </button>
<<<<<<< HEAD
                  <Link href={"/user/" + firebase.auth().currentUser.uid + "/dashboard/myproject"}>
=======
                  <Link href={"/user/" + firebase.auth().currentUser.uid+ "/dashboard/myproject"}>
>>>>>>> 24ea3e4cfc5bacf6088acb9140aa879fc9889708
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Submit
                    </button>
                  </Link>
                </div>
              </div>
            </form>
            <Escrow />
          </div>
        </main>
      </div>
    </>
  );
}
