/* eslint-disable camelcase */
import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    errors: {}
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    const errors = {
      ...this.state.errors,
      [event.target.name]: ''
    }
    this.setState({  formData, errors })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await registerUser(this.state.formData)
      console.log(response)
      this.props.history.push('/login')
    } catch (err) {
      console.log(err.response)
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    const { first_name, last_name, username, email, password, password_confirmation } = this.state.formData
    return (
      <Container className="reg-form-wrapper">

        <Form onSubmit={ this.handleSubmit }>
          <Form.Group controlId="formFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control 
              type="firstName" 
              name="first_name" 
              placeholder="Enter first name" 
              value={ first_name } 
              onChange={ this.handleChange }
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control 
              type="lastName" 
              name="last_name"
              placeholder="Enter last name" 
              value={ last_name } 
              onChange={ this.handleChange }
            />
          </Form.Group>

          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="username" 
              name="username"
              placeholder="Enter username" 
              value={ username } 
              onChange={ this.handleChange }
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              placeholder="Enter email" 
              value={ email } 
              onChange={ this.handleChange }
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              name="password"
              placeholder="Enter password" 
              value={ password } 
              onChange={ this.handleChange }
            />
            {/* <Form.Text className="text-muted"></Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label>Password confirmation</Form.Label>
            <Form.Control 
              type="password" 
              name="password_confirmation"
              placeholder="Enter Password Confirmation" 
              value={ password_confirmation } 
              onChange={ this.handleChange }
            />
            <Form.Text className="text-muted"></Form.Text>
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