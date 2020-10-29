import React from 'react'
import { Container, Image, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import reviveLogo from '../../media/revive-logo.gif'
import search from '../../media/search.png'
import message from '../../media/message.png'
import collect from '../../media/collect.png'

const Home = () => {
  return (
    <>
      <Container fluid className="home-hero">
        <Image src={ reviveLogo }></Image>
      </Container>
      <Container fluid className="about"> 
        <Row>
          <Col >
            <Image src={ search } thumbnail />
          </Col>
          <Col >
            <Image src={ message } thumbnail />
          </Col>
          <Col >
            <Image src={ collect} thumbnail />
          </Col>
        </Row>
        <Link to="/items">
          <Button>Browse</Button>
        </Link>
      </Container>
    </>
  )
}

export default Home