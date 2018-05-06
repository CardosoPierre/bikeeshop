import React, { Component } from 'react';

import { Table } from 'reactstrap';
import Item from '../Item/Item';

class list extends Component{
    render() {
        const listItem = this.props.cart.map((product, index) => 
            <Item
                name = {product.name}
                price = {product.price}
            />
        );
        return(
            <Table hover>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Price </th>
                </tr>
            </thead>
            <tbody>
                {listItem}
            </tbody>
        </Table>
        )
    }
};
export default list;