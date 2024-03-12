import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./Categories.css";
import { getEachCategoriesByIDAPI } from "../../Redux/Apis";

function EachCategory() {
  const eachCategoryData = [1, 2];
  const eachCategoryData2 = [1, 2, 3, 4];

  const dispatch = useDispatch();

  const Each_Category_Data = useSelector(
    (state) => state?.getEachCategoryByIDData
  );
  console.log("Each_Category_Data", Each_Category_Data);

  useEffect(() => {
    dispatch(getEachCategoriesByIDAPI());
  }, [dispatch]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">Our Services</div>
        <div className="row">
          {eachCategoryData.map((each) => (
            <div className="col-sm-6">
              <img className="categoryImage" alt="" src="" />
              <p>Text</p>
            </div>
          ))}
        </div>
        <div className="row">Our Services</div>
        <div className="row">
          {eachCategoryData2.map((each) => (
            <div className="col-sm-3">
              <img className="categoryImage" alt="" src="" />
              <p>Text</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EachCategory;
