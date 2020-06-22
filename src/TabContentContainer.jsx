import React from 'react';
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
export default class TabContentContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            content: <Home/>,
            currentTab: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (page) => {
        if(page === 'home') {
            this.setState({content: <Home/>, currentTab: 0})
        } else if(page === 'menu') {
            this.setState({content: <Menu/>, currentTab: 1})
        }else if(page === 'about'){
            this.setState({content: <About/>, currentTab: 2})
        }else if(page === 'contact') {
            this.setState({content: <Contact/>, currentTab: 3})
        }
    }

    render() {
        return (
            <div>
                <ul id='tablist'>
                    <li className='tab'
                    id={this.state.currentTab === 0 ? 'current-tab' : null} 
                    onClick={() => this.handleClick('home')}><h2>HOME</h2></li>
                    <li className='tab'
                    id={this.state.currentTab === 1 ? 'current-tab' : null}
                    onClick={() => this.handleClick('menu')}><h2>MENU</h2></li>
                    <li className='tab'
                    id={this.state.currentTab === 2 ? 'current-tab' : null}
                    onClick={() => this.handleClick('about')}><h2>ABOUT</h2></li>
                    <li className='tab'
                    id={this.state.currentTab === 3 ? 'current-tab' : null}
                    onClick={() => this.handleClick('contact')}><h2>CONTACT</h2></li>
                </ul>
                
                <div className='contentContainer'>{this.state.content}</div>
            </div>
        );
    }
}
