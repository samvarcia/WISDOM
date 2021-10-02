import React from "react";
import "../assets/styles/Book.css";
import Buttons from "./Buttons";

function Book(props) {
  return (
    <div className="bookContainer">
      <img className="bookCover" src={props.cover} alt={props.title} />
      <div className="bookInfo">
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>{props.year}</p>
      </div>
      <Buttons />
    </div>
  );
}

export default Book;
