import React, { useState } from "react";
import { Link } from "@reach/router";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  return (
    <div className="relative bg-gray-800 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none">
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Invest in founders</span>{" "}
                    <span className="text-indigo-400 md:block">building the future</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Invest as little as $100 in the startups and small businesses you believe in.
                    Together, we can help thousands of founders shooting their shot
                  </p>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-lgfont-medium text-gray-700 text-center">JOIN US TODAY</p>
                    </div>

                    <div className="mt-20">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Full name
                          </label>
                          <input
                            type="text"
                            className="my-1 p-1 w-full "
                            name="displayName"
                            value={displayName}
                            placeholder="Full name"
                            id="displayName"
                            required
                            onChange={(event) => onChangeHandler(event)}
                          />
                        </div>

                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            Your email
                          </label>
                          <input
                            type="email"
                            className="my-1 p-1 w-full"
                            name="userEmail"
                            value={email}
                            placeholder="Your email"
                            id="userEmail"
                            onChange={(event) => onChangeHandler(event)}
                          />
                        </div>

                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            type="password"
                            className="mt-1 mb-3 p-1 w-full"
                            name="userPassword"
                            value={password}
                            placeholder="Your Password"
                            id="userPassword"
                            onChange={(event) => onChangeHandler(event)}
                          />
                        </div>

                        <div>
                          <button
                            className="bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2
                            focus:ring-offset-2 focus:ring-indigo-500 w-full py-2 text-white"
                            onClick={(event) => {
                              createUserWithEmailAndPasswordHandler(event, email, password);
                            }}>
                            Create your account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{" "}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Terms
                      </a>
                      ,{" "}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Data Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
