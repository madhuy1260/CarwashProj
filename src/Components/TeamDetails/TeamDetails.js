import React from "react";
import { Button } from "react-bootstrap";
import "./TeamDetails.css";
import image1 from "../../../src/public/CarwashImages/e1.jpg";
import untitled from "../../../src/public/CarwashImages/Untitled.png";

function TeamDetails() {
  const teamData = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container-fluid" style={{ padding: "2rem" }}>
      <div className="row">
        <div className="col-sm-12">
          <img className="categoryImage" alt="" src={untitled} />
        </div>
      </div>
      <h4 className="row HomeHeading" style={{ textAlign: "center" }}>
        Our Team is Ready to Serve you
      </h4>
      <div className="row">
        {teamData.map((each) => (
          <div className="col-sm-2" style={{ textAlign: "center" }}>
            <img className="teamImage" alt="" src={image1} />
            <Button variant="outline-success">Book Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamDetails;
