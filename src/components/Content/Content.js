import React, { Component } from 'react';
import './Content.css';

import {Container} from 'reactstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Products from '../Products/Products';
import ProductDetail from '../ProductDetail/ProductDetail';

class content extends Component {
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
                <Router>
                    <div>
                        <Route exact path="/" component={Products} />
                        <Route path="/product" component={ProductDetail} />
                    </div>
                </Router>
            </Container>
        );
    }
}

export default content;