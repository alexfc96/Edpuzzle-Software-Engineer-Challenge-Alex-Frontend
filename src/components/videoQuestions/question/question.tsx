import React from "react";

import { Question } from "../../../../types";
import "./question.css";

interface Props {
  question: Question;
}

export const QuestionComponent: React.FC<Props> = ({ question }) => {
  const secondsToTime = (seconds: number) => {
    if (seconds < 0) return "00:00";
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    let time = `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
    if (hours > 0) time = `${hours.toString().padStart(2, "0")}:` + time;
    return time;
  };

  return (
    <div className="marginBlock">
      <span>{secondsToTime(question.time)} </span>
      <span>{question.text}</span>
    </div>
  );
};

export default QuestionComponent;
