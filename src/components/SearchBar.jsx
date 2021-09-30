import React, { useState, useEffect } from "react";
import "../assets/styles/SearchBar.css";
// `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=AIzaSyALDggCOOmL1KcYb1k6u-1fUykRB63IWj4`,
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
          console.log(data);
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
        <div>
          {data.map((item) => (
            <div key={item.id}>{item.volumeInfo.title}</div>
          ))}
        </div>
      ) : (
        <h1>Busca algun libro</h1>
      )}
    </section>
  );
}

export default SearchBar;
