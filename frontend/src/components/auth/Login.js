import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <Container className="login-form-wrapper">

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default Login