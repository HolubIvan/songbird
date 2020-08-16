import React from 'react';
import Header from './header/Header'
import Main from './main/Main'
import './../styles/App.scss';

const App = () => {

    return(
        <div className='wrapper'>
            <Header />
            <Main />
        </div>
    );
}

export default App;