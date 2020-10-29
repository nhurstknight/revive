/* eslint-disable camelcase */
import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// eslint-disable-next-line camelcase
const ItemsCard = ({ id, title, image }) =>  {

  return (
    <Card className="itemcard">
      <Card.Header>{ title }</Card.Header>
      <Card.Body>
        <Image className="itemcard-img" src={ image }></Image>
        <Link to={`/items/${ id }`}>
          <Button block className="itemcard-btn">View Listing</Button>
        </Link>
      </Card.Body>
      {/* <Card.Footer>
        <p>{created_at}</p>
      </Card.Footer> */}
    </Card>
  )
}

export default ItemsCard