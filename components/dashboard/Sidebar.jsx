import {
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "History", href: "#", icon: ClockIcon, current: false },
  { name: "Balances", href: "myWallet", icon: ScaleIcon, current: false },
  { name: "Inbox", href: "inbox", icon: CreditCardIcon, current: false },
  { name: "Community", href: "/blog", icon: UserGroupIcon, current: false },
  { name: "Reports", href: "/myproject", icon: DocumentReportIcon, current: false },
];
const secondaryNavigation = [
  { name: "Settings", href: "#", icon: CogIcon },
  { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
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
                  src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                  alt="Easywire logo"
                />
              </div>
              <nav
                className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-cyan-800 text-white"
                          : "block rounded-md py-2 px-3 text-base font-medium",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
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

      <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="h-8 w-auto"
            src="https://en.bitcoinwiki.org/upload/en/images/e/eb/Metamask.png"
            alt="MetaMask Wallet"
          />
        </div>
        <nav
          className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
          aria-label="Sidebar">
          <div className="px-2 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-cyan-800 text-pink-600"
                    : "text-cyan-100 hover:text-pink hover:bg-cyan-600",
                  "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md",
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
                  className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                  <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
