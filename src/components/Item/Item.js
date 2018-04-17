import React from 'react';


const item = ( props ) => {
    return(
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.quantity}
            </td>
            <td>
                {props.price}
            </td>
        </tr>
    );
};

export default item;