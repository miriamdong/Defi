import React, { useEffect, useRef } from "react";
import classes from "./BackgroundVideo.module.scss";
import ReactPlayer from "react-player";

const BackgroundVideo = () => {
  return (
    <div className={classes.Container}>
      <ReactPlayer url="https://player.vimeo.com/video/552165449?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
    </div>
  );
};

export default BackgroundVideo;
