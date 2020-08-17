import React from 'react';
import logo from './../../img/logo.svg';
import NavList from './NavList';
import Score from './Score';

const Header = () => {

    const navItems = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']

    return(
        <div className='header'>
            <div className='header__wrap'>
                <img className='header__wrap-img' src={logo} alt='bird'></img>
                <Score />
            </div>
            <nav className='header__nav'>
                    <NavList navItems={navItems}/>
            </nav>
        </div>
    );
}

export default Header;