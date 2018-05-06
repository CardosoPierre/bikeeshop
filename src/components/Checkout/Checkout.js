import React, { Component } from 'react';
import { Container, Button, FormGroup, Label, Input } from 'reactstrap';

class checkout extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            lastName: '',
            firstName: '',
            address: '',
            zipCode: '',
            city: '',
            email: '',
            phone: ''
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        
        const url = 'http://localhost:8000/client/add';
        fetch(url, {
          method: 'POST',
          header:{
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(this.state),
        }).then(function (response) {  
            console.log('Request success: ', response);  
          })  
          .catch(function (error) {  
            console.log('Request failure: ', error);  
          });;
    }

    render() {
        return(
            <Container className="Checkout">
                <form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="LastName">Last Name</Label>
                            <Input type="text" name="lastName" id="LastName" onChange={this.handleChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" name="firstName" id="firstName" onChange={this.handleChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" name="address" id="address" onChange={this.handleChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="zipCode">Zip Code</Label>
                            <Input type="text" name="zipCode" id="zipCode" onChange={this.handleChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="text" name="city" id="city" onChange={this.handleChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" onChange={this.handleChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input type="phone" name="phone" id="phone" onChange={this.handleChange} required/>
                        </FormGroup>
                        <Button color="primary" size="lg" active>Submit</Button>
                </form>
            </Container>
        );
    };
}

export default checkout;