import React from 'react';
import RandomBird from './RandomBird';
import ListOfBirds from './ListOfBirds';
import BirdDetail from './BirdDetail';
import './Main.scss';

const Main = () => {


    return(
        <main className='main'>
            <RandomBird />
            <ListOfBirds />
            <BirdDetail />
        </main>
    );
}

export default Main;