import React from "react";
import { Video } from "../../App";
import "./currentVideo.css";

import YoutubeEmbed from "../../components/youtubeEmbed/youtubeEmbed";
import CopyUrl from "../../components/copyUrl/copyUrl"

interface Props {
  video: Video;
}

export const CurrentVideo: React.FC<Props> = ({video}) => {
    return (
      <div>
        <h2>{video.title}</h2>
        <YoutubeEmbed embedId={video.videoId} />
        <CopyUrl videoId={video._id} />
        {/* 
    background: #F5A623;
         */}
      </div>
    );
  }

export default CurrentVideo;