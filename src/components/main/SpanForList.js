import React from "react";

const SpanForList = ({ userGuessColorChange }) => {
  const spanColor = userGuessColorChange;
  return (
    <span className="li-btn" style={{ backgroundColor: spanColor }}></span>
  );
};

export default SpanForList;
