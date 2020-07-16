import React from "react";

import logo from "../logo.png";

const Nav = () => {
  return (
    <div className="nav-div">
      <nav>
        <div className="navigation-group">
          <h1>Programming Zone on Github</h1>
        </div>
        <div>
          <img width="64px" height="64px" src={logo} alt="logo" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
