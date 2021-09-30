import React from "react";
import "../assets/styles/SearchBar.css";
export const message = "RESULTS";

function SearchBar() {
  const getValue = (event) => {
    const inputValue = event.target.value;
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=AIzaSyALDggCOOmL1KcYb1k6u-1fUykRB63IWj4`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.items);
      });
  };
  return (
    <section>
      <h1>📚 Search a book</h1>
      <input
        id="input"
        className="searchInput"
        type="text"
        placeholder="🔍 Search any book"
        onChange={getValue}
      />
    </section>
  );
}

export default SearchBar;
