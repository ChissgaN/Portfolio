import React from "react";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="d-flex justify-content-between navBar">
      <div>
        <img className="d-flex" src="/public/logo 1.svg" alt="" />
      </div>

      <div className="d-flex">
        <div className="d-flex justify-content-between opNav">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Tech Stack</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>

        <div>
          <img className="me-3" src="/public/Vector.svg" alt="GitHub" />
          <img className="me-3"
            src="/public/ant-design_twitter-circle-filled.svg"
            alt="Twitter"
          />
          <img className="me-3"
            src="/public/entypo-social_linkedin-with-circle.svg"
            alt="Linkedin"
          />
        </div>
      </div>
    </nav>
  );
}
