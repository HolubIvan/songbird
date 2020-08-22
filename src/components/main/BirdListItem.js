import React from 'react';


const BirdListItem = ({name}) => {

    return(
        <li className="birds-list-block__item">
            <span className='li-btn'></span>
            {name}
        </li>
    );
}

export default BirdListItem;