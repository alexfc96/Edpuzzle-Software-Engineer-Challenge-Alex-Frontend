import React from "react";
import "./currentVideo.css";
import { Video } from "../../../types";

import YoutubeEmbed from "../../youtubeEmbed/youtubeEmbed";
import CopyUrl from "../copyUrl/copyUrl"
import { Link } from "react-router-dom";

interface Props {
  video: Video;
}

export const CurrentVideo: React.FC<Props> = ({video}) => {
  const url = `http://localhost:4200/video/${video.videoId}`;

  return (
    <div>
      <h2>{video.title}</h2>
      <YoutubeEmbed embedId={video.videoId} />
      <div className="separateElements">
        <CopyUrl url={url} />
        <Link className="goButton" to={`/video/${video._id}`}>
          Go
        </Link>
      </div>
    </div>
  );
  }

export default CurrentVideo;