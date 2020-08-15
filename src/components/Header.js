import React from 'react';
import './Header.scss'
import logo from './../img/logo.svg';
import NavList from './NavList';

const Header = () => {

    const navItems = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']

    return(
        <div className='header'>
            <div className='header__wrap'>
                <img className='header__wrap-img' src={logo} alt='bird'></img>
                <p className='header__wrap-score'>Score: 0</p>
            </div>
            <nav className='header__nav'>
                    <NavList navItems={navItems}/>
            </nav>
        </div>
    );
}

export default Header;