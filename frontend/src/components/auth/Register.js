import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

class Register extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <Container className="reg-form-wrapper">

        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="email" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="email" placeholder="Enter last name" />
          </Form.Group>

          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter username" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label>Password confirmation</Form.Label>
            <Form.Control type="password" placeholder="Password confirmation" />
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default Register