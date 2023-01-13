import React from "react";
import axios from 'axios';

import VideoBox from "./components/videoBox/videoBox"
import { useState, useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
export interface Video {
  _id: string;
  author: string;
  // "questions": [
  //     {
  //         "questionId": "63be6d861e7a6a473b600b7b",
  //         "time": 11
  //     },
  //     {
  //         "questionId": "63be6d861e7a6a473b600b7c",
  //         "time": 131
  //     }
  // ],
  title: string;
  videoId: string;
}

const App: React.FC = () => {
  const [videos, setVideos] = useState<Array<Video> | undefined>(undefined);
  const [currentVideo, setCurrentVideo] = useState<Video | undefined>(undefined);
  console.log("🚀 ~ file: App.tsx:27 ~ currentVideo", currentVideo)

  const getVideos = async () => {
      try {
          const response = await axios.get('http://localhost:3000/api/videos/all');
          setVideos(response.data)
      } catch (error) {
          console.error(error);
      }
  }

  const selectCurrentVideo = (video: Video) => {
    setCurrentVideo(video);
  }

  useEffect(() => {
    getVideos()
  }, []);

  return (
    <div>
      <nav>
          EDPUZZLE
      </nav>
      {videos && videos.map((video: Video) =>
        <VideoBox key={video._id} video={video} selectCurrentVideo={selectCurrentVideo} />
      )
      }
    </div>
  );
};

export default App;