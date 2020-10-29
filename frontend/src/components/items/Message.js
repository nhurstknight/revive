import React from 'react'
import { Button, Container, Form, Image } from 'react-bootstrap'
import { sendMessage, getSingleItem } from '../../lib/api'

class Message extends React.Component {
  state = {
    item: '',
    user: '',
    formData: {
      item: '',
      message: ''
    }
  }

  async componentDidMount() {
    const item = this.props.match.params.id
    console.log('this.props.match.params --->', this.props.match.params)
    const response = await getSingleItem(item)
    console.log(response)
    this.setState({
      item: response.data,
      user: response.data.owner,
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
    const { message } = this.state.formData
    const { image, title } = this.state.item
    const { username } = this.state.user
    if (!this.state.item && !this.state.formData && !this.state.item.owner) 
      return null
    return (
      <Container className="message-form">
        <h2>Send a message</h2>
        <h5>{ title }</h5>
        <p>{ username }</p>
        <Image className="upload-thumbnail" src={ image }/>
        <Form onSubmit={ this.handleSubmit }>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea" rows={8}
              type="message" 
              name="message" 
              placeholder="Enter message to the post owner" 
              value={ message } 
              onChange={ this.handleChange }
            />
          </Form.Group>
          <Button 
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