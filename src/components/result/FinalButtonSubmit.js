import React from 'react';

const FinalButtonSubmit = ({onFinalButtonClick})=>{
    return (
        <button className="final-button" onClick={onFinalButtonClick}>Попробовать еще раз!</button>
    );
}

export default FinalButtonSubmit;