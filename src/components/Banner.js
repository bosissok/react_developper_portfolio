import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderImg from "../assets/img/rocket-astronaut.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <Container
      className="banner owl-carousel owl-theme skill-slider"
      id="#home"
    >
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
          <span className="tagline">Welcome to my portfolio</span>
          <h1>Bonjour, je suis développeur web</h1>
          <p>
            Je suis un développeur autonome, ayant l'esprit d'équipe, rigoureux
            et passionné par les nouvelles technologies. Je saurai mettre à
            profit toutes mes compétences et mes qualités au sein de votre
            entreprise.
          </p>
          <button onClick={() => console.log("connect")}>
            Let's connect <ArrowRightCircle size={25} />
          </button>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <img src={HeaderImg} alt="Header Img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
