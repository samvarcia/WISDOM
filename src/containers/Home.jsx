import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import "../assets/styles/App.css";

function Home() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Sidebar />
        <SearchBar />
      </Layout>

      {/* <BookList /> */}
    </div>
  );
}

export default Home;
