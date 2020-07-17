import React from "react";
import Repo from "./Repo";
import logo from "../logo.png";

const Nav = () => {
  return (
    <div className="nav-div">
      <nav>
        <div className="navigation-group">
          <h1>Programming Zone </h1>
        </div>
        <div>
          <img width="64px" height="64px" src={logo} alt="logo" />
        </div>
      </nav>
      <Repo />
    </div>
  );
};

export default Nav;
