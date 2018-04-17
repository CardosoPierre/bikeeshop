import React from 'react';

import { Table } from 'reactstrap';
import Item from '../Item/Item';

const list = ( props ) => {
    return(
        <Table hover>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Quantity </th>
                    <th> Price </th>
                </tr>
            </thead>
            <tbody>
                <Item
                    name = "Vélo tout bo"
                    quantity = "69"
                    price = "75"
                />
                <Item
                    name ="Véleau"
                    quantity = "10"
                    price = "120"
                />
            </tbody>
        </Table>
    );
};
export default list;