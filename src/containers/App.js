import React, { Component } from 'react';
import './App.css';
import Card from '../components/Card/Card';
import { Container, Row } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Card 
            picture = "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            title = "myProduct"
            price = "19.99"
          />
          <Card 
            picture = "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            title = "myProduct 2"
            price = "229.99"
          />
        </Row>
      </Container>
    );
  }
}

export default App;
