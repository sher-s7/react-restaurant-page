import React from 'react';
export default class MenuItemContent extends React.Component {
    render() {
        const price = this.props.price;
        const description = this.props.description;
        const name = this.props.name;
        const img = this.props.img;

        return (
            <tr className='menu-item-row'>
                <td className='menu-item-container' colSpan={'100%'}>
                    <div className='smallscreen menu-image-name-container'>
                        <img className='menu-item-image' src={img} alt='alt' />
                        <div className='menu-item-name'>{name}</div>
                    </div>

                    <div className='widescreen menu-item-name'>{name}</div>
                    <div className='menu-item-desc'>{description}</div>
                    <div className='menu-item-price'>{price}</div>
                    <div className='image-container'>
                        <img className='widescreen menu-item-image' src={img} alt='alt' />
                    </div>
                </td>
            </tr>

        );
    }
}