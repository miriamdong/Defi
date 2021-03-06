import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
// import useAppData from "../hooks/useAppData";
// import { useRouter } from 'next/router'
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav({ tabs, href, name }) {
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    let temPage = window.location.href.split("/");
    temPage = temPage[temPage.length - 1];
    setCurrentPage(temPage);
  });
  // const { state } = useAppData();
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 w-screen">
        <main className="bg-white">
          <div className="max-w-7xl mx-auto sm:px-6">
            <div className="border-gray-200 sm:pb-0 pt-40 pl-10 ax-w-3xl mx-auto border-b ">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{name}</h3>
              <div className="mt-3 sm:mt-4">
                <div className="sm:hidden">
                  <label htmlFor="current-tab" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="current-tab"
                    name="current-tab"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue={tabs.find((tab) => tab.current).name}>
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (
                      <Link href={href + tab.href}>
                        <a
                          key={tab.name}
                          className={classNames(
                            tab.slug == currentPage
                              ? "border-indigo-500 text-indigo-600"
                              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                            "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm",
                          )}
                          aria-current={tab.slug == currentPage ? "page" : undefined}>
                          {tab.name}
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
