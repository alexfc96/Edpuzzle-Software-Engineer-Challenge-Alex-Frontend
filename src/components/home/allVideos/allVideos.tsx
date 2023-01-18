import React, { FC } from "react";
import { useState } from "react";

import VideoInfoBox from "../videoInfoBox/videoInfoBox";
import SelectedVideo from "../selectedVideo/selectedVideo";

import { Video } from "types";
import "./allVideos.css";

interface Props {
  videos: Video[];
  setPage: (page: number) => void;
  page: number;
}

const AllVideos: FC<Props> = ({ videos, setPage, page }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | undefined>(
    undefined
  );

  const selectVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div>
        {videos.map((video: Video) => (
          <VideoInfoBox
            key={video._id}
            video={video}
            selectVideo={selectVideo}
          />
        ))}
        <div className="centerButtons">
          {page < 3 && ( //TODO: Dinamic
            <button onClick={() => setPage(page + 1)}>Next videos</button>
          )}
          {page > 1 && (
            <button
              onClick={() => setPage(page - 1)}
              className="marginRightVideo"
            >
              Previous page
            </button>
          )}
        </div>
      </div>
      <div className="marginVideo">
        {selectedVideo && <SelectedVideo video={selectedVideo} />}
      </div>
    </>
  );
};

export default AllVideos;
