import React from "react";
import "./Banner.css";
import { Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="BannerContainer">
      <div className="textContainer">
        <h1 style={{ color: "white" }}>Home Services At your DoorStep</h1>
        <Button variant="secondary">Success</Button>
      </div>
    </div>
  );
}

export default Banner;
