import React from 'react';
import NavItem from './NavItem';

const NavList = ({navItems, currentLevel})=>{

    const lists = navItems.map((el, index)=>{
        return <NavItem key={index} name={el} activeList={currentLevel === index ? 'activeItem' : ''}/>
    })

    return(
        <ul className='header__nav-list'>
            {lists}
        </ul>
    )

}

export default NavList;