import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar-container">
      <Link to="/">📚 HOME</Link>
      <Link to="/wishlist">🌟 WISHLIST</Link>
      <Link to="mybooks">✅ MY BOOKS</Link>
    </nav>
  );
}

export default Sidebar;
