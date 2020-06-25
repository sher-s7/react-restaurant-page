import React from 'react';
import Mug from './Mug'

export default class Home extends React.Component {
    render() {
        return (
            <div id='home'>
                <blockquote>
                    <p>There is something in the nature of tea that leads us into a world of quiet contemplation of life.</p>
                    <p className='citation'>—Lin Yutang, <cite>The Importance of Living</cite></p>
                </blockquote>

                {/* <div className='parallax-container'><div className='parallax' id='teabanner' alt="loose-leaf-tea" /></div> */}
                <Mug />


                <p id='home-message'><span className='teatime'>TEATIME</span> provides a relaxing, welcoming atmosphere
                with with organic teas, tasty appetizers, and friendly service.
                    Your go-to place to unwind, and enjoy a freshly brewed cup of tea.
                    </p>

                    <button onClick={() => this.props.handleMenuButton('menu')} id='view-menu'><div>VIEW MENU</div></button>
            </div>
        );
    }
}