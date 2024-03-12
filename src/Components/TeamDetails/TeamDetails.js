import React from "react";
import { Button } from "react-bootstrap";
import "./TeamDetails.css";

function TeamDetails() {
  const teamData = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container-fluid" style={{ padding: "2rem" }}>
      <div className="row">
        <div className="col-sm-12">
          <img className="categoryImage" alt="" src="" />
        </div>
      </div>
      <div className="row">Our Services</div>
      <div className="row">
        {teamData.map((each) => (
          <div className="col-sm-2">
            <img className="teamImage" alt="" src="" />
            <Button variant="outline-success">Success</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamDetails;
