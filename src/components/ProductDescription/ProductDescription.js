import React from 'react';
import './ProductDescription.css';

import { Button, Col } from 'reactstrap';

const productDescription = (props) => {
    return (
        <Col md='5' className="ProductDescription">
            <a href="/">All Product</a>
            <p className="Name">{ props.name }</p>
            <p className="Price">{ props.price }</p>
            <p className="Description">{ props.description }</p>
            <Button color="link" className="ButtonCart">Add to Cart</Button>
        </Col>
    );
}

export default productDescription;