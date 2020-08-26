import React from "react";
import SpanForList from "./SpanForList";

const BirdListItem = ({ 
  name, 
  userGuessColorChange, 
  id 
}) => {
  return (
    <li className="birds-list-block__item" data-key={id}>
      <SpanForList 
        userGuessColorChange={userGuessColorChange} 
      />
      {name}
    </li>
  );
};

export default BirdListItem;
