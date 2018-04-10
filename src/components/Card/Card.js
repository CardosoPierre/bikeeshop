import React from 'react';
import './Card.css';
import { Button, Col } from "reactstrap";

const card = (props) => {

    return (
        <Col className="Card">
            <img src={props.picture} alt="product" />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <Button color="primary">Add to cart</Button>
        </Col>
    );
}

export default card;