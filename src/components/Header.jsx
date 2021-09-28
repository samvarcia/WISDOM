import React from "react";
import wisLogo from "../assets/img/LOGO.svg";
import "../assets/styles/Header.css";

function Header() {
  return (
    <header>
      <div className="logoContainer">
        <img src={wisLogo} alt="" />
        <h1 className="logoText">WISDOM</h1>
      </div>
    </header>
  );
}

export default Header;
