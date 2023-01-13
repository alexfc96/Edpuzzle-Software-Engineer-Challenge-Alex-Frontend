import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/home";
import VideoQuestions from "./components/videoQuestions/videoQuestions";

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/video/:videoId' element={<VideoQuestions/>} />
    </Routes>
  )
}

export default App;