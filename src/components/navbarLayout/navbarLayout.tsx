import React from "react";
import { Link } from "react-router-dom";

export const NavbarLayout: React.FC = () => {
  return (
    <nav>
    <Link to={`/`}>
        <img src="/horizontal-logo.svg" alt="EDPuzzle logo" style={{height: "35px"}} />
    </Link>
    </nav>
  );
}

export default NavbarLayout;