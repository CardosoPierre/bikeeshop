import React from 'react';
import './Card.css';
import { Button, Col } from "reactstrap";

const card = (props) => {

    return (
        <Col md="4" className="Card">
            <a href="/product/1">
                <img src={props.picture} alt="product" />
            </a>
            <p>{props.name}</p>
            <p className="price">{props.price}</p>
            <a href="/product/1">ADD TO CART</a>
        </Col>
    );
}

export default card;