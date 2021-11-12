import React from "react";
import "./Banner.css";
import {Link} from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container p-5">
      <div className="container text-white">
        <h1 className="banner-title display-2 fw-bold m-5">
          STYLISH <br /> DESIGNED SUNGLASSES
        </h1>

        <Link
          className="shop-now-btn p-3 m-5 border-0 text-white fs-5"
          to="/explore"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
