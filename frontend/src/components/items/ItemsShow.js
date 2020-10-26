import React from 'react'
import { Button, Container, Image, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getSingleItem } from '../../lib/api'

class ItemsShow extends React.Component {

  state = {
    item: null,
    formData: {
      id: '',
      message: ''
    }
  }

  async componentDidMount() {
    const itemId = this.props.match.params.id
    console.log('params', this.props.match.params)
    const response = await getSingleItem(itemId)
    this.setState({
      item: response.data, 
      id: response.data
    })
    console.log(response.data)
  }


  // handleChange = event => {
  //   const formData = {
  //     ...this.state.formData,
  //     [event.target.name]: event.target.value
  //   }
  //   this.setState({ formData })
  // }
  
  // handleSubmit = async event => {
  //   event.preventDefault()
  //   try {
  //     const response = await sendMessage(this.state.formData)
  //     console.log(response)
  //     this.props.history.push('/')
  //   } catch (err) {
  //     console.log(err.response)
  //     this.setState({ errors: err.response.data.errors })
  //   }
  // }


  render() {
    if (!this.state.item) return null
    return ( 
      <>
        <Container fluid>
          <h1>Shop with us</h1>
        </Container>
        <Container>
          <Col xs={1} m={6}>
            <Image className="beans-show-img" src={ this.state.item.image }/>
          </Col>
          <Col xl={6}>
            <div className="beans-show-info">
              <div className="beans-show-title">
                <h2>{ this.state.item.title }</h2>
              </div>
              <div className="beans-show-subtitle">
                <h4>{ this.state.item.description }</h4>
              </div>
            </div>
            <Link to={`/items/${this.state.item.id}/message`}>
              <Button item={ this.state.item.id }>Enquire</Button>
            </Link>
          </Col>
        </Container>
        {/* <Container>
          <Form onSubmit={ this.handleSubmit }>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" rows={10}
                type="message" 
                name="message" 
                placeholder="Enter message to the post owner" 
                value={ this.state.formData.message } 
                onChange={ this.handleChange }
              />
              <Form.Text className="text-muted">
                300 characters max
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container> */}
      </>
    )
  }
}

export default ItemsShow