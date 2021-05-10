import axios from 'axios';
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react';
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
        
        <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button type="submit">Comment</Button>
    </form>

        <Link href="/">
        <button>Go Back</button>
        </Link>
      </div>
  )
}

export default Project