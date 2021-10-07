import React from "react";
import "../assets/styles/BookList.css";
function BookList(props) {
  return (
    <React.Fragment>
      {props.books.map((book) => {
        return book.volumeInfo.imageLinks ? (
          <div className="bookContainer" key={book.id}>
            <div
              className="bookContent"
              style={{
                backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // flexBasis: "400px",
                // height: "300px",
              }}
            >
              <div className="bookInfo-content">
                <h2>{book.volumeInfo.title}</h2>
                <p>{book.volumeInfo.authors}</p>
                <p>{book.volumeInfo.publishedDate}</p>
              </div>
            </div>
            <div className="buttons-container">
              <button
                onClick={() => props.handleReadingClick(book)}
                type="button"
                className="readingButton"
              >
                Reading
              </button>
              <button type="button" className="wishlistButton">
                Wishlist
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        );
      })}
    </React.Fragment>
  );
}

export default BookList;
