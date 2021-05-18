import Dashboardnav from "/components/dashboard/dashboardnav";
import { useState, useEffect } from "react";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
import Seo from "../../../../components/SEO";
import { useUser, mapUserData } from "../../../../firebase/useUser";
import { auth } from "../../../../firebase/initFirebase";

export default function Example() {
  const [projects, setProjects] = useState([]);
  const [uid, setUid] = useState("");
  const { user, logout } = useUser();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const userData = mapUserData(user);
        console.log({ userData });
        setUid(userData.id);
      }
    });
    const current = firebase.auth().currentUser;
    if (current) {
      console.log({ current });
      console.log(current.uid);
      setUid(current.uid);
    }
    // else if (auth !== null) {
    //   console.log("auth", auth.currentUser);
    //   // console.log(auth.currentUser.uid);
    //   setUid(auth.currentUser.uid);
    // }
  }, [user]);

  useEffect(() => {
    axios.get(`https://defidapp.herokuapp.com/projects/users/${uid}`).then((response) => {
      console.log(response);
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <Dashboardnav />

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              MY PROJECT
            </h2>
          </div>
          <Seo />
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {projects.map((project) => (
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={project.image} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={project.link} className="hover:underline">
                        Link
                      </a>
                    </p>
                    <a href={project.link} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{project.name}</p>
                      <p className="mt-3 text-base text-gray-500">{project.description}</p>
                    </a>
                  </div>
                  <div className="pr-3 mt-6">
                    <div className="order-1 text-base leading-6 font-medium text-indigo-500 text-center">
                      Progressing
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
                        <span className="sr-only">{firebase.auth().currentUser.displayName}</span>
                        <img className="h-10 w-10 rounded-full" src={project.image} alt="" />
                      </a>
                    </div>

                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={project.link} className="hover:underline">
                          {firebase.auth().currentUser.displayName}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={project.target_date}>{project.target_date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{project.min_amount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
