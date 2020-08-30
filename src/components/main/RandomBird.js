import React from "react";
import Player from "./AudioPlayer";
import bird from "./../../img/bird.jpg";

const RandomBird = ({ activeBird, roundWin }) => {
  if (activeBird === undefined) {
    return false;
  }

  return (
    <div className="main__random-bird random-bird">
      <img
        className="random-bird__img"
        src={roundWin === true ? activeBird.image : bird}
        alt="random bird"
      ></img>
      <div className="random-bird__audio-block audio-block">
        <p className="audio-block__bird-name">
          {roundWin === true ? activeBird.name : "*****"}
        </p>
        <hr></hr>
        <Player srcAudio={activeBird.audio} />
      </div>
    </div>
  );
};

export default RandomBird;
