import React from "react";
import RandomBird from "./RandomBird";
import ListOfBirds from "./ListOfBirds";
import BirdDetail from "./BirdDetail";
import ButtonSubmit from "./ButtonSubmit";



const Main = ({
  activeBirdsArray,
  onListItemClick,
  activeBird,
  onNextLevelButtonCLick,
  userClickedBird,
  roundWin,
  // userGuessColorChange,
  // clickedUserList,
  gameEnded
}) => {
  if(!gameEnded){
    return (
      <main className="main">
        <RandomBird activeBird={activeBird} roundWin={roundWin} />
        <ListOfBirds
          activeBirdsArray={activeBirdsArray}
          onListItemClick={onListItemClick}
          // userGuessColorChange={userGuessColorChange}
          // clickedUserList={clickedUserList}
        />
        <BirdDetail
          activeBird={activeBird}
          activeBirdsArray={activeBirdsArray}
          userClickedBird={userClickedBird}
        />
        <ButtonSubmit onNextLevelButtonCLick={onNextLevelButtonCLick} />
      </main>
    );
  } else {
    return(
      ''
    );
  }
};

export default Main;
