import React, { useState, useEffect } from "react";
import "../assets/styles/SearchBar.css";
// `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=AIzaSyALDggCOOmL1KcYb1k6u-1fUykRB63IWj4`,
function SearchBar() {
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyALDggCOOmL1KcYb1k6u-1fUykRB63IWj4`
    )
      .then((response) => response.json())
      .then((result) => {
        setCards(result.items);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <section>
      <h1>📚 Search a book</h1>
      <input
        value={query}
        className="searchInput"
        type="text"
        placeholder="🔍 Search any book"
        onChange={(e) => setQuery(e.target.value)}
      />
      {cards.map((item) => (
        <div key={item.id}>{item.volumeInfo.title}</div>
      ))}
    </section>
  );
}

export default SearchBar;
