import React from 'react';
import RandomBird from './RandomBird';
import ListOfBirds from './ListOfBirds';
import BirdDetail from './BirdDetail';
import ButtonSubmit from './ButtonSubmit';



const Main = ({birds}) => {


    return(
        <main className='main'>
            <RandomBird birds={birds}/>
            <ListOfBirds birds={birds}/>
            <BirdDetail />
            <ButtonSubmit />
        </main>
    );
}

export default Main;