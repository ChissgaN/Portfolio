import React from "react";
import "./navBar.css";
import logo from "../../../public/logo 1.svg"
import github from "../../../public/Vector.svg"
import twitter from "../../../public/ant-design_twitter-circle-filled.svg"
import linkedin from "../../../public/entypo-social_linkedin-with-circle.svg"

export default function NavBar() {
  return (
    <nav className="d-flex justify-content-between navBar">
      <div className="first">
        <img className="d-flex" src={logo} alt="007" />
      </div>

      <div className="d-flex second">
        <div className="d-flex justify-content-between opNav">
          <a className="letters" href="">Home</a>
          <a className="letters" href="">About</a>
          <a className="letters" href="">Tech Stack</a>
          <a className="letters" href="">Projects</a>
          <a className="letters" href="">Contact</a>
        </div>

        <div className="spnIcons">
          <img className="me-3 ms-3 spn" src={github} alt="GitHub" />
          <img className="me-3 spn " src={twitter} alt="Twitter" />
          <img className="me-3 spn" src={linkedin} alt="Linkedin" />
        </div>
      </div>
    </nav>
  );
}
