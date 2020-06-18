import React from 'react';
export default class MenuCategory extends React.Component {
    render() {
        const type = this.props.type ? this.props.type: null;
        const category = this.props.category;

        return (
            <tr>
                <th>{category}</th>
                if(type){
                    <th>{type}</th>
                }
            </tr>
        );
    }
}