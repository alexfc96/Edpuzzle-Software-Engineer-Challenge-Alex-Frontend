import React from "react";
import { Video } from "../../../types";
import "./videoBox.css"
interface Props {
  video: Video;
  selectCurrentVideo: (video: Video) => void;
}

export const VideoBox: React.FC<Props> = ({video, selectCurrentVideo}) => {

  const selectVideo = () => {
    selectCurrentVideo(video)
  };

  return (
    <div className="video-preview" onClick={selectVideo}>
      <img src="videoPreview.jpg" alt={video.title}/>
      <div className="video-info">
        <h3>{video.title}</h3>
      </div>
    </div>
  );
}

export default VideoBox;