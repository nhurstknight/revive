# SEI-project-4 - Revive

Insert deployed project link here

![Website screenshot](/assets/post-index.png)

![Website screenshot](/assets/item-show.png)

## Brief
The brief was to build a full stack application, it was a solo project and I had 9 days to plan and build this application.

The technical requirements for this project were as follows:
- Build a full-stack application by making your own backend and your own front-end
- Use a Python Django API using Django REST Framework to serve your data from a Postgres database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Be deployed online

## Technologies & Tools

**Tech:** React, JavaScript, Python, Django, PostgresQL, Sass, React-Bootstrap, Axios, React-router-dom, Cloudinary

**Tools:** VSCode,Eslint, Git & GitHub, npm, Tableplus, Insomnia

## Overview 
Revive is a site that allows members to list unwanted items, members can view listings and send messages to the owner on the app if they are interested in the item. 

### Functionality
- Users can register/login
- Upload new items to the site
- View all posts on the Index page
- View post details on the show page
- Send a message to the 

## Process
I spent some time planning how to build the application. As this was a solo project I was comfortable doing this process on paper as it allows me to quickly visualise my ideas and evolve my plans. My planning steps included:
- Creating wireframes for the user journey.
- Planning the technical build by breaking down large tasks into smaller chunks. 
- Creating a ERD to visualise the relationships between the tables on my back-end.

![ERD image](/assets/erd-image.png)

Once this was complete and I had signed off my plan with my course instructors, I moved onto the first step and began to build my application focusing on the back-end.

1. I started this by writing the code for the user and item models and views.
2. I wrote the code fo the auth which included token authentication, a user model and views that allow users to register or login.
3. My next step was to work on the code for messaging. Initially I had planned that users would be able to generate a thread based on the item and within this have a two-way communication with the item owner. I did however need to change my plan so that I could achieve an MVP product. 
4. Once I was comfortable with the backend functionality, I moved onto setting up the front-end which involved:
	- Building login/register form components that api requests to the back-end database.
	- Building ItemIndex, ItemCard and ItemShow components
	- Creating an UploadItem form which utilised Cloudinary
	- Message forms that are linked to the individual items

## Wins & Challenges
### Wins
I was pleased that I was able to implement Cloudinary, a media management service for image uploads which could be used on the front end forms such as users uploading a new item post. 
![screenshot of upload item page on Revive](/assets/send-message.png)
```js, xml
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
```

### Challenges
This was a challenging project for me as I wanted to really understand how the back-end of a relational database worked. Initially I wanted to create threads of messages between 2 users so that I could build a front-end UI for this. Whilst I did not manage to complete this, users are able to send messages that a related to the item and I do intend to review this once the course is completed.

## Future features
I spent a significant chunk of time working on the back-end and I would like to continue to build out the front-end utilising some of the features such as:
- User profile:
  - User profile image
  - View my posts
  - View my messages
  - Delete an item
- Improve the front-end UI by adding features such as modals.

I would also like to add features such as:
- User ratings/feedback.
- Archive an item once gifted.
- Extend the messaging function to incorporate threads and  two-way communication between users.
- Implement user locations with Mapbox.
- Extend image upload functionality to allow multiple images on an item.
