import React, { Component } from 'react';
import './Products.css';
import { Row } from 'reactstrap';

import Card from '../Card/Card';

class products extends Component {
    state = {
        products:
        []
    }

    componentDidMount() {
        const url = 'http://localhost:8000/article/';
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
        )
        .catch(function() {
            console.log("Network Error");
        });
    }

    render() {
        const cardProducts = this.state.products.map((product, index) => 
            <Card 
                key = {index}
                id = {product.id} 
                picture = {product.visual}
                name = {product.name}
                price = {product.price}
                click={() => this.props.clicked(product.id, product.name, product.price)}
            />
        );

        return (
            <Row>
                {cardProducts}
            </Row>
        );
    }
}

export default products;