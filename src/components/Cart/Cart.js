import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import List from '../List/List';
 

const cart = (props) => {
    return(
        <Container className="Cart">
            <List
                cart={props.data}
            />
        </Container>
    );
};
export default connect()(cart);