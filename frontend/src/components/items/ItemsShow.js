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
    // const { username } = this.state.item.owner
    if (!this.state.item && !this.state.item.owner) return null
    return ( 
      <>
        <Container className="indexshow">
          <Image className="indexshow-img" src={ image }/>
          <Container>
            <h2>{ title }</h2>
            <h4>{`User: ${ this.state.item.owner.username }`}</h4>
            <p>{ description }</p>
            <h2>Interested in this item?</h2>
            <Link to={`/threads/${id}`}>
              <Button>Enquire</Button>
            </Link>
          </Container>
        </Container>

      </>
    )
  }
}

export default ItemsShow