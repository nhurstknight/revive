import React from 'react'
import { Container,Form, Button } from 'react-bootstrap'

import { uploadItem } from '../../lib/api'

class UploadItem extends React.Component {
  state = {
    formData: {
      title: '',
      description: '',
      image: ''
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
      const response = await uploadItem(this.state.formData)
      console.log(response)
      this.props.history.push('/items')
    } catch (err) {
      console.log(err.response)
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    const { title, description, image } = this.state.formData
    return (
      <Container className="reg-form-wrapper">

        <Form onSubmit={ this.handleSubmit }>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="title" 
              name="title" 
              placeholder="Enter title" 
              value={ title } 
              onChange={ this.handleChange }
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              type="description" 
              name="description"
              placeholder="Enter description" 
              value={ description } 
              onChange={ this.handleChange }
            />
          </Form.Group>

          {/* change to image upload form */}
          <Form.Group controlId="formImage">
            <Form.Label>Image(s)</Form.Label>
            <Form.Control 
              type="file" 
              name="image"
              placeholder="Enter image URL" 
              value={ image } 
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

export default UploadItem