import TabContentContainer from "./TabContentContainer";
import Header from './Header'
import Footer from './Footer'
import React from 'react'
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: <Home handleMenuButton = {this.handleTabs}/>,
            currentTab: 0,
        }

        this.handleTabs = this.handleTabs.bind(this)
    }

    handleTabs = (page) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        if(page === 'home') {
            this.setState({content: <Home handleMenuButton = {this.handleTabs}/>, currentTab: 0})
        } else if(page === 'menu') {
            this.setState({content: <Menu menuItems={this.props.menuItems}/>, currentTab: 1})
        }else if(page === 'about'){
            this.setState({content: <About/>, currentTab: 2})
        }else if(page === 'contact') {
            this.setState({content: <Contact/>, currentTab: 3})
        }
    }

    render() {
        return (
            <div>
                <Header />
                <TabContentContainer content={this.state.content} currentTab = {this.state.currentTab} handleClick = {this.handleTabs} />
                <Footer content={this.state.content} currentTab = {this.state.currentTab} handleClick = {this.handleTabs}/>
            </div>
        )
    }
}