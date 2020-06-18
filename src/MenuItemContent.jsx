import React from 'react';
export default class MenuItemContent extends React.Component {
    render() {
        const price = this.props.price;
        const description = this.props.description;
        const name = this.props.name;
        const img = this.props.img;

        return (
            <tr>
                <td><img src={img} alt={name}/></td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
            </tr>
        );
    }
}