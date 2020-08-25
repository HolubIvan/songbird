import React from 'react';
import FinalButtonSubmit from './FinalButtonSubmit';

const FinalResultPage = ({score, gameEnded, onFinalButtonClick})=>{
    if(gameEnded){
        return(
            <div className="result">
                <p className="result__head">Поздравляем!</p>
                <p className="result__description">Вы прошли викторину и набрали {score} из 30 возможных баллов!</p>
                <FinalButtonSubmit onFinalButtonClick={onFinalButtonClick}/>
            </div>
        );
    } else {
        return(
            ''
        );
    }
}

export default FinalResultPage;