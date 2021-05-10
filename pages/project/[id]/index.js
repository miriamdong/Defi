import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Project = () => {
  const classes = useStyles();
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
      })
    })
    
  }

  useEffect(() => {
    axios.get(`https://defidapp.herokuapp.com/projects/${router.query.id}`)
      .then((response) => {
        setProject(response.data[0])
      });

    axios.get(`https://defidapp.herokuapp.com/comments/projects/${router.query.id}`)
      .then((response) => {
        setComments(response.data)
      })
  }, [])

  return (

    <div className="grid justify-items-center ...">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={project.image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.name}</div>
          <p className="text-gray-700 text-base">
            {project.description}
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          {comments.map((comment) => {
            return (<div>
              <span>user {comment.user_id}: {comment.comment}</span>
            </div>)
          })}
        </div>
      </div>
      <form  onSubmit={submitComment}>
        <label
          htmlFor="Project_name" > Comment: </label>
        <div className="mt-1">
          <input type="text" name="name" id="Project_name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full l:text-l border-gray-300 rounded-md p-2 border-2" value={comment} onChange={(event) => setComment(event.target.value)}/>
        </div>
        <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
      </form>
    </div>
  )
}

export default Project