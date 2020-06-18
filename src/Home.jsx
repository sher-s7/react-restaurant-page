import React from 'react';
import Slideshow from './Slideshow'
export default class Home extends React.Component {
    render() {
        return (
            <div style={{position: "relative"}}>
                <h3>Home</h3>
                <h1 id='home-title'>TEATIME</h1>
                <Slideshow/>
                <p id='home-message'>Enjoy a freshly brewed cup of tea anytime</p>

            </div>
        );
    }
}