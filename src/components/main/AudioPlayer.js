import React, {useRef} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const audioExample = "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3";

const Player = ({activeBird, clickedBird}) => (

    const audioPlayerRef = useRef(null);
    audioPlayerRef.current.audio.current.pause();
    

    <AudioPlayer
      ref={audioPlayerRef}
      className='audio-block__player'
      src={clickedBird !== undefined ? clickedBird.audio : audioExample}
      onPlay={e => console.log("onPlay")}
    />
  );

  export default Player;


  