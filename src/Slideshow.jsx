import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends React.Component {

    render() {
        const imageFiles = require.context('./images/slideshow', false, /\.(png|jpe?g|svg)$/);
        const images = imageFiles.keys().map(imageFiles);
        const divs = images.map((image) =>
            <div>
                <img src={image} alt='carousel slide' />
            </div>
        );
        return (
            <Carousel autoPlay infiniteLoop interval={6000} transitionTime={800}>
                {divs}
            </Carousel>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.querySelector('#root'));
