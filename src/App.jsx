import React from 'react';
import './assets/scss/style.scss';

import Header from './components/header/Header';
import About from './components/about/About';
import Notification from './components/notification/Notification';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <div className='overflow-hidden position-relative'>
            <div className='background-header-about'></div>
            <div className='background-transition'></div>
            <Header />
            <About />
            <Notification />
            <Footer />
        </div>
    )
};


export default App;