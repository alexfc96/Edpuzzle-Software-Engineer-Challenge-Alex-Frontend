import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import VideoBox from "./components/videoBox/videoBox";
import CurrentVideo from "./components/currentVideo/currentVideo";
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
        <img src="horizontal-logo.svg" alt="EDPuzzle logo" style={{height: "35px"}} />
      </nav>
      <div style={{display: "flex", marginTop: "2%", marginLeft: "5%"}}>
        <div>
          {videos && videos.map((video: Video) =>
            <VideoBox key={video._id} video={video} selectCurrentVideo={selectCurrentVideo} />)
          }
        </div>
        <div style={{margin: "0 5%"}}>
        {currentVideo && 
          <CurrentVideo video={currentVideo} />
        }
        </div>
      </div>
    </div>
  );
};

export default App;