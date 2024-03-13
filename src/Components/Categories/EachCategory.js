import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./Categories.css";
import { getEachCategoriesByIDAPI } from "../../Redux/Apis";
import image9 from "../../../src/public/CarwashImages/9.jpg";
import image7 from "../../../src/public/CarwashImages/7.jpg";

function EachCategory() {
  const eachCategoryData = [
    { text: "Spa for Women" },
    { text: "laser Hair Reduction" },
  ];
  const eachCategoryData2 = [
    { text: "Salon for Women" },
    { text: "AC Repair" },
    { text: "Home Full Cleaning" },
    { text: "Massage for Men" },
  ];

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
      <div className="container-fluid" style={{ backgroundColor: "#F0A696" }}>
        <div
          className="row HomeHeading"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          New And NoteWorthy
        </div>
        <div
          className="row"
          style={{
            paddingTop: "1rem",
            marginBottom: "4rem",
            marginTop: "4rem",
          }}
        >
          {eachCategoryData.map((each) => (
            <div className="col-sm-6">
              <img className="categoryImage2" alt="" src={image7} />
              <p style={{ fontSize: "1rem", textAlign: "center" }}>
                {each.text}
              </p>
            </div>
          ))}
        </div>
        <div className="row HomeHeading " style={{ textAlign: "center" }}>
          Most Booked Services
        </div>
        <div className="row" style={{ paddingBottom: "4rem" }}>
          {eachCategoryData2.map((each) => (
            <div className="col-sm-3">
              <img className="categoryImage4" alt="" src={image9} />
              <p style={{ fontSize: "1rem", textAlign: "center" }}>
                {each.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EachCategory;
