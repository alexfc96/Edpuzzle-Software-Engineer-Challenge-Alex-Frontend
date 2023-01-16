import React from "react";
import { Link } from "react-router-dom";

export const HeaderLayout: React.FC = () => {
  return (
    <header>
      <Link to={`/`}>
        <img
          src="/horizontal-logo.svg"
          alt="EDPuzzle logo"
          style={{ height: "35px" }}
        />
      </Link>
    </header>
  );
};

export default HeaderLayout;
