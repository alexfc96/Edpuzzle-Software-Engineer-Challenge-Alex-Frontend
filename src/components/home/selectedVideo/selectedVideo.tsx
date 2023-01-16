import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

import CopyUrl from "../copyUrl/copyUrl"

import { Video } from "../../../types";
import "./selectedVideo.css";

interface Props {
  video: Video;
}

export const SelectedVideo: React.FC<Props> = ({video}) => {
  const url = `http://localhost:4200/video/${video.videoId}`;
  return (
    <div>
      <h2>{video.title}</h2>
      <YouTube videoId={video.videoId} />
      <div className="separateElements">
        <CopyUrl url={url} />
        <Link className="goButton" to={`/video/${video._id}`}>
          Go
        </Link>
      </div>
    </div>
  );
  }

export default SelectedVideo;