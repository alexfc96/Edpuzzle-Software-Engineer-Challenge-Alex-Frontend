import React from "react";
import VideoBox from "./components/videoBox/videoBox"
// import { useState, useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  // const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  // useEffect(() => {
  // }, []);

  return (
    <div>
      <nav>
          EDPUZZLE
      </nav>
      <VideoBox title="Title" description="Description" imageUrl="logo192.png" />
    </div>
  );
};

export default App;