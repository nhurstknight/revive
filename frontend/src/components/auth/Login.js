import React from 'react'
import { Form, Button, Container, InputGroup } from 'react-bootstrap'

import { loginUser } from '../../lib/api'
import { setToken, setUserId } from '../../lib/auth'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try { 
      const response = await loginUser(this.state.formData)
      console.log(response)
      setToken(response.data.token)
      setUserId(response.data.userID)
      this.props.history.push('/items')
    } catch (err) {
      console.log(err.response)
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    const { email, password } = this.state.formData
    return (
      <Container className="login-form-wrapper">

        <h2>Login!</h2>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control 
                type="email" 
                placeholder="Email" 
                name="email"
                value={email}
                onChange={this.handleChange}/>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"                       
              name="password"
              value={password}
              onChange={this.handleChange} />
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