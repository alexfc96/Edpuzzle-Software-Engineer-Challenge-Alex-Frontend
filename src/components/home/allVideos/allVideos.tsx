import React, {FC} from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import VideoBox from "../videoBox/videoBox";
import SelectedVideo from "../selectedVideo/selectedVideo";
import { Video } from "../../../types";
import "./allVideos.css"

const AllVideos: FC = () => {
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState<Array<Video> | undefined>(undefined);
  const [selectedVideo, setSelectedVideo] = useState<Video | undefined>(undefined);

  const selectVideo = (video: Video) => {
    setSelectedVideo(video);
  }

  const getVideos = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/api/videos/all?page=${page}`);
        setVideos(response.data)
    } catch (error) {
        console.error(error);
    }
  }

  useEffect(() => {
    getVideos()
  }, [page]);

  return (
    <>
    <div>
        {videos && videos.map((video: Video) =>
          <VideoBox key={video._id} video={video} selectVideo={selectVideo} />)
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
            </button>
          }
        </div>
    </div>
    <div className="marginVideo">
      {selectedVideo && 
        <SelectedVideo video={selectedVideo} />
      }
    </div>
    </>
  );
};

export default AllVideos;