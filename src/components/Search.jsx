import React from "react";
import "../assets/styles/Search.css";
function Search(props) {
  return (
    <div className="searchInputContainer">
      <input
        className="searchInput"
        value={props.value}
        onChange={(e) => props.setQuery(e.target.value)}
        placeholder="🔍 Search any book"
      />
    </div>
  );
}

export default Search;
