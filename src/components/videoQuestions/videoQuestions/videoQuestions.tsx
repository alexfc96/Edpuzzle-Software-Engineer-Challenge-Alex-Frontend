import React, { FC } from "react";
import { useState } from "react";
import YouTube, { YouTubePlayer } from "react-youtube";

import { QuestionsComponent } from "../questionsComponent/questionsComponent";
import { ViewsComponent } from "../viewsComponent/viewsComponent";

import { Video } from "../../../types";

interface YouTubeStateChangeEvent {
  data: number;
  target: YouTubePlayer;
}

interface Props {
  video: Video;
}

const VideoQuestions: FC<Props> = ({ video }) => {
  let videoElement: YouTubePlayer = null;

  const [question, setQuestion] = useState<string | undefined>(undefined);

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
      setInterval(() => {
        if (videoElement.target && video) {
          video.questions.forEach((question) => {
            if (!question.shown) {
              if (question.time === 0) question.time = 1;
              if (
                event.target.getCurrentTime() >= question.time &&
                event.target.getCurrentTime() <= question.time + 1
              ) {
                videoElement.target.pauseVideo();
                question.shown = true;
                setQuestion(question.text);
              }
            }
          });
        }
      }, 1000);
    }
    if (event.data === YouTube.PlayerState.PAUSED) {
      if (question) createAlert(question, event);
    }
  };

  return (
    <div className="divideBlocks">
      <>
        <div>
          <h2 style={{ marginRight: "0 3%" }}>{video?.title}</h2>
          <YouTube
            videoId={video.videoId}
            onStateChange={handleOnStateChange}
          />
        </div>
        <div className="questionsBlock">
          {video.questions && (
            <QuestionsComponent questions={video.questions} />
          )}
          <ViewsComponent views={video.views} />
        </div>
      </>
    </div>
  );
};

export default VideoQuestions;
