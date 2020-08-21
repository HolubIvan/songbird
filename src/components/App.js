import React, {useState, useEffect} from 'react';
import Header from './header/Header'
import Main from './main/Main'
import './../styles/App.scss';
import randomNumber from './main/RandomNumber';
import birdsData from '../data/birdsData';
import winSound from './../sounds/win.mp3';
import loseSound from './../sounds/lose.mp3'
import {exampleActiveBirdsArray, exampleActiveBird} from './main/examples';

const App = () => {


    const birds = birdsData;

    const [score, setScore] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [activeBird, setActiveBird] = useState(exampleActiveBird);
    const [userClickedBird, setUserClickedBird] = useState(null);
    const [activeBirdsArray, setActiveBirdsArray] = useState(exampleActiveBirdsArray);
    const [roundWin, setRoundWin] = useState(false);
    const [clickedUserList, setClickedUserList] = useState(false);
  
    useEffect(()=>{
        setActiveBirdsArray(birds[currentLevel]);
        setActiveBird(activeBirdsArray[randomNumber()]);
    },[birds, currentLevel, activeBirdsArray]);

    useEffect(()=>{
        if(userClickedBird !== null){
            if(userClickedBird === activeBird.name){
                setRoundWin(true);
                setScore(score+3);
                const audio = new Audio(winSound);
                audio.play();
                clickedUserList.firstChild.style.backgroundColor = '#04a77f';
            } else {
                const audio = new Audio(loseSound);
                audio.play();
                clickedUserList.firstChild.style.backgroundColor = '#d62c1a';
            }
        }
    },[userClickedBird])
  

    const onListItemClick = (e)=>{
        setUserClickedBird(e.target.textContent);
        setClickedUserList(e.target);
    }

    const onNextLevelButtonCLick = (e)=>{
        setCurrentLevel(currentLevel+1);
    }
    
    return(
        <div className='wrapper'>
            <Header score={score} currentLevel={currentLevel}/>
            <Main activeBirdsArray={activeBirdsArray} onListItemClick={onListItemClick} activeBird={activeBird} onNextLevelButtonCLick={onNextLevelButtonCLick} userClickedBird={userClickedBird} roundWin={roundWin}/>
        </div>
    );
}


export default App;
