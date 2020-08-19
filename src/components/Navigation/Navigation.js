import React from 'react';

import './Navigation.scss';

function Navigation(props) {

    return (
        <header>
            <ul className='navigation-bar'>
                <li className='register-button'><a href='/'>Sign Up</a></li>
                <li><a href='/'>Login</a></li>
                <li><a href='/'>Contact</a></li>
                <li><a href='/'>Home</a></li>
            </ul>
        </header>
    );
}

export default Navigation;