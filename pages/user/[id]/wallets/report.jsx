import SEO from "../../../../components/SEO";
import MainSidebar from "../../../../components/dashboard/MainSidebar";
import StockChart from "../../../../components/dashboard/StockChart";
import React from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  CreditCardIcon,
  HomeIcon,
  InboxIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Chart from "../../../../components/Meta/Chart";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: false },
  { name: "History", href: "#", icon: CalendarIcon, current: false },
  { name: "My Wallet", href: "myWallet", icon: CreditCardIcon, current: false },
  { name: "Inbox", href: "inbox", icon: InboxIcon, count: 3, current: false },
  { name: "Community", href: "/blog", icon: UserGroupIcon, count: 12, current: false },
  { name: "Reports", href: "report", icon: ChartBarIcon, current: true },
];

const data = {
  stockFullName: "RocketMEOW.",
  stockShortName: "MEOW",
  price: {
    current: 2.32,
    open: 2.23,
    low: 2.215,
    high: 2.325,
    cap: 93765011,
    ratio: 20.1,
    dividend: 1.67,
  },
  chartData: {
    labels: ["10:00", "", "", "", "12:00", "", "", "", "2:00", "", "", "", "4:00"],
    data: [2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325, 2.325, 2.32],
  },
};

export default function report() {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 pt-28">
      {/* <MainSidebar /> */}
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col mr-10 w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <MainSidebar />
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-1">
        <dt>
          <div className="bg-indigo-500 rounded-md p-3 min-w-full w-full">
            <StockChart info={data} />
          </div>
        </dt>
        <Chart />
      </dl>
    </div>
  );
}
