import React from "react";
import logo from "../../logo.png";

const About = () => {
  return (
    <div>
      <div className="container my-4">
        <div className="row">
          <div className="col-6 align-items-center">
            <h2>
              Tour Manager is a open platform for all the Travellers around the
              world
            </h2>
            <p>We have been serving for a really long time.</p>
            <button className="btn btn-outline-success mt-3">
              Be a contributor
            </button>
          </div>
          <div className="col-6 text-center">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
