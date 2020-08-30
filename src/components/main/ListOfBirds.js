import React from "react";
import BirdListItem from "./BirdListItem";

const ListOfBirds = ({ activeBirdsArray, onListItemClick }) => {
  const birdsList = activeBirdsArray.map((el) => {
    return <BirdListItem key={el.id} id={el.id} name={el.name} />;
  });

  return (
    <div className="birds-list-block">
      <ul className="birds-list-block__list" onClick={onListItemClick}>
        {birdsList}
      </ul>
    </div>
  );
};

export default ListOfBirds;
