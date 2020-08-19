import React from 'react';

import './Home.scss';

import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import Hero from '../../components/Hero/Hero';

function Home(props) {

    return (
        <div>
            <Navigation />
            <main>
                <Hero />
                <div className='section'>
                    <div>
                        <h1>Simple To Use</h1>
                        <p>Just place the widget into your website.</p>
                        <img src='#' />
                    </div>
                    <div>
                        <h1>Insightful Analytics</h1>
                        <p>Our API will provide you with analytical data based on your user's feedback</p>
                        <img src='#' />
                    </div>
                    <div>
                        <h1>A Powerful And Flexible Dashboard</h1>
                        <p>A dashboard which can suit your every need offering a ton of customizability</p>
                        <img src='#' />
                    </div>
                </div>
                <div className='endpoint'>
                    <h1 className='title'>Enhance your product with Feedback</h1>
                    <p className='button'>Get Started</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;