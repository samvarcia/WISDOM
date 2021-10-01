import React from "react";

function Book(props) {
  return (
    <div className="bookContainer">
      <img src={props.cover} alt={props.title} />
      <div className="bookInfo">
        <h2>{props.title}</h2>
        <p>{props.year}</p>
      </div>
    </div>
  );
}

export default Book;
