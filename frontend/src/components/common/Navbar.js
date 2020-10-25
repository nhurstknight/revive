import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

import { logoutID, logoutToken, isAuthenticated } from '../../lib/auth'


const NavBar = () => {

  const handleLogout = () => {
    logoutID()
    logoutToken()
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Navbar.Brand href="#home">REVIVE</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/items">Items</Nav.Link>
          { !isAuthenticated() && <Nav.Link href="/register">Register</Nav.Link> }
          { !isAuthenticated() && <Nav.Link href="/login">Login</Nav.Link>}
          { isAuthenticated() && <Nav.Link href="/" onClick={handleLogout}>Logout</Nav.Link> }
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default NavBar