import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/home";

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/video/:videoId' element={<Video/>} /> */}
    </Routes>
  )
}

export default App;