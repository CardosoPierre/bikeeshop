import React, { Component } from 'react';
import './Content.css';
import { Container, Row } from 'reactstrap';

import ProductDetail from '../ProductDetail/ProductDetail';

class content extends Component {
    constructor(props){
        super(props);
    }

    /*
    componentDidMount() {
        fetch('localhost:8000/article')
          .then(response => response.json())
          .then(data => {
              this.setState({items: data.results});
              console.log(this.state.items.key);
          }
        );
    }*/

    render() {
        /*
        const listVelo = this.state.items.map((item, index) => 
            <Card 
                key = {index}
                picture = {item.visual}
                title = {item.name}
                price = {item.price}
            />
        );*/
        return (
            <Container className="Content">
                <Row>
                    <ProductDetail/>
                </Row>
            </Container>
        );
    }
}

export default content;