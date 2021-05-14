/* This example requires Tailwind CSS v2.0+ */
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
const people = [
  {
    name: 'Lindsay Walton',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  // More people...
]
const activityItems = [
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  // More items...
]
const handleChange = (event) => {
  const sth = { ...state };
  sth[event.target.name] = event.target.value;
  setState({ ...sth, user_id: firebase.auth().currentUser.uid });
  console.log("user_id:", state.user_id);
};

export default function Comments() {
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

  return (
    <div> 
      <form onSubmit={submitComment}>
           <div className="sm:col-span-10 pt-5">
                    <label
                      htmlFor="Description"
                      className="block text-lg font-medium text-gray-700">
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
               
      <ul className="divide-y divide-gray-200">
        {comments.map((activityItem) => (
          <li key={activityItem.id} className="py-4">
            <div className="flex space-x-3">
              <img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
                  <p className="text-sm text-gray-500">{activityItem.time}</p>
                </div>
                <p className="text-sm text-gray-500">
                  Deployed {activityItem.project} ({activityItem.commit} in master) to {activityItem.environment}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
