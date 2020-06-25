import React from 'react';
import Phone from './images/phone.png'
import Location from './images/location.png'

export default class Contact extends React.Component {
    render() {
        return (
            <div id='contact'>
                <h3>Send us your questions, comments, or concerns:</h3>
                <form id='contact-form'>

                    <div className='form-element'>
                        <label htmlFor="name">NAME</label>
                        <input type="text" name="name" id="name" required />
                    </div>

                    <div className='form-element'>
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" name="email" id="email" required />
                    </div>

                    <div className='form-element'>
                        <label htmlFor="message">MESSAGE</label>
                        <textarea name="message" id="message" required />
                    </div>

                    <input type="submit" name="submit" id="submit" value='SUBMIT' />
                </form>
                <div id='contact-list-container'>
                <ul id='contact-list'>
                    <li>
                        <img id='phone-img' src={Phone} alt="phone" />
                        <span id='phonenumber'>+1-613-555-0170</span>
                    </li>
                    <li>
                        <img id='location-img' src={Location} alt="location" />
                        <span id='location'>123 Teatime Crescent Toronto, ON</span>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}