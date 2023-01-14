import React, {FC} from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { Video } from "../../types";

const VideoQuestions: FC = () => {
    const { videoId } = useParams();

    const [video, setVideo] = useState<Video | undefined>(undefined);
    console.log("🚀 ~ file: videoQuestions.tsx:12 ~ video", video)

    const getVideo = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/videos/${videoId}`);
            setVideo(response.data)
        } catch (error) {
            console.error(error);
        }
    }
  
    useEffect(() => {
      getVideo()
    }, []);

    return (
        <div>
            <h1>{video?.title}</h1>
        </div>
    )
}

export default VideoQuestions;