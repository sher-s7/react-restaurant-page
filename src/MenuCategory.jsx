import React from 'react';
export default class MenuCategory extends React.Component {
    render() {
        const type = this.props.type ? <th>{this.props.type}</th> : null;
        const category = this.props.category ? <th>{this.props.category}</th> : null;

        return (
            <tr>
                <div className='menu-category'>{category}</div>
                <div className='menu-type'>{type}</div>
            </tr>
        );
    }
}