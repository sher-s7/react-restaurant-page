import React from 'react';
export default class MenuCategory extends React.Component {
    render() {
        const type = this.props.type ? <div className='menu-type'>{this.props.type}</div> : null;
        const category = this.props.category ? <div className='menu-category'>{this.props.category}</div> : null;

        return (
            <tr>
                <th>
                    {category}
                    {type}
                </th>
            </tr>
        );
    }
}