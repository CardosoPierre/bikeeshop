import React from 'react';
import './Card.css';
import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const card = (props) => {
    return (
        <Col md="4" className="Card">
            <Link to={"/product/" + props.id}>
                <img src={props.picture} alt="product" />
            </Link>
            <p className="name">{props.name}</p>
            <p className="price">{props.price} €</p>
            <Button color="primary" onClick={props.click} size="md" active>
                Add to Cart
            </Button>
        </Col>
    );
}

export default card;