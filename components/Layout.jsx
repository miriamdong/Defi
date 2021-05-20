import { Fragment, useState, useEffect } from "react";
import { CurrencyDollarIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/solid";
import Searchbar from "./dashboard/Searchbar";
import ProfileDropdown from "./dashboard/ProfileDropdown";
import PageHeader from "./dashboard/PageHeader";
import Sidebar from "./dashboard/Sidebar";
import Activity from "./dashboard/Activity";
import Chart from "./Meta/Chart";
import { ArrowSmUpIcon } from "@heroicons/react/solid";
import MainSidebar from "./dashboard/MainSidebar";

const cards = [
  {
    name: "MEOW",
    href: "report",
    icon: ArrowSmUpIcon,
    amount: "Up 58.4%",
  },
  { name: "Account Gain/Loss", href: "#", icon: ChartBarIcon, amount: "$30,659" },
  { name: "Unrealized Gain/Loss", href: "#", icon: CurrencyDollarIcon, amount: "$60,954" },
];

export default function Wallet() {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 pt-28">
      {/* <MainSidebar /> */}
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <MainSidebar />
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
          <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <Searchbar />
            <div className="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown */}
              <ProfileDropdown />
            </div>
          </div>
        </div>
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
          {/* Page header */}
          <PageHeader />

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
              {/* <Chart /> */}
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                {cards.map((card) => (
                  <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <card.icon className="h-6 w-6 text-green-400" aria-hidden="true" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                              {card.name}
                            </dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                      <div className="text-sm">
                        <a
                          href={card.href}
                          className="font-medium text-pink-700 hover:text-cyan-900">
                          View Detail
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
              Recent activity
            </h2>
            {/* Activity list (smallest breakpoint only) */}
            {/* Activity table (small breakpoint and up) */}
            <Activity />
          </div>
        </main>
      </div>
    </div>
  );
}
