import React from 'react';

const NavItem = ({name})=>{
    return(
        <li className='header__nav-item'>
            <a href='#' className='header__nav-link'>{name}</a>
        </li>
    );
}

export default NavItem;