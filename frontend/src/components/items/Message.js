import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { sendMessage } from '../../lib/api'

class Message extends React.Component {
  
  state = {
    formData: {
      id: '',
      message: ''
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
      const response = await sendMessage(this.state.formData)
      console.log(response)
      this.props.history.push('/login')
    } catch (err) {
      console.log(err.response)
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={ this.handleSubmit }>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" rows={10}
              type="message" 
              name="message" 
              placeholder="Enter message to the post owner" 
              // value={ message } 
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default Message