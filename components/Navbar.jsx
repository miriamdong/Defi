import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Sign_in from "../components/Auth/SignIn";
import { useUser } from "../firebase/useUser";
import React, { useRef, useState } from "react";
import { auth } from "../firebase/initFirebase";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuItem } from "@material-ui/core";
import Notification from "./Notification";
import UserDropdown from "../components/UserDropdown";

const solutions = [
  {
    name: "My Inbox",
    description: "Get a better understanding of where your traffic is coming from.",
    href: "wallets/inbox",
    icon: ChartBarIcon,
  },
  {
    name: "Get More Coins",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "token/buy",
    icon: CursorClickIcon,
  },
  {
    name: "My Wallet",
    description: "Connect with third-party tools that you're already using.",
    href: "wallets/myWallet",
    icon: ViewGridIcon,
  },
];
const callsToAction = [{ name: "Call to Help", href: "#", icon: PhoneIcon }];
const resources = [
  {
    name: "My Project",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "dashboard/myproject",
    icon: SupportIcon,
  },
  {
    name: "Invested",
    description: "Learn how to maximize our platform to get the most out of it.",
    href: "dashboard/Invested",
    icon: BookmarkAltIcon,
  },
  {
    name: "History",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "dashboard/History",
    icon: CalendarIcon,
  },
  {
    name: "Liked",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "dashboard/Liked",
    icon: PlayIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const user = useContext(UserContext);
// const { photoURL, displayName, email } = user;

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { user, logout } = useUser();
  const router = useRouter();
  console.log("!!!", user);
  return (
    <Popover className="fixed bg-white w-screen z-50 h-32 border-b">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 ">
            <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-4">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a href="#">
                    <span className="sr-only">Workflow</span>

                    <img
                      className="h-30 sm:h-10 "
                      src="/img/cat.png"
                      alt=""
                      style={{ height: "100px", width: "160px" }}
                    />
                  </a>
                </Link>
                <Notification />
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                        )}>
                        <span>Wallets</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500",
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={user ? "/user/" + user.id + "/" + item.href : "#"}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a
                  href="/user/faq"
                  className="text-base font-medium text-gray-500 hover:text-gray-900">
                  FAQ
                </a>
                <a href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Blog
                </a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                        )}>
                        <span>Projects</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500",
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-sm sm:px-0">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <Link href={user ? "/user/" + user.id + "/" + item.href : "#"}>
                                  <a
                                    key={item.name}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <a
                                        href={item.href}
                                        className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </a>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {user ? (
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-blue-500",
                            "group bg-white rounded-md inline-flex items-center text-3xl font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                          )}>
                          <img
                            className="inline-block h-8 w-8 rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                          {/* {user.name} */}
                          <a
                            href="#"
                            className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </a>
                        </Popover.Button>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1">
                          <Popover.Panel
                            static
                            className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                <UserDropdown />
                                <button
                                  className="overflow-visible ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                  onClick={async () => {
                                    await auth.signOut();
                                    router.replace("/");
                                  }}>
                                  Log out
                                </button>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ) : (
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          id="sign-in-button"
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "sign-in-button goverflow-visible ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white font-medium bg-indigo-600 hover:bg-indigo-700",
                          )}>
                          <span>Log in</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500",
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1">
                          <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                            <Sign_in></Sign_in>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                )}
              </div>
              {user ? (
                <Link href={"/user/" + user.id + "/wallets/myWallet"}>
                  <div className="flex flex-col">
                    <img
                      className="h-16"
                      src="https://cdn.dribbble.com/users/2574702/screenshots/6702374/metamask.gif"
                      alt="BUY COINS"
                    />
                    {/* <Button color="primary">Click Me</Button> */}
                  </div>
                </Link>
              ) : (
                <div
                  className="flex flex-col"
                  onClick={() => {
                    const Sign_in = document.getElementsByClassName("sign-in-button");
                    Sign_in[0].click();
                    setToggle((prev) => {
                      return !prev;
                    });
                  }}>
                  {!toggle ? (
                    <div className="flex flex-col">
                      <img className="h-16" src="/img/catcoin.png" alt="BUY COINS" />
                      {/* <p className="text-blue-500">Buy</p> */}
                    </div>
                  ) : (
                    <h4>PLEASE LOGIN FIRST</h4>
                  )}
                </div>
              )}
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src="/img/cat.png" alt="Workflow" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={user ? "/token/" + user.id + "/" + item.href : "#"}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Pricing
                    </a>

                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Docs
                    </a>
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        href={user ? "/user/" + user.id + "/" + item.href : "#"}
                        className="text-base font-medium text-gray-900 hover:text-gray-700">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    {/* <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a> */}
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-gray-900" : "text-gray-500",
                              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                            )}>
                            <span>Projects</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500",
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1">
                            <Popover.Panel
                              static
                              className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {resources.map((item) => (
                                    <a
                                      key={item.name}
                                      href={user ? "/user/" + user.id + "/" + item.href : "#"}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                  <div className="mt-5 text-sm">
                                    <a
                                      href="#"
                                      className="font-medium text-indigo-600 hover:text-indigo-500">
                                      {" "}
                                      View all posts <span aria-hidden="true">&rarr;</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
