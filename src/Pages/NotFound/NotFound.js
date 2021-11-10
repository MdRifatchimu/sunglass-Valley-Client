import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container mt-4">
      <div className="row text-center">
        <img
          width="75"
          height="600"
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
          alt=""
        />
        <div className="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
          <div className="row">
            <div className="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
              <h1>Page not found</h1>
              <Link className="text-danger link" to="/home">
                Go back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
