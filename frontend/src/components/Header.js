import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
    <Navbar  bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Nasabah App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Nasabah Data</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/transactions">
              <Nav.Link>Transactions</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/check-points">
              <Nav.Link>Check Points</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/print-report">
              <Nav.Link>Print Report</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    )
};

export default Header;