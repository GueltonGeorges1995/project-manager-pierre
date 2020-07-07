import React from 'react';
import './assets/scss/style.scss';

import Header from './components/header/Header';
import About from './components/about/About';
import Notification from './components/notification/Notification';

const App = () => {
    return (
        <div className='overflow-hidden position-relative'>
            <div className='background-header-about'></div>
            <Header />
            <About />
            <Notification />
        </div>
    )
};


export default App;