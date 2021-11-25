import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {

    return (
        <div className="header-style">

<Navbar collapseOnSelect expand="lg" className="nav-styling">
  <Container>
  <Navbar.Brand className="navbar-style" to="/home"> <span className="text-white fs-2"> <span className="header-sparkle"> Sparkle </span><span className="header-melody">Melody</span></span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <NavLink activeStyle={{
    fontWeight: "bold",
    color: "brown"
  }} className="nav-style" to="/home">Home</NavLink>
    <NavLink  activeStyle={{
    fontWeight: "bold",
    color: "brown"
  }} className="nav-style" to="/about">About</NavLink>
    <NavLink  activeStyle={{
    fontWeight: "bold",
    color: "brown"
  }} className="nav-style" to="/contact">Contact</NavLink>
    
    </Nav>
    <Nav>
    <NavLink  activeStyle={{
    fontWeight: "bold",
    color: "brown"
  }} className="nav-style" to="/services">Services</NavLink>  
    <NavLink  activeStyle={{
    fontWeight: "bold",
    color: "brown"
  }} className="nav-style" to="/donate">Donate</NavLink>  
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;