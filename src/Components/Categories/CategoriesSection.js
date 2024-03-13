import React from "react";
import { useSelector } from "react-redux";
import image1 from "../../../src/public/CarwashImages/1.jpg";

import "./Categories.css";

function CategoriesSection() {
  const Categorydata = [
    { text: "Bathroom Cleaning" },
    { text: "Men's Haircut" },
    { text: "Painting" },
    { text: "Plumber" },
    { text: "Electrician" },
    { text: "Beautician" },
  ];
  const Category_Data = useSelector((state) => state?.getCategoryData);
  console.log("Category_Data", Category_Data);

  return (
    <div className="container-fluid" style={{ marginTop: "4rem" }}>
      <div className="row HomeHeading">Our Services</div>
      <div className="row">
        {Categorydata.map((each, i) => (
          <div className="col-sm-4">
            <img className="categoryImage" alt="" src={image1} />
            <p style={{ fontSize: "1rem", textAlign: "center" }}>{each.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;
