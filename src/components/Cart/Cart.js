import React from 'react';
import { Container } from 'reactstrap';
import List from '../List/List';
import { Link } from "react-router-dom";
 

const cart = (props) => {
    return(
        <Container className="Cart">
            <List
                cart={props.data}
            />

            <p>Total : 9 498 €</p>
            <Link to={"/checkout/"}>
                CHECKOUT
            </Link>
        </Container>
    );
};
export default cart;