import React from "react";
import logo from "../../logo.png";

const Footer = () => {
  return (
    <div>
      <div className="d-flex py-3 mt-3 text-white bg-success text-center">
        <div className="col-4 ">
          <img src={logo} alt="logo" className="h-50" />
          <h1 className="text-dark">Tour Manager</h1>
        </div>
        <div className="col-4">
          <div className="text-start ps-5 ms-5 mt-3">
            <h4>Address</h4>
            <p>1st floor, building name</p>
            <p>123/4 lane name, street.</p>
            <p>city, country</p>
          </div>
        </div>
        <div className="col-4 text-end pe-5 me-5 mt-3">
          <h4>Contact Us</h4>

          <p>
            <i className="fas fa-phone-square-alt me-2"></i>
            0123456789
          </p>
          <p>
            <i className="fas fa-at me-2"></i>
            tourmanager@mail.com
          </p>
          <p>
            <i className="fas fa-tty me-2"></i>967-3765
          </p>
          <br></br>

          <h5>We are also at</h5>

          <i className="fa fa-facebook mx-2 fa-2x"></i>
          <i className="fa fa-twitter mx-2 fa-2x"></i>
          <i className="fa fa-instagram mx-2 fa-2x"></i>
          <i className="fa fa-reddit mx-2 fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
