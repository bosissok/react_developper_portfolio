import React from "react";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
import "../styles/NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon1 from "../assets/img/icons8-linkedin.svg";
import navIcon2 from "../assets/img/icons8-gmail.svg";
import navIcon3 from "../assets/img/icons8-github.svg";

const NavBar = () => {
  // const [activeLink, setActiveLink] = useState("home");

  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  // };
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Collapse className="nav-pills" id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav className="m-auto"> */}
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "active navbar-link nav-link"
                  : "navbar-link nav-link"
              }
              // onClick={() => onUpdateActiveLink("home")}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "active navbar-link nav-link"
                  : "navbar-link nav-link"
              }
              // onClick={() => onUpdateActiveLink("skills")}
            >
              Compétences
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "active navbar-link nav-link"
                  : "navbar-link nav-link"
              }
              // onClick={() => onUpdateActiveLink("projects")}
            >
              Projets
            </NavLink>
          </Nav>

          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/bsissoko90/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon1} alt="linkedin logo" />
            </a>
            <a
              href="mailto:bs.sissoko90@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon2} alt=" gmail logo" />
            </a>
            <a
              href="https://github.com/bosissok/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon3} alt=" github logo" />
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
