import React from 'react';
import './Header.css';
import { Jumbotron, Container } from 'reactstrap';

const header = (props) => {
    return(
        <div>
            <Jumbotron fluid>
                <Container fluid>
                <h1 className="display-3">Bike E-Shop</h1>
                <p className="lead">Bienvenue sur notre boutique de vente de vélo en ligne !</p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default header;