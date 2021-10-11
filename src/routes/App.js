import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import AreaHeader from "../components/AreaHeader";
import Search from "../components/Search";
import Modal from "../components/Modal";

import placement from "../assets/img/PLACEMENT.svg";
import reading from "../assets/img/reading.svg";
import wishlist from "../assets/img/wishlist.svg";
import "../assets/styles/App.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [readingBooks, setReadingBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [readBooksCount, setReadBooksCount] = useState(0);
  const [readBooks, setReadBooks] = useState([]);
  const [modal, setModal] = useState(false);

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

  useEffect(() => {
    const readingBook = JSON.parse(localStorage.getItem("wisdom-reading"));
    if (readingBook) {
      setReadingBooks(readingBook);
    }
  }, []);

  useEffect(() => {
    const wishlistBook = JSON.parse(localStorage.getItem("wisdom-wishlist"));
    if (wishlistBook) {
      setWishlistBooks(wishlistBook);
    }
  }, []);

  const saveToLocalStorageReading = (items) => {
    localStorage.setItem("wisdom-reading", JSON.stringify(items));
  };
  const saveToLocalStorageWishList = (items) => {
    localStorage.setItem("wisdom-wishlist", JSON.stringify(items));
  };

  const addReadingBook = (book) => {
    const newReadingBook = [...readingBooks, book];
    setReadingBooks(newReadingBook);
    saveToLocalStorageReading(newReadingBook);
  };

  const addWishlistBook = (book) => {
    const newWislist = [...wishlistBooks, book];
    setWishlistBooks(newWislist);
    saveToLocalStorageWishList(newWislist);
  };

  const removeReadingBook = (book) => {
    const newReadingBook = readingBooks.filter(
      (readingBook) => readingBook.id !== book.id
    );
    setReadingBooks(newReadingBook);
    saveToLocalStorageReading(newReadingBook);
  };
  const removeWishlistBook = (book) => {
    const newWishlistBook = wishlistBooks.filter(
      (wishlistBook) => wishlistBook.id !== book.id
    );
    setWishlistBooks(newWishlistBook);
    saveToLocalStorageWishList(newWishlistBook);
  };
  const readbooksCounter = () => {
    setReadBooksCount(readBooksCount + 1);
  };
  const addReadBook = (book) => {
    setModal(true);
    const newReadBook = [...readBooks, book];
    setReadBooks(newReadBook);
    removeReadingBook(book);
    readbooksCounter();
  };
  const readingBooksHeader = `📖 Reading this books - ${readBooksCount} books read.`;
  return (
    <div className="App">
      <Header />
      <div className="search-area">
        <AreaHeader title="📚 Search a book" />
        <Search setQuery={setQuery} query={query} />
      </div>

      {query.length ? (
        <BookList
          books={books}
          handleReadingClick={addReadingBook}
          handleWishlistClick={addWishlistBook}
          buttons={true}
        />
      ) : (
        <div className="placement">
          <div>
            <img src={placement} alt="WISDOM" />
            <p>Search for books you want to read or are reading.</p>
          </div>
        </div>
      )}
      <div className="reading-area">
        <AreaHeader title={readingBooksHeader}></AreaHeader>
        {readingBooks.length ? (
          <BookList
            books={readingBooks}
            buttons={false}
            buttonsBook={true}
            handleAddBookCount={addReadBook}
            handleRemoveClick={removeReadingBook}
          />
        ) : (
          <div className="placement">
            <div>
              <img src={reading} alt="WISDOM" />
              <p>Add books you are reading</p>
            </div>
          </div>
        )}
      </div>
      <div className="reading-area">
        <AreaHeader title="🌟 My wishlist of Books" />
        {wishlistBooks.length ? (
          <BookList
            books={wishlistBooks}
            buttons={false}
            handleReadingClick={addReadingBook}
            handleRemoveWishlistClick={removeWishlistBook}
            buttonsBookWishlist={true}
          />
        ) : (
          <div className="placement">
            <div>
              <img src={wishlist} alt="WISDOM" />
              <p>Add books you want to read</p>
            </div>
          </div>
        )}
      </div>
      {!!modal && (
        <Modal>
          <div className="read-container">
            {readBooks.length ? <BookList books={readBooks} /> : ""}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
