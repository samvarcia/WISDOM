import React from "react";
import "../assets/styles/AreaHeader.css";
function AreaHeader(props) {
  return (
    <div className="areaHeader">
      <h1>
        {props.title}
        {props.reading ? (
          <span className="listModal" onClick={() => props.handleModal()}>
            see the list.
          </span>
        ) : (
          ""
        )}
      </h1>
    </div>
  );
}

export default AreaHeader;
