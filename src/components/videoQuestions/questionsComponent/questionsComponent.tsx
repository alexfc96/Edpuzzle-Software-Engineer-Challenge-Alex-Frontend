import React from "react";

import { Question } from "../../../types";
import QuestionComponent from "../question/question";

interface Props {
  questions: Question[];
}

export const QuestionsComponent: React.FC<Props> = ({ questions }) => {
  return (
    <>
      <h2>Questions in the video:</h2>
      {questions.map((question: Question) => (
        <>
          <QuestionComponent question={question} key={question.questionId} />
        </>
      ))}
    </>
  );
};

export default QuestionsComponent;
