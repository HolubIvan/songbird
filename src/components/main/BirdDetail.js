import React from 'react';
import Player from './AudioPlayer';
import bird from './../../img/bird.jpg';

const BirdDetail = () => {


    return(
        <div className='bird-detail'>

            <p className='bird-detail__instructions' style={{display: 'block'}}>
                <span>Послушайте плеер.</span>
                <br/>
                <span>Выберите птицу из списка.</span>
            </p>

            <div className='bird-detail__description description' style={{display: 'none'}}>
                <div className='description__body'>
                    <img className='description__body-img' src={bird} alt='bird'></img>
                    <div className='description__body-block'>
                        <h3 className='description__body-name'>Сорока</h3>
                        <p className='description__body-species'>Soroka</p>
                        <Player/>
                    </div>
                </div>
                <p className='description__text'>adasdasd</p>
            </div>
        </div>
    );
}


export default BirdDetail;