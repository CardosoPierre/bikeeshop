import React, { Component } from 'react';
import './ProductDetail.css';

import { Container, Row } from 'reactstrap';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductImage from '../ProductImage/ProductImage'

class productDetail extends Component {
    state = {
        product:
        []
    }

    componentDidMount() {
        const url = 'http://localhost:8000/article/' + this.props.match.params.id;
        fetch(url, {
            method : "GET"
        })
        .then(result=> {
            return result.json();
            }
        )
        .then(data => {
            console.log(data);
            this.setState({product: data})
          }
        );
    }

    render() {
        return(
            <Container>
                <Row>
                    <ProductImage
                        visual = {this.state.product.visual}
                    />
                    <ProductDescription 
                        name = {this.state.product.name}
                        price = {this.state.product.price}
                        description = {this.state.product.description}
                    />
                </Row>
            </Container>
        );
    }
}

export default productDetail;