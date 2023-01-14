import React, {FC} from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { Question, Video } from "../../types";
import YoutubeEmbed from "../youtubeEmbed/youtubeEmbed";
import QuestionComponent from "./questionComponent/questionComponent";

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
            <nav>
                <img src="/horizontal-logo.svg" alt="EDPuzzle logo" style={{height: "35px"}} />
            </nav>
            {video &&
                <div className="divideBlocks">
                    <div>
                        <h2 style={{marginRight: "0 3%"}}>{video?.title}</h2>
                        {video && <YoutubeEmbed embedId={video.videoId} />}
                    </div>
                    <div className="questionsBlock">
                        {video.questions && 
                            <>
                                <h2>Questions in the video:</h2>
                                {video.questions.map((question: Question) =>
                                    <QuestionComponent question={question} key={question.questionId} />
                                )}
                            </>
                        }
                        <h2>
                            Viewed {video.totalViews} times
                        </h2> 
                    </div>
                </div>
            }
        </div>
    )
}

export default VideoQuestions;