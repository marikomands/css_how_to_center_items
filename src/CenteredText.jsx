import React from "react";
import "./CenteredText.css";

const CenteredText = (props) => {
  return (
    <div className="centered-container">
      <div className="centered-text">{props.children}</div>
    </div>
  );
};

export default CenteredText;
