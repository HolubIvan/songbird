import React from 'react';
import NavItem from './NavItem';

const NavList = ({navItems})=>{

    const lists = navItems.map((el)=>{
        return <NavItem  key={el} name={el}/>
    })

    return(
        <ul className='header__nav-list'>
            {lists}
        </ul>
    )

}

export default NavList;