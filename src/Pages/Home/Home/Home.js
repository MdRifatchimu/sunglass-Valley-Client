import React from "react";
import Banner from "../Banner/Banner";
import DesignTeam from "../DesignTeam/DesignTeam";
import Gallery from "../Gallery/Gallery";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Gallery></Gallery>
      <Reviews></Reviews>
      <DesignTeam></DesignTeam>
    </div>
  );
};

export default Home;
