import React from 'react';
import BirdListItem from './BirdListItem';
import './ListOfBirds.scss';

const ListOfBirds = () => {

    const birds = ['Ласточка','Ласточка','Ласточка','Ласточка','Ласточка','Ласточка'];

    const birdsList = birds.map((name)=>{
        return <BirdListItem key={name} name={name}/>
    })
    

    return(
        <div class="birds-list-block">
            <ul className='birds-list-block__list'>
                {birdsList}
            </ul>
        </div>
    );
}



export default ListOfBirds;