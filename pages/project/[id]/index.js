import axios from 'axios';
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react';

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

  useEffect(() => {
   axios.get(`https://defidapp.herokuapp.com/projects/${router.query.id}`)
   .then((response) => {
     setProject(response.data[0])
   })
  }, [])
  
  return (
      <div>
        {project.name}<br/>
        {project.description}<br/>
        {project.target_amount}<br/>
        {project.target_date}<br/>
        {project.min_amount}<br/>
        {project.link}<br/>
        {project.round}<br/>
        {project.contract}<br/>
        <img src={project.image} width="300"/>
        <Link href="/">
        <button>Go Back</button>
        </Link>
      </div>
  )
}

export default Project