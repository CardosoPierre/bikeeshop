import React from 'react';
import './Products.css';
import { Row } from 'reactstrap';

import Card from '../Card/Card';

import { BrowserRouter as Router, Route} from "react-router-dom";

const products = () => {
    return (
        <Row>
            <Card
                picture = "http://www.newmove.fr/558-large_default/velo-electrique-e-motion-cargo.jpg"
                name = "VÉLO TOUT BEAU"
                price = "499,99€"
            />
            <Card
                picture = "http://www.newmove.fr/558-large_default/velo-electrique-e-motion-cargo.jpg"
                name = "VÉLO TOUT BEAU"
                price = "499,99€"
            />
            <Card
                picture = "http://www.newmove.fr/558-large_default/velo-electrique-e-motion-cargo.jpg"
                name = "VÉLO TOUT BEAU"
                price = "499,99€"
            />
            <Card
                picture = "http://www.newmove.fr/558-large_default/velo-electrique-e-motion-cargo.jpg"
                name = "VÉLO TOUT BEAU"
                price = "499,99€"
            />
            <Card
                picture = "http://www.newmove.fr/558-large_default/velo-electrique-e-motion-cargo.jpg"
                name = "VÉLO TOUT BEAU"
                price = "499,99€"
            />
        </Row>
    );
}

export default products;