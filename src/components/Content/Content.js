import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Content.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Products from '../Products/Products';
import ProductDetail from '../ProductDetail/ProductDetail';
import Presentation from '../Presentation/Presentation';
import Cart from '../Cart/Cart';
import ProductsByCategory from '../ProductsByCategory/ProductsByCategory';

class content extends Component {
    cartHandler = (productIndex, productName, productPrice) => {
        this.setState({carts : [...this.state.carts, {id: productIndex, name: productName, price: productPrice}]})
    }

    render() {
        return (
            <div className="Content">
                <Router>
                    <div>
                        <Route exact path="/" component={ Presentation } />
                        <Route path="/product/:id" component={ ProductDetail } clicked={this.props.onAddCart} />
                        <Route exact path="/products" render={ () => <Products clicked={this.props.onAddCart} />}/>
                        <Route exact path="/products/:category" component={ ProductsByCategory } clicked={this.props.onAddCart}/>
                        <Route exact path="/cart" render={ () => <Cart data={this.props.data} />}/>
                    </div>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCart : (id, name, price) => dispatch({type: 'ADD', product: {id, name, price}})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(content);