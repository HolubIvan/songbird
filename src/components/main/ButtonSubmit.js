import React from 'react';

const ButtonSubmit = ({onNextLevelButtonCLick}) => {

    return(
        <button className='button-submit' onClick={onNextLevelButtonCLick}>Next level</button>
    );
}

export default ButtonSubmit;