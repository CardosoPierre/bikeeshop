import React from 'react';
import './Card.css';
import { Button, Col } from "reactstrap";

const card = (props) => {

    return (
        <Col md="4" className="Card">
            <a href="#">
                <img src={props.picture} alt="product" />
                <p>{props.title}</p>
                <p className="price">{props.price}</p>
                <Button color="link">Add to cart</Button>
            </a>
        </Col>
    );
}

export default card;