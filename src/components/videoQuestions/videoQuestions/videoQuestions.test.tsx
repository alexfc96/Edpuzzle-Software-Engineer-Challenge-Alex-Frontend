import React from "react";
import { render, fireEvent } from "@testing-library/react";

import VideoQuestions from "./videoQuestions";

import { Video } from "../../../../types";
import YouTube, { YouTubePlayer } from "react-youtube";

const videoMock: Video = {
    _id: "nadlksfn2",
    author: "Alex",
    videoId: "123",
    title: "Test video",
    questions: [
      {
        questionId: "jdakllkds2",
        time: 10,
        text: "Test question 1",
        shown: false,
      },
      {
        questionId: "jdakllkds2",
        time: 20,
        text: "Test question 2",
        shown: false,
      },
    ],
    views: [
      {
        timestamp: "2023-01-16T19:06:00.355Z",
        _id: "63c5a01863eb9b96beaecdb4",
      },
      {
        timestamp: "2023-01-13T11:06:00.355Z",
        _id: "63c5a01863eb9b96beaecdb5",
      },
    ],
  };

const simulateOnStateChange = (player: HTMLElement, state: number) => {
    fireEvent.onStateChange(player, {
        data: state,
        target: player.querySelector('iframe') as YouTubePlayer,
    });
};

test("testing if alert is displayed when time of question matches", () => {

  const { getByTestId } = render(<VideoQuestions video={videoMock} />);
  const player = getByTestId("youtube-player");

  // Arrange
  jest.useFakeTimers();
  window.alert = jest.fn();

  // Act
  simulateOnStateChange(player, YouTube.PlayerState.PLAYING);
  jest.advanceTimersByTime(10000);
  
  // Assert
  expect(window.alert).toHaveBeenCalledWith("Question: Test question 1");
});
