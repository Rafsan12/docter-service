import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './header.css'
import logo from "../../../src/a_11/logo.jpg"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  signOut } from 'firebase/auth';

const Header = () => {
  const [user]= useAuthState(auth)

  const handleSingOut= () =>{
    signOut(auth)

  }
    return (
<div >
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img style={{width:"50px"}} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      
          <Nav>
          <Nav.Link as={Link} to="home">Home</Nav.Link>
          <span className="text-white">{user?.email}</span>
          { user?
             <button onClick={handleSingOut}>Sing Out</button>
             :
             <Nav.Link as={Link} to="login">Login</Nav.Link>}
             <Nav.Link as={Link} to="about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;