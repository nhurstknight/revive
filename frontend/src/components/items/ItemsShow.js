import React from 'react'
import { Button, Container, Image, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getSingleItem, sendMessage } from '../../lib/api'

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
      const itemId = this.props.match.params.id
      console.log(this.props.match.params)
      const response = await sendMessage(itemId, this.state.formData)
      console.log(response)
      this.props.history.push('/')
    } catch (err) {
      console.log(err.response)
      this.setState({ errors: err.response.data.errors })
    }
  }


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
            <Link to={`/threads/${this.state.item.id}`}>
              <Button>Enquire</Button>
            </Link>
          </Col>
        </Container>
      </>
    )
  }
}

export default ItemsShow