import React from 'react';
import './ProductDetail.css';

import { Container, Row } from 'reactstrap';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductImage from '../ProductImage/ProductImage'

const productDetail = (props) => {
    return(
        <Container>
             <Row>
                <ProductImage
                    visual = "http://www.newmove.fr/558-large_default/velo-electrique-e-motion-cargo.jpg"
                />
                <ProductDescription 
                    name = "Product 1"
                    price = "19,99€"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt volutpat pulvinar. Aliquam nec malesuada felis. Vestibulum eget maximus massa. Cras mattis leo in quam imperdiet dapibus. Curabitur eleifend consectetur tincidunt. Quisque non vulputate nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                />
            </Row>
        </Container>
    );
}

export default productDetail;