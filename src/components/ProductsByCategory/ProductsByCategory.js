import React, { Component } from 'react';
import './ProductsByCategory.css';
import { Row } from 'reactstrap';

import Card from '../Card/Card';

class productsByCategory extends Component {
    state = {
        products:
        []
    }

    componentDidMount() {
        const url = 'http://localhost:8000/article/' + this.props.match.params.category;
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
                click={() => this.props.clicked(product.id)}
            />
        );

        return (
            <Row>
                {cardProducts}
            </Row>
        );
    }
}

export default productsByCategory;