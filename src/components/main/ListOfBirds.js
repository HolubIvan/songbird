import React from 'react';
import BirdListItem from './BirdListItem';

const ListOfBirds = ({birds}) => {

    // const birds = ['Ласточка','Ласточка','Ласточка','Ласточка','Ласточка','Ласточка'];

    // console.log(birds[0])

    const birdsList = birds[0].map((el)=>{
        return <BirdListItem key={el.id} name={el.name}/>
    })
    

    return(
        <div className="birds-list-block">
            <ul className='birds-list-block__list'>
                {birdsList}
            </ul>
        </div>
    );
}



export default ListOfBirds;