import React from 'react';
import Home from './Home'
// import Menu from './Menu'
// import About from './About'
// import Contact from './Contact'

export default class Footer extends React.Component {
    handleClick(page) {
        
    }
    render() {
        return (
            <footer>
                <h3>TEATIME</h3>
                <ul>
                    <li><button onClick={() => this.handleClick('home')}>Home</button></li>
                    <li><button onClick={() => this.handleClick('menu')}>Menu</button></li>
                    <li><button onClick={() => this.handleClick('about')}>About</button></li>
                    <li><button onClick={() => this.handleClick('contact')}>Contact</button></li>
                </ul>
            </footer>
        );
    }
}