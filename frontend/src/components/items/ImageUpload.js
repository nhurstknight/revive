import React from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

class ImageUpload extends React.Component {
  state = {
    image: ''
  }
  
  handleUpload = async event => {
    console.log('file uploaded')
    console.log(event.target.files[0])
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    try {
      const res = await axios.post(uploadUrl, data)
      console.log(res)
      this.setState({
        image: res.data.secure_url
      })
      console.log(res.data.secure_url)
      this.props.onChange(res.data.secure_url)
    } catch (err) {
      console.log(err)
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.image !== this.state.image) {
      this.props.onChange(this.state.image)
    }
  }

  render() {
    const { image } = this.state
    return (
      <>
        {image ? 
          <img src={image}
            className="upload-thumbnail"
          />
          :
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control 
              type="file" 
              name="image"
              placeholder="Enter image URL" 
              onChange={ this.handleUpload }
            />
          </Form.Group>
        }
      </>
    )
  }
}

export default ImageUpload