import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import AreaHeader from "../components/AreaHeader";
import Search from "../components/Search";
import "../assets/styles/App.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [reading, setReading] = useState([]);

  const getBookRequest = async (query) => {
    if (query.length) {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyALDggCOOmL1KcYb1k6u-1fUykRB63IWj4`;

      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.items) {
        setBooks(responseJson.items);
        console.log(responseJson.items);
        // console.log(books);
      }
    }
  };

  useEffect(() => {
    getBookRequest(query);
  }, [query]);

  return (
    <div className="App">
      <Header />
      <div className="search-area">
        <AreaHeader title="📚  Search a book" />
        <Search setQuery={setQuery} query={query} />
      </div>

      <div className="books-row">
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
