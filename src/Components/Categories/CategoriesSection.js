import React from "react";
import { useSelector } from "react-redux";

import "./Categories.css";

function CategoriesSection() {
  const Categorydata = [1, 2, 3, 4, 5, 6];
  const Category_Data = useSelector((state) => state?.getCategoryData);
  console.log("Category_Data", Category_Data);

  return (
    <div className="container-fluid">
      <div className="row">Our Services</div>
      <div className="row">
        {Categorydata.map((each) => (
          <div className="col-sm-4">
            <img className="categoryImage" alt="" src="" />
            <p>Text</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;
