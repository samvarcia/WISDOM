import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import "../assets/styles/SearchBar.css";
function SearchBar() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [reading, setReading] = useState("");

  useEffect(() => {
    if (query.length) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyALDggCOOmL1KcYb1k6u-1fUykRB63IWj4`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data.items);
        });
    }
  }, [query]);

  const addReading = (book) => {
    const newReadingList = [...reading, book];
    setReading(newReadingList);
    console.log(newReadingList);
  };

  return (
    <section>
      <h1>
        <span role="img" aria-label="Home">
          📚
        </span>{" "}
        Search a book
      </h1>
      <input
        value={query}
        className="searchInput"
        type="text"
        placeholder="🔍 Search any book"
        onChange={(e) => setQuery(e.target.value)}
      />

      {Boolean(query.length) ? (
        <div className="books-container">
          <BookList books={data} handleReadingClick={addReading} />
        </div>
      ) : (
        <h1>Look for a book you've read, want to read or are reading</h1>
      )}
      {/* <div className="books-container">
        <BookList books={reading} handleReadingClick={addReading} />
      </div> */}
    </section>
  );
}

export default SearchBar;
