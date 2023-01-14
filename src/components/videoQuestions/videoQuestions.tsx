import React, {FC} from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import YouTube, { YouTubePlayer } from "react-youtube";

import { Link, useParams } from 'react-router-dom';
import { Question, Video } from "../../types";
import QuestionComponent from "./questionComponent/questionComponent";

interface YouTubeStateChangeEvent {
    data: number;
    target: YouTubePlayer;
}

const VideoQuestions: FC = () => {
    const { videoId } = useParams();

    const [video, setVideo] = useState<Video | undefined>(undefined);
    const [question, setQuestion ] = useState<string | undefined>(undefined)
    
    let videoElement: YouTubePlayer = null;
    let intervalId: NodeJS.Timeout;

    const handleAlertAccept = (videoElement: YouTubeStateChangeEvent) => {
        videoElement.target.playVideo();
    };

    const createAlert = (text: string, videoElement: YouTubeStateChangeEvent) => {
        setQuestion(undefined);
        alert("Question: " + text);
        handleAlertAccept(videoElement);
    };

    const handleOnStateChange = (event: YouTubeStateChangeEvent) => {
        if (event.data === YouTube.PlayerState.PLAYING) {
          videoElement = event;
          intervalId = setInterval(() => {
            if (event.target) {
              if(video) {
                video.questions.forEach((question) => {
                    if(!question.shown){
                        if (event.target.getCurrentTime() >= question.time && event.target.getCurrentTime() <= question.time + 1) {
                            if (videoElement.target.playerInfo.playerState === 1) {
                                videoElement.target.pauseVideo();
                                question.shown = true;
                                setQuestion(question.text)
                            }
                        }
                    }
                })
              }
            }
          }, 1000);
        }
        if (event.data === YouTube.PlayerState.PAUSED) {
            if(question) createAlert(question, event);
        }

      }
      
    const getVideo = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/videos/${videoId}`);
            setVideo(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
      getVideo();
      return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <nav>
                <Link to={`/`}>
                    <img src="/horizontal-logo.svg" alt="EDPuzzle logo" style={{height: "35px"}} />
                </Link>
            </nav>
            {video &&
                <div className="divideBlocks">
                    <div>
                        <h2 style={{marginRight: "0 3%"}}>{video?.title}</h2>
                        {video && <YouTube
                            videoId={video.videoId}
                            onStateChange={handleOnStateChange}
                        />
                        }
                    </div>
                    <div className="questionsBlock">
                        {video.questions && 
                            <>
                                <h2>Questions in the video:</h2>
                                {video.questions.map((question: Question) => (
                                    <>
                                        <QuestionComponent question={question} key={question.questionId} />
                                    </>
                                ))}
                            </>
                        }
                        <h2>
                            Viewed {video.views.length} times
                        </h2> 
                    </div>
                </div>
            }
        </div>
    )
}

export default VideoQuestions;