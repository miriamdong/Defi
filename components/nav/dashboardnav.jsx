import { useUser } from "../../firebase/useUser";
import React, { useRef, useState ,useEffect} from "react"
import Link from 'next/link'
import { IoTAnalytics } from "aws-sdk";
import {tabs} from '../scr/dashboardnav'
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Dashboardnav() {
  const { user, logout } = useUser();
  console.log("????",user)
  const [currentPage,setCurrentPage] =useState("")
  useEffect(()=>{
  let temPage = window.location.href.split('/')
  temPage = temPage[temPage.length-1]
    setCurrentPage(temPage)
    console.log("OMG")
})
  return (
    <>     
            <div className="border-gray-200 sm:pb-0 p-40 w-screen ax-w-3xl mx-auto border-b ">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Hi </h3>
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
                      <Link href={"/user/" + firebase.auth().currentUser.uid + tab.href}>
                      <a
                        key={tab.name}                        
                        className={classNames(
                          tab.slug == currentPage
                            ? "border-indigo-500 text-indigo-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                          "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm",
                        )}
                        aria-current={tab.slug ==currentPage ? "page" : undefined}>
                        {tab.name}
                      </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              </div>

        
    </>
  );
}