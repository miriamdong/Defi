import Header from "./header";
import React, { useRef, useState ,useEffect} from "react"
import Link from 'next/link'
import Story from '/components/project/story'
import axios from "axios";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "Story", href:"/story", current: false, slug:'story' },
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
const router = useRouter();

  const [project, setProject] = useState({
    name: "",
    description: "",
    target_amount: "",
    target_date: "",
    min_amount: "",
    link: "",
    round: "",
    contract: "",
    user_id: "",
    image: "",
  });

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const submitComment = (event) => {
    console.log("submit comment", comment);
    event.preventDefault();
    const commentObject = {
      user_id: firebase.auth().currentUser.uid,
      project_id: project.id,
      comment: comment,
    };
    axios.post("https://defidapp.herokuapp.com/comments", commentObject).then((res) => {
      axios
        .get(`https://defidapp.herokuapp.com/comments/projects/${router.query.id}`)
        .then((response) => {
          setComments(response.data);
          setComment("");
        });
    });
  };

  useEffect(() => {
    axios.get(`https://defidapp.herokuapp.com/projects/${router.query.id}`).then((response) => {
      setProject(response.data);
    });

    axios
      .get(`https://defidapp.herokuapp.com/comments/projects/${router.query.id}`)
      .then((response) => {
        setComments(response.data);
      });
  }, []);
return (
  <>
       
       <Header />
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      
        <main className="bg-white">
          <div className="max-w-3xl mx-auto">
          <div className="border-gray-200 ax-w-3xl border-b ">
              {/* <h3 className="text-4xl leading-6 font-medium text-gray-900">HI</h3> */}
              <div className="px-4 text-8xl mt-3 sm:mt-4">
                <div className=" sm:hidden ">
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
                      <Link href={"/project/"+ project.id + tab.href}>
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
              </div>
        </main>
      </div>
     
    </>
  );
}
