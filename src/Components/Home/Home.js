import React, { useEffect } from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import CategoriesSection from "../Categories/CategoriesSection";
import EachCategory from "../Categories/EachCategory";
import TeamDetails from "../TeamDetails/TeamDetails";
import { useDispatch } from "react-redux";
import { getCategoriesAPI } from "../../Redux/Apis";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAPI());
  }, [dispatch]);

  return (
    <div>
      <Banner />
      <div style={{ padding: "1rem" }}>
        <CategoriesSection />
        <EachCategory />
        <TeamDetails />
      </div>
    </div>
  );
}

export default Home;
