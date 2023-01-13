import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/home";
export interface Video {
  _id: string;
  author: string;
  // "questions": [
  //     {
  //         "questionId": "63be6d861e7a6a473b600b7b",
  //         "time": 11
  //     },
  //     {
  //         "questionId": "63be6d861e7a6a473b600b7c",
  //         "time": 131
  //     }
  // ],
  title: string;
  videoId: string;
}


const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/cats' component={CatsPage} /> */}
    </Routes>
  )
}

export default App;