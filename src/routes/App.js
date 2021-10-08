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
      }
    }
  };

  useEffect(() => {
    getBookRequest(query);
  }, [query]);

  const addReadingBook = (book) => {
    const newReadingBook = [...reading, book];
    setReading(newReadingBook);
    console.log(reading);
  };

  return (
    <div className="App">
      <Header />
      <div className="search-area">
        <AreaHeader title="📚 Search a book" />
        <Search setQuery={setQuery} query={query} />
      </div>

      <div className="books-row-one">
        <BookList
          books={books}
          handleReadingClick={addReadingBook}
          buttons={true}
        />
      </div>
      <div className="reading-area">
        <AreaHeader title="📖 Reading this books" />
        <div className="reading-row">
          <BookList books={reading} buttons={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
