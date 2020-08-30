import React from "react";
import SpanForList from "./SpanForList";

const BirdListItem = ({ name, id }) => {
  return (
    <li className="birds-list-block__item" data-key={id}>
      <SpanForList />
      {name}
    </li>
  );
};

export default BirdListItem;
