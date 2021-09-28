import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../assets/styles/App.css";

function Home() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}

export default Home;
