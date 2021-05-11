import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

const Project = () => {
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
    image: ""
  });

  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")

  const submitComment = (event) => {
    console.log("submit comment", comment)
    event.preventDefault();
    const commentObject = {
      "user_id": "2",
      "project_id": project.id,
      "comment": comment
    }
    axios.post("https://defidapp.herokuapp.com/comments", commentObject)
      .then((res) => {
        axios.get(`https://defidapp.herokuapp.com/comments/projects/${router.query.id}`)
          .then((response) => {
            setComments(response.data);
            setComment("");
          });
      });
  }

  useEffect(() => {
    axios.get(`https://defidapp.herokuapp.com/projects/${router.query.id}`)
      .then((response) => {
        setProject(response.data[0])
      });

    axios.get(`https://defidapp.herokuapp.com/comments/projects/${router.query.id}`)
      .then((response) => {
        setComments(response.data)
      });
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-gray-400">
      <div className="w-80 bg-white rounded shadow-2xl">
        <div className="h-60 bg-gray-200 rounded-tr rounded-tl animate-pulse">
          <img src={project.image} className="h-60 w-80" />
        </div>
        <div className="p-2">
          <div className="h-20 rounded-sm bg-gray-200 animate-pulse mb-4 flex items-center justify-center"><p className="text-base p-2">{project.description}</p></div>
        </div>
        <div className="pl-2 pr-2">
          <div className="h-7 rounded-sm bg-gray-200 animate-pulse mb-4 flex items-center justify-center">
            <span className="text-base">{project.name}</span>
          </div>
          <div className="grid grid-cols-1 gap-1">
            <div className="h-7 rounded-sm bg-gray-200 animate-pulse flex items-center justify-center"><span>Target Amount: </span><span>{project.target_amount}</span></div>
            <div className="h-7 rounded-sm bg-gray-200 animate-pulse flex items-center justify-center"><span>Target Date: </span><span>{project.target_date.split("T")[0]}</span></div>
            <div className="h-7 rounded-sm bg-gray-200 animate-pulse flex items-center justify-center"><span>Min Amount: </span><span>{project.min_amount}</span></div>
            <div className="h-7 rounded-sm bg-gray-200 animate-pulse flex items-center justify-center"><span>Round: </span><span>{project.round}</span></div>
          </div>
        </div>
        <div className="p-1">
          <div className="h-20 rounded-sm bg-gray-200 animate-pulse mb-4 flex items-center justify-center">
            <form onSubmit={submitComment}>
              <input className="p-3" onChange={(event) => {setComment(event.target.value)}} value={comment}></input>
              <button className="btn btn-blue">Comment</button>
            </form>
          </div>
        </div>

        {comments.map((comment) => {
          return (
            <div className="p-1">
              <div className="h-20 rounded-sm bg-gray-200 animate-pulse mb-4 flex items-center">
                <span>User {comment.user_id}:</span><span> &nbsp;&nbsp;{comment.comment}</span>
              </div>
            </div>
          )
        })}

      </div>
    </div>

  )
}

export default Project