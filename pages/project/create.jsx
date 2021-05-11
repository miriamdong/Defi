// import UploadFile from '../../components/storage/UploadFile'
import Upload from "../../components/storage/AWS";
import Link from "next/link";
import React, { useRef, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import firebase from "firebase/app";
import "firebase/auth";
// import  Navbar  from '../../components/Navbar';

export default function Create() {
  // const [date, setDate] = useState(new Date());
  const [state, setState] = useState({
    name: "",
    description: "",
    target_amount: "",
    target_date: "",
    min_amount: "",
    link: "",
    round: 1,
    contract: "",
    user_id: "",
    image: "",
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
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };
  console.log(state);
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                        Project name
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
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="target_amount"
                        className="block text-sm font-medium text-gray-700">
                        Target Amount
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
                        Minmum Amount
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
                        Round
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
                        rows={10}
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
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                      logo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Change
                      </button>
                    </div>
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

                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-10" style={{ borderTopWidth: "0px" }}>
                  <label htmlFor="contract" className="block text-sm font-medium text-gray-700">
                    Contract
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="contract"
                      name="contract"
                      rows={10}
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
                              Get notified when someones posts a comment on a posting.
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
                              Candidates
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate applies for a job.
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
                              Offers
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate accepts or rejects an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="mt-6">
                      <div>
                        <legend className="text-base font-medium text-gray-900">
                          Push Notifications
                        </legend>
                        <p className="text-sm text-gray-500">
                          These are delivered via SMS to your mobile phone.
                        </p>
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="push_everything"
                            name="push_notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push_everything"
                            className="ml-3 block text-sm font-medium text-gray-700">
                            Everything
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push_email"
                            name="push_notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push_email"
                            className="ml-3 block text-sm font-medium text-gray-700">
                            Same as email
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push_nothing"
                            name="push_notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push_nothing"
                            className="ml-3 block text-sm font-medium text-gray-700">
                            No push notifications
                          </label>
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
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
