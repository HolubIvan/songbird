import React from 'react';
import bird from './../../img/bird.jpg';

const RandomBird = () => {
    
    return(
        <div className='main__random-bird random-bird'>
            <img className="random-bird__img" src={bird} alt='random bird'></img>
            <div className='random-bird__audio-block audio-block'>
                <p className='audio-block__bird-name'>*******</p>
                <hr></hr>
                <audio className='audio-block__audio' controls src="#"></audio>
            </div>
        </div>
    );
}

export default RandomBird;