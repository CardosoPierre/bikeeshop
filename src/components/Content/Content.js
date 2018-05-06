import React, { Component } from 'react';
import './Content.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Products from '../Products/Products';
import ProductsByBrand from '../ProductsByBrand/ProductsByBrand';
import ProductDetail from '../ProductDetail/ProductDetail';
import Presentation from '../Presentation/Presentation';
import Cart from '../Cart/Cart';

class content extends Component {
    render() {
        return (
            <div className="Content">
                <Router>
                    <div>
                        <Route exact path="/" component={ Presentation } />
                        <Route path="/product/:id" component={ ProductDetail } />
                        <Route exact path="/products" component={ Products } />
                        <Route path="/products/:brand" component={ ProductsByBrand } />
                        <Route path="/cart" component={ Cart } />
                    </div>
                </Router>
            </div>
        );
    }
}

export default content;