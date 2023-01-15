import React, {FC} from "react";

import AllVideos from "./allVideos/allVideos";
import "./home.css"
import NavbarLayout from "../navbarLayout/navbarLayout";

const Home: FC = () => {
  return (
    <div>
      <NavbarLayout />
      <div className="homeFlex" style={{display: "flex", marginTop: "2%", marginLeft: "5%"}}>
        <AllVideos />
      </div>
    </div>
  );
};

export default Home