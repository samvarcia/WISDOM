import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar-container">
      <Link to="/">
        <span role="img" aria-label="Home">
          📚
        </span>{" "}
        HOME
      </Link>
      <Link to="/wishlist">
        <span role="img" aria-label="Wishlist">
          🌟
        </span>{" "}
        WISHLIST
      </Link>
      <Link to="mybooks">
        <span role="img" aria-label="MyBooks">
          ✅
        </span>{" "}
        MY BOOKS
      </Link>
    </nav>
  );
}

export default Sidebar;
