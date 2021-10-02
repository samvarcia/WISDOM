import React from "react";
import "../assets/styles/Buttons.css";

function Buttons() {
  return (
    <div className="buttons-container">
      <button type="button" className="readingButton">
        Reading
      </button>
      <button type="button" className="wishlistButton">
        Wishlist
      </button>
    </div>
  );
}

export default Buttons;
