import React, { Component } from 'react';

import { Table } from 'reactstrap';

class list extends Component{
    render() {
        return(
            <Table hover>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Price </th>
                    <th> Quantity </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>LAPIERRE AIRCODE SL 900 PINOT ULTIMATE</td>
                    <td>6999 €</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>CUBE ACCESS HYBRID RACE 500 2018 ELECTRIC</td>
                    <td>2499 €</td>
                    <td>1</td>
                </tr>
            </tbody>
        </Table>
        )
    }
};
export default list;