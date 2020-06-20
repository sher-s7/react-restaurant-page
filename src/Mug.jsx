import React from 'react';

const imageFiles = require.context('./images/SmallerMugSequence', false, /\.(png|jpe?g|svg)$/);

export default class Mug extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImageIndex: 0,
            images: imageFiles.keys().map(imageFiles),
            timer: undefined
        };

    }

    startSequence = () => {


        let newIndex = this.state.currentImageIndex < this.state.images.length - 1 ?
            this.state.currentImageIndex + 1 : 0;
        this.setState({ currentImageIndex: newIndex });
        console.log(this.state.currentImageIndex)

        if (!this.state.timer) {
            this.setState({ timer: setInterval(this.startSequence, 1000/60) })
        }

    }

    kill = () => {
        if(this.state.timer) {
            clearInterval(this.state.timer);
            this.setState({timer: undefined});
        }
    }

    render() {
        return (
            <img id='teacup' src={this.state.images[this.state.currentImageIndex]} alt="teacup"
                onMouseEnter={this.startSequence}
                onMouseLeave={this.kill}
            />
        );
    }
}