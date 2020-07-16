import React from "react";
import logo from "../logo.png";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <div className="footer-group">
          <p className="footer-copyright" property="dc:rights">
            Copyright ©<span property="dc:dateCopyrighted">2019–2020</span>{" "}
            <span property="dc:publisher">Programming Zone</span>
          </p>
        </div>

        <div>
          <img width="64px" height="64px" src={logo} alt="logo" />
        </div>
      </footer>
      <div>
        <ul>
          <li>Link 1</li>|<li>Link 2</li>|<li>Link 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
