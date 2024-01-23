import React from "react";
import "./personalStyles.css";
import chissgan from "../../../public/personal photo.jpeg";

export default function PersonalInfo() {
  return (
    <div className="d-flex justify-content-between personalDiv">
      <div className="info ">
        <h1 className="first">
          Hi 👋, <br></br>
          My name is
          <p className="mb-0 second">Jairo Castro Castillo</p>I build things for
          web
        </h1>
      </div>

      <img className="photo" src={chissgan} alt="Personal Photo" />
    </div>
  );
}
