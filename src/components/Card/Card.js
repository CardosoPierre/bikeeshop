import React from 'react';
import './Card.css';
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const card = (props) => {

    return (
        <Col md="4" className="Card">
            <Link to={"product/" + props.id}>
                <img src={props.picture} alt="product" />
            </Link>
            <p>{props.name}</p>
            <p className="price">{props.price} €</p>
            <Link to={"product/" + props.id}>ADD TO CART</Link>
        </Col>
    );
}

export default card;