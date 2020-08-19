import React from 'react';

import './Footer.scss';

function Footer(props) {

    return (
        <footer>
            <div className='column'>
                <h1 className='brand'>Feedback</h1>
            </div>
            <div className='column'>
                <h1 className='column-title'>Support</h1>
                <p>Contact</p>
                <p>Documentation</p>
                <p>Give Us Feedback 💕</p>
            </div>
            <div className='column'>
                <h1 className='column-title'>About</h1>
                <p><a href='https://github.com/oliviergoulet5'>My GitHub</a></p>
                <p><a href='https://www.linkedin.com/in/olivier-goulet/'>My LinkedIn</a></p>
                <hr/>
                <p><a href='https://github.com/oliviergoulet5/feedback-dashboard'>Dashboard Repo</a></p>
                <p><a href='https://github.com/oliviergoulet5/FeedbackAPI'>API Repo</a></p>
                <p><a href='https://github.com/oliviergoulet5/feedback-widget'>Widget Repo</a></p>
            </div>
        </footer>
    )
}

export default Footer;