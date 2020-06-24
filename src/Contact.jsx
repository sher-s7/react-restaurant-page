import React from 'react';

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
            </div>
        );
    }
}