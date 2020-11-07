import React from 'react'
import { Jumbotron, Container, Image, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// import reviveLogo from '../../media/revive-logo.gif'
import search from '../../media/search.png'
import message from '../../media/message.png'
import collect from '../../media/collect.png'

const Home = () => {
  return (
    <>
      <Jumbotron fluid className="about"> 
        <h1>Using Revive is simple</h1>
        <Container fluid className="about-media-wrapper">
          <Row>
            <Col xs={12} md={4}>
              <Image classname="about-media" src={ search } thumbnail />
            </Col>
            <Col xs={12} md={4}>
              <Image classname="about-media" src={ message } thumbnail />
            </Col>
            <Col xs={12} md={4}>
              <Image classname="about-media" src={ collect} thumbnail />
            </Col>
          </Row>
        </Container>


        <Container className="about-btn-div">
          <Link to="/items">
            <Button>Browse</Button>
          </Link>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Home