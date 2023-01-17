import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import "../styles/NavBar.css";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Collapse className="nav-pills" id="basic-navbar-nav">
          {/* <Nav className="me-auto"> */}
          <Nav className="m-auto">
            <NavLink
              to="/home"
              className={
                activeLink === "home"
                  ? "active navbar-link nav-link"
                  : "navbar-link nav-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/skills"
              className={
                activeLink === "skills"
                  ? "active navbar-link nav-link"
                  : "navbar-link nav-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              skills
            </NavLink>
            <NavLink
              to="/projects"
              className={
                activeLink === "projects"
                  ? "active navbar-link nav-link"
                  : "navbar-link nav-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
