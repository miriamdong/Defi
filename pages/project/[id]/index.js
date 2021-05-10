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

  useEffect(() => {
    axios.get(`https://defidapp.herokuapp.com/projects/${router.query.id}`)
      .then((response) => {
        setProject(response.data[0])
      });

    axios.get(`https://defidapp.herokuapp.com/comments/projects/${router.query.id}`)
      .then((response) => {
        console.log(response.data)
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
    </div>
  )
}

export default Project