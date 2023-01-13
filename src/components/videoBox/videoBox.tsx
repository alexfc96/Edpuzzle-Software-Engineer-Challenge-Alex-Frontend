import React from "react";
import "./videoBox.css"

interface Props {
  title: string;
  imageUrl: string;
}

export const VideoBox: React.FC<Props> = ({title, imageUrl}) => {
    return (
      <div className="video-preview">
        <img src={imageUrl} alt={title}/>
        <div className="video-info">
          <h3>{title}</h3>
        </div>
      </div>
    );
  }

export default VideoBox;