import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { logoutID, logoutToken, isAuthenticated } from '../../lib/auth'

const user = <FontAwesomeIcon icon={faUserCircle} />

const NavBar = () => {

  const handleLogout = () => {
    logoutID()
    logoutToken()
  }

  return (
    <Navbar collapseOnSelect expand="lg"className="navbar">
      <Navbar.Brand href="/">REVIVE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/items">Items</Nav.Link>
          <NavDropdown title={user} id="collasible-nav-dropdown">
            { !isAuthenticated() && <NavDropdown.Item href="/register">Sign Up</NavDropdown.Item> }
            { !isAuthenticated() && <NavDropdown.Divider /> }
            { !isAuthenticated() && <NavDropdown.Item href="/login">Login</NavDropdown.Item> }
            {/* { isAuthenticated() && <NavDropdown.Item href="#action/3.2">My account</NavDropdown.Item> } */}
            {/* { isAuthenticated() && <NavDropdown.Divider /> } */}
            { isAuthenticated() && <NavDropdown.Item href="/upload">Upload Item</NavDropdown.Item> }
            { isAuthenticated() && <NavDropdown.Divider /> }
            { isAuthenticated() && <NavDropdown.Item href="/" onClick={handleLogout}>Logout</NavDropdown.Item> }
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar