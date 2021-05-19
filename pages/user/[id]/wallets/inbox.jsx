import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";
import Inbox from "../../../../components/Inbox";
import Searchbar from "../../../../components/dashboard/Searchbar";
import Sidebar from "../../../../components/dashboard/Sidebar";
import PageHeader from "../../../../components/dashboard/PageHeader";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "History", href: "#", icon: ClockIcon, current: false },
  { name: "Balances", href: "#", icon: ScaleIcon, current: false },
  { name: "Projects", href: "/", icon: CreditCardIcon, current: false },
  { name: "Subscribers", href: "#", icon: UserGroupIcon, current: false },
  { name: "Reports", href: "#", icon: DocumentReportIcon, current: false },
];
const secondaryNavigation = [
  { name: "Settings", href: "#", icon: CogIcon },
  { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyInbox() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 pt-40">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 lg:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full">
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}>
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="hhttps://cdn.consensys.net/uploads/metamask-1.svg"
                  alt="Easywire logo"
                />
              </div>
              <nav
                className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-cyan-800 text-red"
                          : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 pt-6">
                  <div className="px-2 space-y-1">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                        <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <Sidebar />
        </div>
      </div>

      <div className="flex-1 overflow-auto focus:outline-none">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
          <button
            className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          {/* Search bar */}
          <Searchbar />
        </div>
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
          {/* Page header */}
          <PageHeader />
          <div className="mt-8">
            <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
              Recent Inbox
            </h2>
            <Inbox />
          </div>
        </main>
      </div>
    </div>
  );
}
