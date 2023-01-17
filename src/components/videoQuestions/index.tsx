import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import VideoQuestions from "./videoQuestions/videoQuestions";
import HeaderLayout from "../headerLayout/headerLayout";

import { Video } from "types";

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
      <HeaderLayout />
      {video && <VideoQuestions video={video} />}
    </div>
  );
};

export default VideoQuestionsIndex;
