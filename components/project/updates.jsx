/* This example requires Tailwind CSS v2.0+ */
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Fragment } from "react";
import { ChatAltIcon, TagIcon, UserCircleIcon } from "@heroicons/react/solid";

const activity = [
  {
    id: 1,
    type: "comment",
    person: { name: "Eduardo Benz", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    date: "6d ago",
  },
  {
    id: 2,
    type: "assignment",
    person: { name: "Hilary Mahy", href: "#" },
    assigned: { name: "Kristin Watson", href: "#" },
    date: "2d ago",
  },
  {
    id: 3,
    type: "tags",
    person: { name: "Hilary Mahy", href: "#" },
    tags: [
      { name: "Bug", href: "#", color: "bg-rose-500" },
      { name: "Accessibility", href: "#", color: "bg-indigo-500" },
    ],
    date: "6h ago",
  },
  {
    id: 4,
    type: "comment",
    person: { name: "Jason Meyers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "2h ago",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const handleChange = (event) => {
  const sth = { ...state };
  sth[event.target.name] = event.target.value;
  setState({ ...sth, user_id: firebase.auth().currentUser.uid });
  console.log("user_id:", state.user_id);
};

export default function Update() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const submitComment = (event) => {
    console.log("submit comment", comment);
    event.preventDefault();
    const commentObject = {
      user_id: firebase.auth().currentUser.uid,
      project_id: router.query.id,
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
  const router = useRouter();
  useEffect(() => {
    axios
      .get(`https://defidapp.herokuapp.com/comments/projects/${router.query.id}`)
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  return (
    <div>
      <form onSubmit={submitComment}>
        <div className="sm:col-span-10 pt-5">
          <label htmlFor="Description" className="block text-lg font-medium text-gray-700">
            Leave a comment
          </label>

          <div className="mt-1 ">
            <textarea
              id="Description"
              name="comments"
              rows={10}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border-2"
              onChange={(event) => {
                setComment(event.target.value);
              }}
              value={comment}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Leave a Comment
          </button>
        </div>
      </form>

      <div className="flow-root pt-5">
        <ul className="-mb-8">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <div className="relative pb-8">
                {activityItemIdx !== activity.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  {activityItem.type === "comment" ? (
                    <>
                      <div className="relative">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                          src={activityItem.imageUrl}
                          alt=""
                        />

                        <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                          <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a
                              href={activityItem.person.href}
                              className="font-medium text-gray-900">
                              {activityItem.person.name}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Commented {activityItem.date}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>{activityItem.comment}</p>
                        </div>
                      </div>
                    </>
                  ) : activityItem.type === "assignment" ? (
                    <>
                      <div>
                        <div className="relative px-1">
                          <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                            <UserCircleIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 py-1.5">
                        <div className="text-sm text-gray-500">
                          <a href={activityItem.person.href} className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a>{" "}
                          assigned{" "}
                          <a
                            href={activityItem.assigned.href}
                            className="font-medium text-gray-900">
                            {activityItem.assigned.name}
                          </a>{" "}
                          <span className="whitespace-nowrap">{activityItem.date}</span>
                        </div>
                      </div>
                    </>
                  ) : activityItem.type === "tags" ? (
                    <>
                      <div>
                        <div className="relative px-1">
                          <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                            <TagIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 py-0">
                        <div className="text-sm leading-8 text-gray-500">
                          <span className="mr-0.5">
                            <a
                              href={activityItem.person.href}
                              className="font-medium text-gray-900">
                              {activityItem.person.name}
                            </a>{" "}
                            added tags
                          </span>{" "}
                          <span className="mr-0.5">
                            {activityItem.tags.map((tag) => (
                              <Fragment key={tag.name}>
                                <a
                                  href={tag.href}
                                  className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                                  <span className="absolute flex-shrink-0 flex items-center justify-center">
                                    <span
                                      className={classNames(tag.color, "h-1.5 w-1.5 rounded-full")}
                                      aria-hidden="true"
                                    />
                                  </span>
                                  <span className="ml-3.5 font-medium text-gray-900">
                                    {tag.name}
                                  </span>
                                </a>{" "}
                              </Fragment>
                            ))}
                          </span>
                          <span className="whitespace-nowrap">{activityItem.date}</span>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
