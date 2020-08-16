import React from 'react';
import RandomBird from './RandomBird';
import ListOfBirds from './ListOfBirds';
import BirdDetail from './BirdDetail';
import ButtonSubmit from './ButtonSubmit';

const Main = () => {


    return(
        <main className='main'>
            <RandomBird />
            <ListOfBirds />
            <BirdDetail />
            <ButtonSubmit />
        </main>
    );
}

export default Main;