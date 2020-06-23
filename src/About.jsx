import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div id='about'>
                <img id='organic' src='' alt="organic.png" />
                <p>Here at TEATIME we take pride in using all organic tea leaves. Why does this matter?
                    <blockquote>
                        <p> <i>Organic tea is grown without the use of chemicals fertilizer, pesticides, fungicides, or herbicides.
                        These chemicals have well-documented harmful effects on the environment, farmers and consumers who may
                        ingest residues.
                            </i>
                        </p>
                        <cite><a target='_blank' rel='noopener noreferrer' href='https://blog.equalexchange.coop/organic-vs-conventional-tea-whats-the-difference/'>Click here for more info.</a></cite>
                    </blockquote>
                    We offer our customers quality tea they wouldn't find elsewhere, and also provide a selection of appetizers.
                </p>
            </div>
        );
    }
}