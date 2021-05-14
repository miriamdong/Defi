import Header from "./header";
import React, { useRef, useState ,useEffect} from "react"
import Link from 'next/link'
import Story from '/components/project/story'


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "Story", href:"/Story", current: false, slug:'Story' },
  { name: "Overview", href: "/Overview", current: false, slug:'Overview' },
  { name: "Updates", href: "/Updates", current: true, slug:'Updates'},
  { name: "Comments", href: "/Comments", current: false, slug:'Comments'},
];

export default function Project () {
  const [currentPage,setCurrentPage] =useState("")
  useEffect(()=>{
  let temPage = window.location.href.split('/')
  temPage = temPage[temPage.length-1]
    setCurrentPage(temPage)
})
return (
  <>
       
      <Header />
           <div className="relative   pl-10 border-b border-gray-200 sm:pb-0 mx-auto">
              <h3 className="text-4xl leading-6 font-medium text-gray-900">HI</h3>
              <div className="px-4 text-8xl mt-3 sm:mt-4 ">
                <div className="text-8xl sm:hidden ">
                  <label htmlFor="current-tab" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="current-tab"
                    name="current-tab"
                    className="text-8xl block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue={tabs.find((tab) => tab.current).name}>
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className=" hidden sm:block ">
                  <nav className="-mb-px flex text-8xl space-x-10">
                    {tabs.map((tab) => (
                      <Link href={"/project/"+ tab.href}>
                      <a
                        key={tab.name}                        
                        className={classNames(
                          tab.slug == currentPage
                            ? "border-indigo-500 text-indigo-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                          "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-xl",
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
      <Story />
    </>
  );
}
