import React from 'react';
import './Header.css';
import { Container } from 'reactstrap';

const header = (props) => {
    return(
        <Container className="Header">
            <h1>BIKE E-SHOP</h1>
        </Container>
    );
}

export default header;