import React from "react";
import { Video } from "../../App";
import "./currentVideo.css";

import YoutubeEmbed from "../../components/youtubeEmbed/youtubeEmbed";

interface Props {
  video: Video;
}

export const CurrentVideo: React.FC<Props> = ({video}) => {
    return (
      <div className="">
        <h2>{video.title}</h2>
        <YoutubeEmbed embedId={video.videoId} />
      </div>
    );
  }

export default CurrentVideo;