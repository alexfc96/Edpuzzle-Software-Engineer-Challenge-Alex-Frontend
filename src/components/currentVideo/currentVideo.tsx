import React from "react";
import { Video } from "../../App";
import "./currentVideo.css";

import YoutubeEmbed from "../../components/youtubeEmbed/youtubeEmbed";
import CopyUrl from "../../components/copyUrl/copyUrl"

interface Props {
  video: Video;
}

export const CurrentVideo: React.FC<Props> = ({video}) => {
  const url = `http://localhost:4200/video/${video.videoId}`;
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div>
      <h2>{video.title}</h2>
      <YoutubeEmbed embedId={video.videoId} />
      <div className="separateElements">
        <CopyUrl url={url} />
        <button className="goButton" onClick={handleClick}>
          Go
        </button>
      </div>
    </div>
  );
  }

export default CurrentVideo;