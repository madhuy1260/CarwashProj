import React from "react";
import "./Banner.css";
import { Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="BannerContainer">
      <div className="textContainer">
        <h1 style={{ color: "white", fontSize: "4rem" }}>
          Home Services At your <br />
          DoorStep
        </h1>
        <Button variant="light" style={{ color: "#282828" }}>
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
