import React, { useState, useEffect } from "react";
import Book from "./Book";
import "../assets/styles/SearchBar.css";
import noCover from "../assets/img/NoCover.png";
function SearchBar() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (query.length) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyALDggCOOmL1KcYb1k6u-1fUykRB63IWj4`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setData(data.items);
        });
    }
  }, [query]);

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
          {data.map((item) => {
            return item.volumeInfo.imageLinks ? (
              // <div>
              //   <img
              //     src={item.volumeInfo.imageLinks.thumbnail}
              //     alt={item.volumeInfo.title}
              //   />
              //   <h2>{item.volumeInfo.title}</h2>
              // </div>
              <Book
                key={item.id}
                cover={item.volumeInfo.imageLinks.thumbnail}
                title={item.volumeInfo.title}
                author={item.volumeInfo.authors}
                year={item.volumeInfo.publishedDate}
              />
            ) : (
              <div>
                key={item.id}
                <img src={noCover} alt={item.volumeInfo.title} />
                <h2>{item.volumeInfo.title}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Look for a book you've read, want to read or are reading</h1>
      )}
    </section>
  );
}

export default SearchBar;
