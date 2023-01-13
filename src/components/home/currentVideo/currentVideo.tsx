import React from "react";
import "./currentVideo.css";
import { Video } from "../../../types";

import YoutubeEmbed from "../../youtubeEmbed/youtubeEmbed";
import CopyUrl from "../copyUrl/copyUrl"

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