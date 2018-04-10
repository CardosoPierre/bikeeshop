import React from 'react';
import './ProductImage.css';

import { Col } from 'reactstrap';

const productImage = (props) => {
    return(
        <Col md={{ size: 5, offset: 1 }} className="ProductImage">
            <img src={props.visual} alt={props.alt} />
        </Col>
    );
}

export default productImage;