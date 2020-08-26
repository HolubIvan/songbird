import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import FinalResultPage from "./result/FinalResultPage";
import "./../styles/App.scss";
import randomNumber from "./main/RandomNumber";
import birdsData from "../data/birdsData";
import winSound from "./../sounds/win.mp3";
import loseSound from "./../sounds/lose.mp3";
import { exampleActiveBirdsArray } from "./main/example";

const App = () => {
  const birds = birdsData;
  const colors = ["#444", "#04a77f", "#d62c1a"];

  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [userRightAnswerScore, setUserRightAnswerScore] = useState(5);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [activeBird, setActiveBird] = useState([...exampleActiveBirdsArray]);
  const [userClickedBird, setUserClickedBird] = useState(null);
  const [activeBirdsArray, setActiveBirdsArray] = useState(
    exampleActiveBirdsArray
  );
  const [roundWin, setRoundWin] = useState(false);
  const [clickedUserList, setClickedUserList] = useState(null);
  const [userGuessColor, setUserGuessColor] = useState(colors[0]);

  useEffect(() => {
    if (currentLevel > 1) {
      setGameEnded(true);
    } else {
      setActiveBirdsArray(birds[currentLevel]);
      setActiveBird(activeBirdsArray[randomNumber()]);
    }
  }, [birds, currentLevel, activeBirdsArray]);

  useEffect(() => {
    if (userClickedBird !== null) {
      if (userClickedBird === activeBird.name) {
        setRoundWin(true);
        setScore(score + userRightAnswerScore);
        const audio = new Audio(winSound);
        audio.play();
        // clickedUserList.firstChild.style.backgroundColor = "#04a77f";
      } else {
        setUserRightAnswerScore(userRightAnswerScore - 1);
        const audio = new Audio(loseSound);
        audio.play();
        // clickedUserList.firstChild.style.backgroundColor = "#d62c1a";
      }
    }
  }, [userClickedBird]);

  const onListItemClick = (e) => {
    if (!roundWin) {
      setUserClickedBird(e.target.textContent);

      //listen to click and get parent ul

      // setClickedUserList(e.target);
      console.log(e.target.getAttribute('data-key'))
    } else {
      return false;
    }
  };

  const onNextLevelButtonCLick = (e) => {
    setCurrentLevel(currentLevel + 1);
    setRoundWin(false);
    setUserRightAnswerScore(5);
    // document.querySelectorAll(".li-btn").forEach((el) => {
    //   el.style.backgroundColor = "#444";
    // });
  };

  const onFinalButtonClick = (e) => {
    setGameEnded(false);
    setScore(0);
    setUserRightAnswerScore(5);
    setCurrentLevel(0);
    setClickedUserList(null);
    setRoundWin(false);
  };

  return (
    <div className="wrapper">
      <Header score={score} currentLevel={currentLevel} />
      <Main
        activeBirdsArray={activeBirdsArray}
        onListItemClick={onListItemClick}
        activeBird={activeBird}
        onNextLevelButtonCLick={onNextLevelButtonCLick}
        userClickedBird={userClickedBird}
        roundWin={roundWin}
        userGuessColorChange={userGuessColor}
        // clickedUserList={clickedUserList}
        gameEnded={gameEnded}
      />
      <FinalResultPage
        score={score}
        onFinalButtonClick={onFinalButtonClick}
        gameEnded={gameEnded}
      />
    </div>
  );
};

export default App;
