import Dashboardnav from "../../../../components/dashboard/dashboardnav";
import { useState, useEffect } from "react";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
import Seo from "../../../../components/SEO";
import { useUser, mapUserData } from "../../../../firebase/useUser";
import C from "../../../../components/scr/cards";

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
  }, [user]);

  useEffect(() => {
    axios
      .get(`https://defidapp.herokuapp.com/projects/users/${firebase.auth().currentUser.uid}`)
      .then((response) => {
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
            <C projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}
