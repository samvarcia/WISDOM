import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import "../assets/styles/App.css";

function Home() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default Home;
