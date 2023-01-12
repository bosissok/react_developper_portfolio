import React from 'react';
import  { NavLink }  from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
    return (
      <>
        <Navbar expand="lg" bg="dark" variant="dark"  >
          <Container>
            <Navbar.Collapse href="#home">
            <Nav className="me-auto">
              <NavLink to='/home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar'} onClick={() => onUpdateActiveLink('home')} >Accueil</NavLink>
              <NavLink to='/skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar'} onClick={() => onUpdateActiveLink('skills')} >skills</NavLink>
              <NavLink to='/projects'className={activeLink === 'projects' ? 'active navbar-link' : 'navbar'} onClick={() => onUpdateActiveLink('projects')} >Projects</NavLink>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default NavBar;