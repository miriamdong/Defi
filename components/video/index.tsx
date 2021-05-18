import React, { useEffect, useRef } from "react";
import classes from "./BackgroundVideo.module.scss";

type Props = {
  url: "https://youtu.be/lNLeRmnkug8";
};
const BackgroundVideo: React.FC<Props> = ({ url }) => {
  const videoOptions = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
    },
  };
  return (
    <div className={classes.Container}>
      <video
        autoPlay
        loop
        muted
        className={classes.video}
        style={{
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
        }}>
        <source src={url} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default BackgroundVideo;
