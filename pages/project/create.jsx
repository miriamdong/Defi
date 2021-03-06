// import UploadFile from '../../components/storage/UploadFile'
import Upload from "../../components/storage/AWS";
import UploadFile from "../../components/storage/UploadFile";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from "../../firebase/useUser";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import Createsteps from "../../components/scr/createsteps";
const steps = [
  { id: "01", name: "KYC", href: "KYC", status: "complete" },
  { id: "02", name: "Shared Wallet", href: "sharedwallet", status: "complete" },
  { id: "03", name: "Create Form", href: "create", status: "current" },
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
    video: "",
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
    console.log("axios: state", state);
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
                    <h1 className="text-xl leading-6 font-medium text-gray-900 p-4">
                      Documents to Share With Investors
                    </h1>
                    <p className="mt-10 mb-0 text-sm text-gray-500">
                      Don't worry if you don't have everything ready. You can always come back to
                      post updates.
                    </p>
                  </div>
                </div>
                <Createsteps steps={steps} />
                <div className="pt-8">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Company Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="Project_name"
                        className="block text-sm font-medium text-gray-700">
                        Your Project Name / Tag Line
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="Project_name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full l:text-l border-gray-300 rounded-md p-2 border-2"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* <div className="sm:col-span-4"> */}
                    {/* <label
                        htmlFor="wallet_id"
                        className="block text-sm font-medium text-gray-700">
                        Wallet
                      </label> */}
                    {/* <div className="mt-1">
                        <input
                          type="text"
                          name="wallet_id"
                          id="wallet_id"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full l:text-l border-gray-300 rounded-md p-2 border-2"
                          onChange={handleChange}
                        />
                      </div> */}
                    {/* </div> */}

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="target_amount"
                        className="block text-sm font-medium text-gray-700">
                        Target Amount to Rise
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="target_amount"
                          id="target_amount"
                          placeholder="$000,000"
                          onChange={handleChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border-2"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="target_date"
                        className="block text-sm font-medium text-gray-700">
                        Target Date
                      </label>

                      <div className="mt-1 ">
                        <DatePicker
                          type="text"
                          name="target_date"
                          id="target_date"
                          selected={
                            state.target_date === "" ? new Date() : new Date(state.target_date)
                          }
                          onChange={(newDate) => {
                            setState((prev) => {
                              return { ...prev, target_date: newDate.toLocaleDateString() };
                            });
                          }}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border-2"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="min_amount"
                        className="block text-sm font-medium text-gray-700">
                        Minmum Tokens Accpeted
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="min_amount"
                          id="min_amount"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border-2"
                          placeholder="$000,000"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="round" className="block text-sm font-medium text-gray-700">
                        Fundraising Round
                      </label>
                      <div className="mt-1">
                        <select
                          type="text"
                          name="round"
                          id="round"
                          autoComplete="postal-code"
                          onChange={handleChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border-2">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4 pt-8">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        http://
                      </span>
                      <input
                        name="link"
                        id="website"
                        onChange={handleChange}
                        placeholder="www.example.com"
                        className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 p-2 border-2"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-10">
                    <label
                      htmlFor="Description"
                      className="block text-sm font-medium text-gray-700">
                      Description
                    </label>

                    <div className="mt-1 ">
                      <textarea
                        id="Description"
                        name="description"
                        rows={5}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border-2"
                        defaultValue={""}
                        onChange={handleChange}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Write a few sentences about your project.
                    </p>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="cover_photo"
                      className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true">
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            {" "}
                            <Upload setImgUrl={(imgUrl) => setState({ ...state, image: imgUrl })} />
                            {/* <span>Upload a file</span> */}
                            {/* <input id="file-upload" name="file-upload" type="file" className="sr-only" /> */}
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="cover_photo"
                      className="block text-sm font-medium text-gray-700">
                      Video Attract More Investors
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="Project_name"
                            className="block text-sm font-medium text-gray-700">
                            Your Youtube or Vimeo Video Link
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="Project_name"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full l:text-l border-gray-300 rounded-md p-2 border-2"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        {/* <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <p className="text-xs text-gray-500">Or Upload a MP4 up t0 20MB</p>
                            <UploadFile
                              setVideo={(videoUrl) => setState({ ...state, video: videoUrl })}
                            />
                          </label>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-10" style={{ borderTopWidth: "0px" }}>
                  <label htmlFor="contract" className="block text-sm font-medium text-gray-700">
                    Contract Details
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="contract"
                      name="contract"
                      rows={5}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border-2"
                      defaultValue={""}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Write policy about your project.</p>
                </div>

                <div className="pt-8">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      We'll always let you know about important changes, but you pick what else you
                      want to hear about.
                    </p>
                  </div>
                  <div className="mt-6">
                    <fieldset>
                      <legend className="text-base font-medium text-gray-900">By Email</legend>
                      <div className="mt-4 space-y-4">
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded "
                              onChange={handleChange}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="comments" className="font-medium text-gray-700">
                              Comments
                            </label>
                            <p className="text-gray-500">
                              Get notified when someones posts a comment your project.
                            </p>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="candidates" className="font-medium text-gray-700">
                              Investors
                            </label>
                            <p className="text-gray-500">
                              Get notified when an investor saved your project for updates.
                            </p>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="offers" className="font-medium text-gray-700">
                              Transcations
                            </label>
                            <p className="text-gray-500">
                              Get notified when an investor invested in your project.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                  </button>
                  <Link href="/project/sharedwallet">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Submit
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
