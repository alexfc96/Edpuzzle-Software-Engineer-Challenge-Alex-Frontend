import React from "react";
import { Video } from "../../App";
import "./currentVideo.css"

interface Props {
  video: Video;
}

export const CurrentVideo: React.FC<Props> = ({video}) => {
    return (
      <div className="">
        <h2>{video.title}</h2>
        <img src="videoPreview.jpg" alt={video.title}/>
      </div>
    );
  }

export default CurrentVideo;