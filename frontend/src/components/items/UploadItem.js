import React from 'react'
import { Container,Form, Button } from 'react-bootstrap'
import ImageUpload from './ImageUpload'
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

  handleImageChange = url => {
    console.log('I have the url', url)
    const formData = { ...this.state.formData, image: url }
    this.setState({ formData })
  }

  render() {
    const { title, description } = this.state.formData
    return (
      <Container className="upload-form-wrapper">
        <h2>Upload an Item!</h2>
        <Form onSubmit={ this.handleSubmit }>

          <ImageUpload 
            onChange={this.handleImageChange}
          />

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
              as="textarea" rows={8}
              type="description" 
              name="description"
              placeholder="Enter description" 
              value={ description } 
              onChange={ this.handleChange }
            />
          </Form.Group>

          <Button className="upload-btn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default UploadItem