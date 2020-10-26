import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemsCard = ({ id, title, image }) =>  {

  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Image src={ image }></Image>
        {/* <Card.Text>
          { description }
        </Card.Text> */}
        <Link to={`/items/${id}`}>
          <Button>View Listing</Button>
        </Link>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  )
}

export default ItemsCard