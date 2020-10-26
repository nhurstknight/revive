import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { logoutID, logoutToken, isAuthenticated } from '../../lib/auth'


const NavBar = () => {
  const user = <FontAwesomeIcon icon={faUserCircle} />


  const handleLogout = () => {
    logoutID()
    logoutToken()
  }

  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center">
      <Navbar.Brand href="#home">REVIVE</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"> */}
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/items">Items</Nav.Link>

        <NavDropdown title={user} id="collasible-nav-dropdown">
          { !isAuthenticated() && <NavDropdown.Item href="/register">Register</NavDropdown.Item> }
          { !isAuthenticated() && <NavDropdown.Divider /> }
          { !isAuthenticated() && <NavDropdown.Item href="/login">Login</NavDropdown.Item> }
          { isAuthenticated() && <NavDropdown.Item href="#action/3.2">My account</NavDropdown.Item> }
          { isAuthenticated() && <NavDropdown.Divider /> }
          { isAuthenticated() && <NavDropdown.Item href="/" onClick={handleLogout}>Logout</NavDropdown.Item> }
        </NavDropdown>
        
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}

export default NavBar