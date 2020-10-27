import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { sendMessage, getSingleItem } from '../../lib/api'

class Message extends React.Component {
  state = {
    formData: {
      item: '',
      message: ''
    }
  }

  async componentDidMount() {
    const item = this.props.match.params.id
    console.log('this.props.match.params --->', this.props.match.params)
    const response = await getSingleItem(item)
    this.setState({
      formData: {
        item: response.data.id
      }
    })
    console.log('response.data.id --->', response.data.id)
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
    // console.log(formData)
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const item = this.props.match.params.id
      console.log('params --->', this.props.match.params)
      const response = await sendMessage(item, this.state.formData)
      console.log('response --->', response)
      this.props.history.push('/')
    } catch (err) {
      console.log(err.response)
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    // const { message } = this.props
    return (
      <Container>
        <Form onSubmit={ this.handleSubmit }>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" rows={8}
              type="message" 
              name="message" 
              placeholder="Enter message to the post owner" 
              value={ this.state.formData.message } 
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Button 
            // item={this.state.formData.item}
            variant="primary" 
            type="submit" >
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default Message