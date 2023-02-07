import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, NavDropdown } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';


import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            DevList
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav className='ml-auto'>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
              <NavDropdown  id="nav-dropdown-dark-example"
              title="Teams"
              >
              <NavDropdown.Item href="/63dfc78c17bff187c7f2ec8a">Team 1</NavDropdown.Item>
              <NavDropdown.Item href="/63e17d9829ae4fb7f71bcf3d">Team 2</NavDropdown.Item>
              <NavDropdown.Item href="/63e17e4e29ae4fb7f71bcf3e">Team 3</NavDropdown.Item>
              <NavDropdown.Item href="/63e17e8129ae4fb7f71bcf3f">Team 4</NavDropdown.Item>
              <NavDropdown.Item href="/63e17ec029ae4fb7f71bcf40">Team 5</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;