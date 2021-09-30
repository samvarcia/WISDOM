import React from "react";
import "../assets/styles/SearchBar.css";
export const message = "RESULTS";

function SearchBar() {
  const getValue = (event) => {
    console.log(event.target.value);
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
