import FirebaseAuth from "./FirebaseAuth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase/initFirebase";
import { Link } from "@reach/router";
import firebase from "firebase/app";
import "firebase/auth";

export default function Sign_in() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  return (
    <div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  className="my-1 p-1 w-full"
                  name="userEmail"
                  value={email}
                  placeholder=""
                  id="userEmail"
                  onChange={(event) => onChangeHandler(event)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="userPassword" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  className="mt-1 mb-3 p-1 w-full"
                  name="userPassword"
                  value={password}
                  placeholder="Your Password"
                  id="userPassword"
                  onChange={(event) => onChangeHandler(event)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                className="bg-blue-600 hover:bg-blue-300 w-full py-2 text-white"
                onClick={(event) => {
                  signInWithEmailAndPasswordHandler(event, email, password);
                }}>
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or login with</span>
              </div>
              <FirebaseAuth />
            </div>
            <p className="text-center my-3">
              Don't have an account?{" "}
              <Link to="auth" className="text-blue-500 hover:text-blue-600">
                Sign up here
              </Link>{" "}
              <br />{" "}
              <Link to="PasswordReset" className="text-blue-500 hover:text-blue-600">
                Forgot Password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
