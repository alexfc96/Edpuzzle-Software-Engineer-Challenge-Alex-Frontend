import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/home";
import VideoQuestionsIndex from "./components/videoQuestions/index";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:videoId" element={<VideoQuestionsIndex />} />
    </Routes>
  );
};

export default App;
