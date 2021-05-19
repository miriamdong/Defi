/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  ChartBarIcon,
  CreditCardIcon,
  HomeIcon,
  InboxIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

// const navigation = [
//   { name: "Dashboard", icon: HomeIcon, href: "/", current: true },
//   { name: "Community", icon: UsersIcon, href: "", count: 3, current: false },
//   { name: "Inbox", icon: FolderIcon, href: "#", count: 4, current: false },
//   { name: "Calendar", icon: CalendarIcon, href: "#", current: false },
//   { name: "Balances", icon: InboxIcon, href: "#", count: 12, current: false },
//   { name: "Reports", icon: ChartBarIcon, href: "#", current: false },
// ];

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "History", href: "#", icon: CalendarIcon, current: false },
  { name: "My Wallet", href: "myWallet", icon: CreditCardIcon, current: false },
  { name: "Inbox", href: "inbox", icon: InboxIcon, count: 3, current: false },
  { name: "Community", href: "/blog", icon: UserGroupIcon, count: 12, current: false },
  { name: "Reports", href: "report", icon: ChartBarIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        <img
          className="h-8 w-auto"
          src="https://en.bitcoinwiki.org/upload/en/images/e/eb/Metamask.png"
          alt="Workflow"
        />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
              )}>
              <item.icon
                className={classNames(
                  item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500",
                  "mr-3 flex-shrink-0 h-6 w-6",
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current ? "bg-white" : "bg-gray-100 group-hover:bg-gray-200",
                    "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full",
                  )}>
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
