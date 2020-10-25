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
      // <div>testing</div>
      <Container>
        <Row xs={1} xl={3}>
          {(this.state.items).map(item => (
            <ItemsCard
              key={item._id}
              {...item} />
          ))}
        </Row>
      </Container>
    )
  }
}

export default ItemsIndex