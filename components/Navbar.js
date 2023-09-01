import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types'

function Skills(props) {
  let mystyle = {
    backgroundColor: 'black',
   
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg" style={mystyle}>
      <Container my-3>
        <Navbar.Brand href="#home" style={{ color: 'lightgreen', fontSize: '24px', fontWeight: 'bold', border: '3px solid lightblue ', padding: '5px', borderRadius: '6px' }}>
          {props.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor: 'white' }} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* Use Link component to navigate */}
            <Nav.Link as={Link} to="/Home" style={{ fontWeight: 'bold', color: 'white' }}>
             Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Project" style={{ fontWeight: 'bold', color: 'white' }}>
            Project
            </Nav.Link>
            <Nav.Link as={Link} to="/Skills" style={{ fontWeight: 'bold', color: 'white' }}>
            Skills
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Achievements" style={{ fontWeight: 'bold', color: 'white' }}>
              Achievements
            </Nav.Link>
            <Nav.Link as={Link} to="/About" style={{ fontWeight: 'bold', color: 'white' }}>
              About me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Prop types and default props...

export default Skills;