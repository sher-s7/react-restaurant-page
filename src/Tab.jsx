import React from 'react';
export default class Tab extends React.Component {
    render() {
        const tab = this.props.tab;
        const content = this.props.content;

        return (
            <div>
                <h2>{tab}</h2>
                {content}
            </div>
        );
    }
}