import React from 'react';
export default class TabContentContainer extends React.Component {

    render() {
        return (
            <div>
                <ul id='tablist'>
                    <li className='tab'
                    id={this.props.currentTab === 0 ? 'current-tab' : null} 
                    onClick={() => this.props.handleClick('home')}><button>HOME</button></li>
                    <li className='tab'
                    id={this.props.currentTab === 1 ? 'current-tab' : null}
                    onClick={() => this.props.handleClick('menu')}><button>MENU</button></li>
                    <li className='tab'
                    id={this.props.currentTab === 2 ? 'current-tab' : null}
                    onClick={() => this.props.handleClick('about')}><button>ABOUT</button></li>
                    <li className='tab'
                    id={this.props.currentTab === 3 ? 'current-tab' : null}
                    onClick={() => this.props.handleClick('contact')}><button>CONTACT</button></li>
                </ul>
                
                <div className='contentContainer'>{this.props.content}</div>
            </div>
        );
    }
}
