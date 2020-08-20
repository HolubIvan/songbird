import React, {useState, useEffect} from 'react';
import Header from './header/Header'
import Main from './main/Main'
import './../styles/App.scss';
import randomNumber from './main/RandomNumber';
import birdsData from '../data/birdsData';

const exampleActiveBirdsArray = [{audio: "https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3",
    description: "Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.",
    id: 1,
    image: "https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",
    name: "Воробей",
    species: "Passer domesticus"}];

const exampleActiveBird= {audio: "https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3",
    description: "Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.",
    id: 1,
    image: "https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",
    name: "ящер",
    species: "Passer domesticus"};    



const App = () => {


    const birds = birdsData;

    const [score, setScore] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [activeBird, setActiveBird] = useState(exampleActiveBird);
    const [userClickedBird, setUserClickedBird] = useState(null);
    const [activeBirdsArray, setActiveBirdsArray] = useState(exampleActiveBirdsArray);
  
    useEffect(()=>{
        setActiveBirdsArray(birds[currentLevel]);
        setActiveBird(activeBirdsArray[randomNumber()]);
    },[birds, currentLevel, activeBirdsArray]);

    const onListItemClick = (e)=>{
        setUserClickedBird(e.target.textContent);
    }

    const onNextLevelButtonCLick = (e)=>{
        setCurrentLevel(currentLevel+1);
    }
    
    return(
        <div className='wrapper'>
            <Header score={score}/>
            <Main activeBirdsArray={activeBirdsArray} onListItemClick={onListItemClick} activeBird={activeBird} onNextLevelButtonCLick={onNextLevelButtonCLick} userClickedBird={userClickedBird} />
        </div>
    );
}


export default App;
