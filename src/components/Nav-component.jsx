import React from "react";
import Repo from "./Repo";
import logo from "../logo.gif";

const Nav = () => {
  return (
    <div className="">
      <div className="nav-div bg-black">
        <nav>
          <div className="navigation-group">
            <h1>1xcode </h1>
          </div>
          <div>
            <img width="64px" height="64px" src={logo} alt="logo" />
          </div>
        </nav>
      </div>
      <Repo />
    </div>
  );
};

export default Nav;
