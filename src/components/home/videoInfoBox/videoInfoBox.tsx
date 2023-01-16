import React from "react";

import { Video } from "../../../../types";
import "./videoInfoBox.css"
interface Props {
  video: Video;
  selectVideo: (video: Video) => void;
}

export const VideoInfoBox: React.FC<Props> = ({video, selectVideo}) => {
  const selectCurrentVideo = () => {
    selectVideo(video)
  };

  return (
    <div className="video-preview" onClick={selectCurrentVideo}>
      <img src="videoPreview.jpg" alt={video.title}/>
      <div className="video-info">
        <h3>{video.title}</h3>
      </div>
    </div>
  );
}

export default VideoInfoBox;