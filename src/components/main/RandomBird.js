import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import bird from './../../img/bird.jpg';

const RandomBird = () => {
    
    return(
        <div className='main__random-bird random-bird'>
            <img className="random-bird__img" src={bird} alt='random bird'></img>
            <div className='random-bird__audio-block audio-block'>
                <p className='audio-block__bird-name'>*******</p>
                <hr className='line'></hr>
                {/* <audio className='audio-block__audio' controls src="#"></audio> */}
                <AudioPlayer
                    className='audio-player'
                    src="http://example.com/audio.mp3"
                    onPlay={e => console.log("onPlay")}
                    // other props here
                />
            </div>
        </div>
    );
}

export default RandomBird;