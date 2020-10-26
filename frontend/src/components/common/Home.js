import React from 'react'
import { Container, Image, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import reviveLogo from '../../media/revive-logo.gif'
import search from '../../media/search.gif'
import message from '../../media/message.gif'
import collect from '../../media/collect.gif'

const Home = () => {
  return (
    <>
      <Container>
        <Image src={ reviveLogo }></Image>
      </Container>
      <Container> 
        <Row>
          <Col xs={6} md={4}>
            <Image src={ search } thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={ message } thumbnail />
          </Col>
          <Col xs={6} md={4}>
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