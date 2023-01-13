import React from "react";
import "./videoBox.css"

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

export const VideoBox: React.FC<Props> = ({title, description, imageUrl}) => {
    return (
      <div className="video-preview">
        <img src={imageUrl} alt={title}/>
        <div className="video-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }

export default VideoBox;