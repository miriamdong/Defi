import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { useState, useEffect } from "react";
import axios from 'axios';
import firebase from "firebase/app";
import "firebase/auth";


const Fav = ({ projectId }) => {
  const [fav, setFav] = useState(true);

  useEffect(() => {
    const onCountIncrease = (count) => setCount(count.val());

    const createFav = (url, uid) => { };
    const deleteFav = (url, uid) => { };
    const readFavs = (url, uid) => { };
  }, [projectId]);

  const setFavorite = (fav) => {
    console.log(firebase.auth())
    setFav(fav)
    if (firebase.auth().currentUser !== undefined) {
      const likeObject = {
        "auth_id": firebase.auth().currentUser.uid,
        "project_id": projectId
      }
      if (!fav) {
        axios.post("https://defidapp.herokuapp.com/likes", likeObject).then((res) => {
          console.log(res)
        }).catch(() => {
          console.log('error liking')
        })
      } else {
        axios.post("https://defidapp.herokuapp.com/likes/delete", likeObject).then((res) => {
          console.log(res)
        }).catch(() => {
          console.log('error disliking')
        });
      }
    }
  }

  return (
    <>
      {fav && (
        <IconButton
          onClick={() => {
            setFavorite(!fav);
          }}
          aria-label="delete"
          color="primary">
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </IconButton>
      )}
      {!fav && (
        <IconButton
          onClick={() => {
            setFavorite(!fav);
          }}
          aria-label="delete"
          color="primary">
          <Favorite></Favorite>
        </IconButton>
      )}
    </>
  );
};

export default Fav;
