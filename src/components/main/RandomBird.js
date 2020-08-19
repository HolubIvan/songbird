import React, {useRef} from 'react';
import Player from './AudioPlayer';
import bird from './../../img/bird.jpg';

const RandomBird = ({activeBird}) => {

   

    if(activeBird === undefined){
        return false;
    }

    return(
        <div className='main__random-bird random-bird'>
            <img className="random-bird__img" src={activeBird.image} alt='random bird'></img>
            <div className='random-bird__audio-block audio-block'>
                <p className='audio-block__bird-name'>**** {activeBird.name}</p>
                <hr></hr>
                <Player activeBird={activeBird}/>
            </div>
        </div>
    );
}

export default RandomBird;