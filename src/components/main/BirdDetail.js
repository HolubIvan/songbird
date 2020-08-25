import React from "react";
import Player from "./AudioPlayer";
import bird from "./../../img/bird.jpg";

const BirdDetail = ({ activeBird, activeBirdsArray, userClickedBird }) => {
  if (activeBird === undefined) {
    return false;
  }

  const clickedBird = activeBirdsArray.find(
    (el) => el.name === userClickedBird
  );

  return (
    <div className="bird-detail">
      <p
        className="bird-detail__instructions"
        style={
          clickedBird === undefined ? { display: "block" } : { display: "none" }
        }
      >
        <span>Послушайте плеер.</span>
        <br />
        <span>Выберите птицу из списка.</span>
      </p>

      <div
        className="bird-detail__description description"
        style={
          clickedBird === undefined ? { display: "none" } : { display: "block" }
        }
      >
        <div className="description__body">
          <img
            className="description__body-img"
            src={clickedBird ? clickedBird.image : bird}
            alt="bird"
          />
          <div className="description__body-block">
            <h3 className="description__body-name">
              {clickedBird ? clickedBird.name : "***"}
            </h3>
            <p className="description__body-species">
              {clickedBird ? clickedBird.species : "***"}
            </p>
            <Player
              srcAudio={clickedBird ? clickedBird.audio : ""}
            />
          </div>
        </div>
        <p className="description__text">
          {clickedBird ? clickedBird.description : ""}
        </p>
      </div>
    </div>
  );
};

export default BirdDetail;
