import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getSingleItem, sendMessage } from '../../lib/api'

class ItemsShow extends React.Component {

  state = {
    item: '',
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
    const { title, image, description, id } = this.state.item
    if (!this.state.item) return null
    return ( 
      <>
        <Container className="itemshow" fluid>
          <Container className="itemshow-title">

            <h1>{ title }</h1>  
          </Container>
          <Container className="itemshow-wrapper">
            <Image className="itemshow-img" src={ image }/>
            <Container className="itemshow-info">
              <h4>{`User: ${ this.state.item.owner.username }`}</h4>
              <p>{ description }</p>
              <h4>Interested in this item?</h4>
              <p>Send { this.state.item.owner.username } a message</p>
              <Link to={`/threads/${id}`}>
                <Button>Enquire</Button>
              </Link>
            </Container>
          </Container>
        </Container>

      </>
    )
  }
}

export default ItemsShow