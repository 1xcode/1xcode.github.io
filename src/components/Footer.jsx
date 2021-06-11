import React from "react";
import logo from "../logo-white.svg";

function Footer() {

  let year = new Date().getFullYear();

  return (
    <div className="footer-div">
      <footer>
        <div className="footer-group">
          <p className="footer-copyright" property="dc:rights">
            Copyright ©<span property="dc:dateCopyrighted">2019-{year}</span>{" "}
            <span property="dc:publisher">Programming Zone</span>
          </p>
        </div>

        <div>
          <img width="64px" height="64px" src={logo} alt="logo" />
        </div>
      </footer>
      <div>
        <ul>
          <li>
            <a href="#root">Home</a>
          </li>
          |
          <li>
            <a href="https://github.com/programming-zone">Github</a>
          </li>
          |
          <li>
            <a href="https://github.com/programming-zone/programming-zone.github.io">
              Fork Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
