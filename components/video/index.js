import React from "react";
import main from "./main.mp4";

const Features = () => {
  return (
    <div className="pt-40">
      <video
        autoplay
        loop
        muted
        style={{
          postion: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}>
        <source src={main} type="video/mp4"></source>
      </video>
    </div>
  );
};
