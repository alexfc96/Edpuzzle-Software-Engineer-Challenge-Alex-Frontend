import React, { FC } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Video } from "../../types";
import VideoQuestions from "./videoQuestions/videoQuestions";
import NavbarLayout from "../navbarLayout/navbarLayout";

const VideoQuestionsIndex: FC = () => {
  const { videoId } = useParams();

  const [video, setVideo] = useState<Video | undefined>(undefined);

  const getVideo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/videos/${videoId}`
      );
      setVideo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div>
      <NavbarLayout />
      {video && (
        <VideoQuestions video={video} />
      )}
      {!video && <h2>Video not found.</h2>}
    </div>
  );
};

export default VideoQuestionsIndex;
