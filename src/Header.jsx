import React from 'react';
import Mug from './Mug'
export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Mug/>
                <h1 id='title'>TEATIME</h1>
            </header>
        );
    }
}