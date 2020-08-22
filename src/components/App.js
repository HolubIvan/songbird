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
    const [userRightAnswerScore, setUserRightAnswerScore] = useState(5);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [activeBird, setActiveBird] = useState(exampleActiveBird);
    const [userClickedBird, setUserClickedBird] = useState(null);
    const [activeBirdsArray, setActiveBirdsArray] = useState(exampleActiveBirdsArray);
    const [roundWin, setRoundWin] = useState(false);
    const [clickedUserList, setClickedUserList] = useState('');

    useEffect(()=>{
        setActiveBirdsArray(birds[currentLevel]);
        setActiveBird(activeBirdsArray[randomNumber()]);
    },[birds, currentLevel, activeBirdsArray]);

    useEffect(()=>{
        if(userClickedBird !== null){
            if(userClickedBird === activeBird.name){
                setRoundWin(true);
                setScore(score + userRightAnswerScore);
                const audio = new Audio(winSound);
                audio.play();
                clickedUserList.firstChild.style.backgroundColor = '#04a77f';
            } else {
                setUserRightAnswerScore(userRightAnswerScore-1);
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
        document.querySelectorAll('.birds-list-block__item').forEach((el)=>{
            el.firstChild.style.backgroundColor = '#444';
        })
        setRoundWin(false);
        setUserRightAnswerScore(5);
    }
    
    return(
        <div className='wrapper'>
            <Header score={score} currentLevel={currentLevel}/>
            <Main activeBirdsArray={activeBirdsArray} onListItemClick={onListItemClick} activeBird={activeBird} onNextLevelButtonCLick={onNextLevelButtonCLick} userClickedBird={userClickedBird} roundWin={roundWin}/>
        </div>
    );
}


export default App;
