import React from 'react';
import SocialMedia from './SocialMedia.jsx';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">ComputeBox</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight>
            <SocialMedia />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBarComponent;
