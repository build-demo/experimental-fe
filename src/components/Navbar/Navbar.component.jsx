import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.styles.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#home">MENTOR PORTAL FOR UNBLOCK ME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Schedules" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Past Meetings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Upcoming Meetings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                View Schedule
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cancelled Meetings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
