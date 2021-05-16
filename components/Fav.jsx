import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { useState, useEffect } from "react";

const Fav = ({ id }) => {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const onCountIncrease = (count) => setCount(count.val());

    const createFav = (url, uid) => {};
    const deleteFav = (url, uid) => {};
    const readFavs = (url, uid) => {};
  }, [id]);

  return (
    <>
      {fav && (
        <IconButton
          onClick={() => {
            setFav(!fav);
          }}
          aria-label="delete"
          color="primary">
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </IconButton>
      )}
      {!fav && (
        <IconButton
          onClick={() => {
            setFav(!fav);
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
