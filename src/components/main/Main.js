import React from 'react';
import RandomBird from './RandomBird';
import ListOfBirds from './ListOfBirds';
import BirdDetail from './BirdDetail';
import ButtonSubmit from './ButtonSubmit';



const Main = ({activeBirdsArray, onListItemClick, activeBird, onNextLevelButtonCLick, userClickedBird, roundWin}) => {


    return(
        <main className='main'>
            <RandomBird activeBird={activeBird} roundWin={roundWin}/>
            <ListOfBirds activeBirdsArray={activeBirdsArray} onListItemClick={onListItemClick}/>
            <BirdDetail activeBird={activeBird} activeBirdsArray={activeBirdsArray} userClickedBird={userClickedBird} />
            <ButtonSubmit onNextLevelButtonCLick={onNextLevelButtonCLick}/>
        </main>
    );
}

export default Main;