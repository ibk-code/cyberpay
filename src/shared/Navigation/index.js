import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <React.Fragment>
      <Container>
        <Navbar
          expand="lg"
          brand="light"
          className="navigation align-items-end"
          // fixed="top"
        >
          <Navbar.Brand href="/">
            <span className="white">Cyberpay</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navigation" />
          <Navbar.Collapse
            id="navigation"
            className="align-items-baseline justify-content-end"
          >
            <Nav as="ul">
              <li>
                <Nav.Link href="/">Integration</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/">Documentation</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/">Pricing</Nav.Link>
              </li>
              <li>
                <div className="reg-wrap">
                  <Link to="/">Log In</Link>
                  <Link to="/" className="signup-btn">
                    SignUp
                  </Link>
                </div>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </React.Fragment>
  )
}

export default Navigation
