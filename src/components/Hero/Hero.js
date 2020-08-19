import React from 'react';

import './Hero.scss';

function Hero(props) {

    return (
        <div id='hero'>
            <h1 className='hero-text'>STRIVE FOR IMPROVEMENT</h1>
            <h2 className='hero-text'>UNLEASH YOUR PRODUCT'S FULL POTENTIAL</h2>
            <div className='centered-container'>
                <p className='learn-button hero-text'><b>Learn How</b></p>
            </div>
        </div>
    );
}

export default Hero;