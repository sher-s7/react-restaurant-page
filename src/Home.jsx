import React from 'react';
import TeaPot from './images/teacup-leaf.png'

export default class Home extends React.Component {
    render() {
        return (
            <div id='home'>
                <blockquote>
                    <p>There is something in the nature of tea that leads us into a world of quiet contemplation of life.</p>
                    <p className='citation'>—Lin Yutang, <cite>The Importance of Living</cite></p>
                </blockquote>

                <div className='parallax-container'><div className='parallax' id='teabanner' alt="loose-leaf-tea" /></div>


                <p id='home-message'>TEATIME provides a relaxing, welcoming atmosphere
                with with organic loose leaf teas, tasty appetizers, and friendly service.
                    Your go to place to unwind, and enjoy a freshly brewed cup of tea. </p>
                <img id='teacup-leaf' src={TeaPot} alt="teapot.png" />
            </div>
        );
    }
}