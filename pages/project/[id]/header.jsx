/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, NewspaperIcon, PhoneIcon, SupportIcon, XIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { CursorClickIcon, MailOpenIcon, UsersIcon } from "@heroicons/react/outline";

const supportLinks = [
  {
    name: "Sales",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: PhoneIcon,
  },
  {
    name: "Technical Support",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: SupportIcon,
  },
  {
    name: "Media Inquiries",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: NewspaperIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();

  const [project, setProject] = useState({
    name: "",
    description: "",
    target_amount: "",
    target_date: "",
    min_amount: "",
    link: "",
    round: "",
    contract: "",
    user_id: "",
    image: "",
  });

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const submitComment = (event) => {
    console.log("submit comment", comment);
    event.preventDefault();
    const commentObject = {
      user_id: firebase.auth().currentUser.uid,
      project_id: project.id,
      comment: comment,
    };
    axios.post("https://defidapp.herokuapp.com/comments", commentObject).then((res) => {
      axios
        .get(`https://defidapp.herokuapp.com/comments/projects/${router.query.id}`)
        .then((response) => {
          setComments(response.data);
          setComment("");
        });
    });
  };

  useEffect(() => {
    axios.get(`https://defidapp.herokuapp.com/projects/${router.query.id}`).then((response) => {
      setProject(response.data);
    });

    axios
      .get(`https://defidapp.herokuapp.com/comments/projects/${router.query.id}`)
      .then((response) => {
        setComments(response.data);
      });
  }, []);
  console.log("$$$Project",project)
  const stats = [
    {
      id: 1,
      name: "Min token price",
      stat: "100",
      href: "/img/catcoin.png",
      change: "122",
      changeType: "",
    },
    {
      id: 2,
      name: "Target Amount",
      stat: project.target_amount+" "+"MEOW",
      href: "/img/targetamount.jpeg",
      change: "",
      changeType: "",
    },
  ];

  return (
    <div className="bg-white pt-40">
      {/* Header */}
      <div className="min-h-40 bg-white flex">
        <div className="hidden lg:block relative w-0 flex-1">
          <img className="absolute inset-0 h-full w-full object-cover" src={project.image} alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img className="h-12 w-auto" src="/img/walletbutton.png" alt="" />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">FUNDING</h2>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Need more coin? Click me</p>

                  <div className="mt-1 grid grid-cols-1 gap-3">
                    <div>
                      <a
                        href="#"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Wallets</span>
                        <svg
                          className="w-5 h-10"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M 10,30
                          A 20,20 0,0,1 50,30
                          A 20,20 0,0,1 90,30
                          Q 90,60 50,90
                          Q 10,60 10,30 z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div className="space-y-1">
                    <label htmlFor="token" className="block text-sm font-medium text-gray-700">
                      Token
                    </label>
                    <div className="mt-1">
                      <input
                        id="token"
                        name="token"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                        Notification
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Invest!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-10  sm:px-6 lg:px-8 "
        aria-labelledby="contact-heading">
        <div className="max-w-10xl mx-auto ">
          <dl className="rounded-lg h-60 bg-white shadow-lg sm:grid sm:grid-cols-2">
            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0
            ">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">By someone</dt>
              <dd className="order-1 text-5xl font-extrabold text-indigo-600 pt-5">{project.name}</dd>
            </div>
            <div className="flex flex-col text-center">
              <dl
                className="h-10px grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2"
                style={{ height: "100px" }}>
                {stats.map((item) => (
                  <div
                    key={item.id}
                    className="relative bg-white px-4 sm:pt-6 rounded-lg overflow-hidden">
                    <dt>
                      <div className="absolute rounded-md p-2">
                        <img src={item.href} className="h-10 w-10 text-white" aria-hidden="true" />
                      </div>
                      <p className="ml-10 text-lg font-medium text-gray-500 truncate">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline ">
                      <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                      {/* <p
                        className={classNames(
                          item.changeType === "increase" ? "text-green-600" : "text-red-600",
                          "ml-2 flex items-baseline text-sm font-semibold",
                        )}>
                        {item.changeType === "increase" ? (
                          <ArrowSmUpIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ArrowSmDownIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                            aria-hidden="true"
                          />
                        )}

                        <span className="sr-only">
                          {item.changeType === "increase" ? "Increased" : "Decreased"} by
                        </span>
                        {item.change}
                      </p> */}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="pr-3">
                <div className="order-1 text-lg leading-6 font-medium text-gray-500">
                  Progressing
                </div>
                <div className="">
                  <span className="text-2xl font-semibold inline-block text-pink-600">
                    {project.funding}%
                  </span>
                </div>
                <div className="relative pt-3 w-full ">
                  <div className=" overflow-hidden h-8 mb-4 text-xs flex rounded bg-purple-200">
                    <div
                      style={{ width: project.funding }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
