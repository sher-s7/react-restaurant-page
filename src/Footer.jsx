import React from 'react';
import GithubLogo from './images/github-logos/GitHub-Mark-Light-120px-plus.png'

export default class Footer extends React.Component {
    handleClick(page) {
        if(page === 'home') {

        }
    }
    render() {
        return (
            <footer>
                <ul>
                    <li><h3>TEATIME</h3></li>
                    <li><button onClick={() => this.props.handleClick('home')}>Home</button></li>
                    <li><button onClick={() => this.props.handleClick('menu')}>Menu</button></li>
                    <li><button onClick={() => this.props.handleClick('about')}>About</button></li>
                    <li><button onClick={() => this.props.handleClick('contact')}>Contact</button></li>
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