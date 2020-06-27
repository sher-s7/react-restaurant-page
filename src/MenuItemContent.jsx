import React from 'react';
export default class MenuItemContent extends React.Component {
    render() {
        const price = this.props.price;
        const description = this.props.description;
        const name = this.props.name;
        const img = this.props.img;

        return (
            <tr className='menu-item-row'>
                <table>
                    <tr>
                        <td className='menu-item-name'>{name}</td>
                        <td className='menu-item-image'><img src={img} alt='alt' /></td>
                    </tr>
                    <tr>
                        <td className='menu-item-desc'>{description}</td>
                        <td className='menu-item-price'>{price}</td>
                    </tr>
                </table>
            </tr>
        );
    }
}