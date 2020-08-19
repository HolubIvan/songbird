import React from 'react';

const NavItem = ({name})=>{
    return(
        <li className='header__nav-item'>
            {name}
        </li>
    );
}

export default NavItem;