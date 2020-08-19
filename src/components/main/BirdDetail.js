import React from 'react';
import Player from './AudioPlayer';
import bird from './../../img/bird.jpg';

const BirdDetail = ({activeBird, activeBirdsArray, userClickedBird}) => {

    if(activeBird === undefined){
        return false;
    }

    const clickedBird = activeBirdsArray.find( el => el.name === userClickedBird);
    
    return(
        <div className='bird-detail'>

            <p className='bird-detail__instructions' style={{display: 'none'}}>
                <span>Послушайте плеер.</span>
                <br/>
                <span>Выберите птицу из списка.</span>
            </p>

            <div className='bird-detail__description description' style={{display: 'block'}}>
                <div className='description__body'>
                    <img className='description__body-img' src={clickedBird !== undefined ? clickedBird.image : bird} alt='bird'></img>
                    <div className='description__body-block'>
                        <h3 className='description__body-name'>{clickedBird !== undefined ? clickedBird.name : '***'}</h3>
                        <p className='description__body-species'>{clickedBird !== undefined ? clickedBird.species : '***'}</p>
                        <Player clickedBird={clickedBird}/>
                    </div>
                </div>
                <p className='description__text'>adasdasd</p>
            </div>
        </div>
    );
}


export default BirdDetail;