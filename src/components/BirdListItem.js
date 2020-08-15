import React from 'react';


const BirdListItem = ({name}) => {
    return(
        <li className="birds-list-block__item">{name}</li>
    );
}

export default BirdListItem;