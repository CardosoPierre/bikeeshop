import React from 'react';
import './Content.css';
import { Container, Row } from 'reactstrap';
import Card from '../Card/Card';

const content = (props) => {
    return (
        <Container className="Content">
            <Row>
                <Card 
                    picture = "https://www.go-sport.com/media/resized/1300x/catalog/product/01/31/75/67/railway-16_1_v1.jpg"
                    title = "VÉLO DE ROUTE BMC TEAMMACHINE SLR02 SHIMANO ULTEGRA 11V 2017 JAUNE"
                    price = "1699,99€"
                />
                <Card 
                    picture = "https://www.go-sport.com/media/resized/1300x/catalog/product/01/31/75/67/railway-16_1_v1.jpg"
                    title = "VÉLO DE ROUTE BMC TEAMMACHINE SLR02 SHIMANO ULTEGRA 11V 2017 JAUNE"
                    price = "1699,99€"
                />
                <Card 
                    picture = "https://www.go-sport.com/media/resized/1300x/catalog/product/01/31/75/67/railway-16_1_v1.jpg"
                    title = "VÉLO DE ROUTE BMC TEAMMACHINE SLR02 SHIMANO ULTEGRA 11V 2017 JAUNE"
                    price = "1699,99€"
                />
                <Card 
                    picture = "https://www.go-sport.com/media/resized/1300x/catalog/product/01/31/75/67/railway-16_1_v1.jpg"
                    title = "VÉLO DE ROUTE BMC TEAMMACHINE SLR02 SHIMANO ULTEGRA 11V 2017 JAUNE"
                    price = "1699,99€"
                />
                <Card 
                    picture = "https://www.go-sport.com/media/resized/1300x/catalog/product/01/31/75/67/railway-16_1_v1.jpg"
                    title = "VÉLO DE ROUTE BMC TEAMMACHINE SLR02 SHIMANO ULTEGRA 11V 2017 JAUNE"
                    price = "1699,99€"
                />
                <Card 
                    picture = "https://www.go-sport.com/media/resized/1300x/catalog/product/01/31/75/67/railway-16_1_v1.jpg"
                    title = "VÉLO DE ROUTE BMC TEAMMACHINE SLR02 SHIMANO ULTEGRA 11V 2017 JAUNE"
                    price = "1699,99€"
                />
            </Row>
        </Container>
    );
}

export default content;