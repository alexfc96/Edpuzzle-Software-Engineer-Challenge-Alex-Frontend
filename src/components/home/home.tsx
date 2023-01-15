import React, {FC} from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import VideoBox from "./videoBox/videoBox";
import CurrentVideo from "./currentVideo/currentVideo";
import { Video } from "../../types";
import "./home.css"
import NavbarLayout from "../navbarLayout/navbarLayout";

const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState<Array<Video> | undefined>(undefined);
  console.log("🚀 ~ file: home.tsx:13 ~ videos", videos)
  const [currentVideo, setCurrentVideo] = useState<Video | undefined>(undefined);

  const getVideos = async () => {
      try {
          const response = await axios.get(`http://localhost:3000/api/videos/all?page=${page}`);
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
  }, [page]);

  return (
    <div>
      <NavbarLayout />
      <div style={{display: "flex", marginTop: "2%", marginLeft: "5%"}}>
        <div>
          {videos && videos.map((video: Video) =>
            <VideoBox key={video._id} video={video} selectCurrentVideo={selectCurrentVideo} />)
          }
          <div className="centerButtons">
            {videos && page < 3 &&
              <button onClick={() => setPage(page + 1)}>
                Next videos
              </button>
            }
            {videos && page > 1 && 
            <button onClick={() => setPage(page - 1)} style={{marginRight: "20px"}}>
              Previous page
            </button>}
          </div>
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

export default Home