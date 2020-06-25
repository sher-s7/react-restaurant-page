import React from 'react';
import Plant from './images/plant.svg'


export default class About extends React.Component {
    render() {
        return (
            <div id='about'>
                <img className='icon' src={Plant} alt="organic.png" />
                <p>At <span className='teatime'>TEATIME</span> we take pride in using all organic tea leaves. Why does this matter?
                    <blockquote>
                        <p> <i>Organic tea is grown without the use of chemical fertilizers, pesticides, fungicides, or herbicides.
                        These chemicals have well-documented harmful effects on the environment, farmers and consumers who may
                        ingest residues.
                            </i>
                        </p>
                        <cite><a target='_blank' rel='noopener noreferrer' href='https://blog.equalexchange.coop/organic-vs-conventional-tea-whats-the-difference/'>Click here for more info.</a></cite>
                    </blockquote>
                    We offer our customers quality tea they wouldn't find elsewhere along with a selection of appetizers. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        );
    }
}