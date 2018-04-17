import React, { Component } from 'react';
import './Content.css';

import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Products from '../Products/Products';
import ProductDetail from '../ProductDetail/ProductDetail';
import Presentation from '../Presentation/Presentation';
import List from '../List/List';

class content extends Component {
    render() {
        return (
            <div className="Content">
                <Router>
                    <div>
                        <Route exact path="/" component={ Presentation } />
                        <Route path="/product" component={ ProductDetail } />
                        <Route path="/products" component={ Products } />
                        <Route path="/cart" component={ List } />
                    </div>
                </Router>
            </div>
        );
    }
}

export default content;