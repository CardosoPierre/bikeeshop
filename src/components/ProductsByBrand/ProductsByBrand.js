import React, { Component } from 'react';
import './ProductsByBrand.css';
import { Row } from 'reactstrap';

import Card from '../Card/Card';

class productsByBrand extends Component {
    state = {
        products:
        []
    }

    componentDidMount() {
        console.log(this.props.match.params.brand);
        const url = 'http://localhost:8000/article/' + this.props.match.params.brand;
        fetch(url, {
            method : "GET"
        })
        .then(result=> {
            return result.json();
            }
        )
        .then(data => {
            this.setState({products: data})
          }
        );
    }

    render() {
        const cardProducts = this.state.products.map((product, index) => 
            <Card 
                key = {index}
                id = {product.id} 
                picture = {product.visual}
                name = {product.name}
                price = {product.price}
            />
        );

        return (
            <Row>
                {cardProducts}
            </Row>
        );
    }
}

export default productsByBrand;