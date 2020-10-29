import React from 'react'
import { Container, Row } from 'react-bootstrap'

import ItemsCard from './ItemsCard'
import { getAllItems } from '../../lib/api'


class ItemsIndex extends React.Component {
  state = {
    items: null
  }

  async componentDidMount() {
    const response = await getAllItems()
    this.setState({
      items: response.data
    })
    console.log(response.data)
  }

  render() {
    if (!this.state.items) return null
    return (
      <Container className="itemcard-wrapper" fluid>
        <Row >
          {(this.state.items).map(item => (
            <ItemsCard
              key={item.id}
              {...item} />
          ))}
        </Row>
      </Container>
    )
  }
}

export default ItemsIndex