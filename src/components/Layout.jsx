import React from "react";
import "../assets/styles/Layout.css";
function Layout(props) {
  return <main className="layout">{props.children}</main>;
}

export default Layout;
