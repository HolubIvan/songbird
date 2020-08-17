import React, { useState } from 'react';
import Header from './header/Header'
import Main from './main/Main'
import './../styles/App.scss';
import birdsData from './../data/birdsData';

const App = () => {

    const birds = birdsData;

    const [score, setScore] = useState(0);
    const [activeBird, setActiveBird] = useState(null);
  
    return(
        <div className='wrapper'>
            <Header />
            <Main birds={birds}/>
        </div>
    );
}

export default App;