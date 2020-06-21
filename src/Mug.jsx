import React from 'react';
import SpriteAnimator from 'react-sprite-animator'
import MugSprites from './images/mugspritesheet.png'
export default class Mug extends React.Component {
    constructor(props){
        super(props);
        this.state={
            mouseOn: false
        }
    }

    startAnimation = () => {
        this.setState({mouseOn: true})
    }

    stopAnimation = () => {
        this.setState({mouseOn: false})
        console.log(this.state.mouseOn)
    }

    render() {
        return (
            <div id='mug-div'
            onMouseEnter={this.startAnimation}
            onMouseLeave={this.stopAnimation}
            >
                <SpriteAnimator
                    width={100}
                    height={100}
                    sprite={MugSprites}
                    fps={60}
                    startFrame={0}
                    stopLastFrame={false}
                    frameCount={120}
                    wrapAfter={11}
                    direction={'horizontal'}
                    shouldAnimate={this.state.mouseOn}
                />
            </div>
        );
    }
}