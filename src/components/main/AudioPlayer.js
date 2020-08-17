import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
    <AudioPlayer
      className='audio-block__player'
      src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  );


  export default Player;