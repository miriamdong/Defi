import { MenuAlt1Icon } from "@heroicons/react/outline";
import Inbox from "../../../../components/Inbox";
import Searchbar from "../../../../components/dashboard/Searchbar";
import Sidebar from "../../../../components/dashboard/Sidebar";
import PageHeader from "../../../../components/dashboard/PageHeader";
import MainSidebar from "../../../../components/dashboard/MainSidebar";
import {
  ClockIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: false },
  { name: "History", href: "#", icon: ClockIcon, current: false },
  { name: "Wallet", href: "/wallet", icon: ScaleIcon, current: false },
  { name: "Inbox", href: "inbox", icon: CreditCardIcon, current: true },
  { name: "Community", href: "/blog", icon: UserGroupIcon, current: false },
  { name: "Reports", href: "report", icon: DocumentReportIcon, current: false },
];

export default function MyInbox() {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 pt-32">
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
          <Searchbar className="m-10" />
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
