import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  ProjectCard  from "./ProjectsCard";
import projImg1 from "../assets/img/immo_project.png";
import projImg2 from "../assets/img/projet_pays.png";
import projImg3 from "../assets/img/react_movies.png";
import projImg4 from "../assets/img/shope.png";
// // import colorSharp2 from "../assets/img/color-sharp2.png";
// // import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
   const projects = [
     {
      title: "Immo project",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Projet Pays",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "React movies",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Shope projet react",
      description: "Design & Development",
      imgUrl: projImg4,
    },

   ];

  return (
    <section className="project" id="project">
      <div>
        <h1>Mes projets</h1>
      </div>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  Dans cette section, vous pourrez découvrir une sélection de mes projets professionnels les plus importants. 
                  Ces projets reflètent mes compétences en matière de design et de développement, 
                  ainsi que ma capacité à travailler en équipe et à mener à bien des projets. 
                  J'espère que vous prendrez plaisir à en découvrir davantage à leur sujet.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right"></img> */}
    </section>
  )
}

export default Projects;