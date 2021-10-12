import React from "react";
import "../assets/styles/BookList.css";
function BookList(props) {
  // const readBook = () => {
  //   const book = document.getElementsByClassName("bookInfo-content");
  //   book.style.backgroundColor = "#16c60c";
  //   // console.log(book);
  //   return book;
  // };
  return (
    <React.Fragment>
      <div className="books-row-one">
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
                }}
              >
                <div className="bookInfo-content" id="book-content">
                  <h2>{book.volumeInfo.title}</h2>
                  <p>{book.volumeInfo.authors}</p>
                  <p>{book.volumeInfo.publishedDate}</p>
                  {props.buttons ? (
                    <div className="buttons-container">
                      <button
                        onClick={() => props.handleReadingClick(book)}
                        type="button"
                        className="readingButton"
                      >
                        Reading
                      </button>
                      <button
                        onClick={() => props.handleWishlistClick(book)}
                        type="button"
                        className="wishlistButton"
                      >
                        Wishlist
                      </button>
                    </div>
                  ) : props.buttonsBook ? (
                    <div className="buttons-container">
                      <button
                        onClick={() => {
                          props.handleRemoveClick(book);
                        }}
                        type="button"
                        className="removeButton"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => props.handleAddBookCount(book)}
                        type="button"
                        className="readingButton"
                      >
                        Read
                      </button>
                    </div>
                  ) : props.buttonsBookWishlist ? (
                    <div className="buttons-container">
                      <button
                        onClick={() => props.handleRemoveWishlistClick(book)}
                        type="button"
                        className="removeButton"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => props.handleReadingClick(book)}
                        type="button"
                        className="readingButton"
                      >
                        Reading
                      </button>
                    </div>
                  ) : props.buttonsReadBook ? (
                    <div className="buttons-container-only">
                      <button
                        onClick={() => props.handleReadRemoveBook(book)}
                        type="button"
                        className="removeButton"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default BookList;
