import React from 'react';
import Home from './Home'
// import Menu from './Menu'
// import About from './About'
// import Contact from './Contact'

import GithubLogo from './images/github-logos/GitHub-Mark-Light-120px-plus.png'

export default class Footer extends React.Component {
    handleClick(page) {
        
    }
    render() {
        return (
            <footer>
                <ul>
                    <li><h3>TEATIME</h3></li>
                    <li><span onClick={() => this.handleClick('home')}>Home</span></li>
                    <li><span onClick={() => this.handleClick('menu')}>Menu</span></li>
                    <li><span onClick={() => this.handleClick('about')}>About</span></li>
                    <li><span onClick={() => this.handleClick('contact')}>Contact</span></li>
                </ul>
                <div className='createdby'>
                    <span>Created by Sher Sheikh</span>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/sher-s7/react-restaurant-page">
                        <img id='github-logo' src={GithubLogo} alt="github-logo"/>
                    </a>
                </div>
            </footer>
        );
    }
}