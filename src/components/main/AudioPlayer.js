import React, { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const audioExample =
  "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3";

const Player = ({ srcAudio }) => {
  const audioPlayerRef = React.createRef();

  useEffect(() => {
    if (srcAudio) {
      audioPlayerRef.current.audio.current.pause();
    }
  }, [audioPlayerRef, srcAudio]);

  return (
    <AudioPlayer
      ref={audioPlayerRef}
      className="audio-block__player"
      src={srcAudio !== undefined ? srcAudio : audioExample}
    />
  );
};

export default Player;
