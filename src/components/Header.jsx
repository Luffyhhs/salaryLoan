import React from "react";
import "./header.scss";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" className="logo_img" />
      <h1 className="main_title">
        Better Salary Advance <br />
        <span>Application Form</span>
      </h1>
    </header>
  );
};

export default Header;
