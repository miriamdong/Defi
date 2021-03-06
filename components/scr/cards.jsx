/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
import Fav from "../Fav";
import Clock from "../Clock";
import moment from "moment";
import React from "react";

const today = moment().format("MMM Do YY");
console.log(today);
const currentDate = new Date();
const year =
  currentDate.getMonth() === 11 && currentDate.getDate() > 23
    ? currentDate.getFullYear() + 1
    : currentDate.getFullYear();

export default function C({ projects, currentUser }) {
  return (
    <>
      {projects.map((project) => (
        <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden ">
          <Link href="/project/[id]/story" as={`/project/${project.id}/story`}>
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={project.image} alt="" />
            </div>
          </Link>
          <div className="flex-1 bg-white p-8 flex flex-col justify-between">
            <div className="flex-1">
              {/* <p className="text-sm font-medium text-indigo-600"> */}
              {/* <a href={project.link} className="hover:underline">
                  {project.link}
                  </a> */}
              {/* </p> */}
              {/* <a href={project.link} className="block mt-2"> */}
              <p className="text-xl font-semibold text-gray-900">{project.name}</p>
              <p className="mt-3 text-base text-gray-500">{project.description}</p>

              <Fav projectId={project.id} />

              {/* </a> */}
            </div>
            <div className="pr-3 mt-6">
              <div className="order-1 text-base leading-6 font-medium text-indigo-500 text-center">
                Raised from {project.investors} investors
              </div>
              <div className="text-right">
                <span className="text-base font-semibold inline-block text-indigo-500">
                  {project.funding}%
                </span>
              </div>
              <div className="relative w-full ">
                <div className=" overflow-hidden h-6 mb-4 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: project.funding + "%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href={project.link}>
                  <span className="sr-only">NAME</span>
                  <img className="h-10 w-10 rounded-full" src={project.image} alt="" />
                </a>
              </div>

              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {/* <a href={project.link} className="hover:underline"> */}
                  {project.username}
                  {/* </a> */}
                </p>
                <div className="flex space-x-5 text-sm text-gray-500">
                  {/* <time dateTime={project.target_date}>{project.target_date.split("T")[0]}</time> */}
                  <Clock date={project.target_date} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
