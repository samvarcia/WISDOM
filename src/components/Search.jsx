import React from "react";

function Search(props) {
  return (
    <div>
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
