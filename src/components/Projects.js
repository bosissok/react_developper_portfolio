import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";
import { projects } from "./Data";
import TrackVisibility from "react-on-screen";
import { useState } from "react";
import Overlay from "./Overlay";
import Modal from "./Modal";

const Projects = () => {
  const [openModals, setOpenModals] = useState(
    Array(projects.length).fill(false)
  );

  const handleOpenModal = (index) => {
    const newOpenModals = [...openModals];
    newOpenModals[index] = true;
    setOpenModals(newOpenModals);
  };

  const handleCloseModal = (index) => {
    const newOpenModals = [...openModals];
    newOpenModals[index] = false;
    setOpenModals(newOpenModals);
  };

  return (
    <section className="project" id="project">
      <div></div>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Dans cette section, vous pourrez découvrir une sélection de
                    mes projets professionnels les plus importants. Ces projets
                    reflètent mes compétences en matière de design et de
                    développement, ainsi que ma capacité à travailler en
                    autonomie et à mener à bien des projets. J'espère que vous
                    prendrez plaisir à en découvrir davantage à leur sujet.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <>
                                <ProjectsCard
                                  open={() => handleOpenModal(index)}
                                  key={project.id}
                                  data={project}
                                  index={index}
                                />
                                {openModals[index] && (
                                  <Overlay
                                    close={() => handleCloseModal(index)}
                                  >
                                    {
                                      <Modal
                                        data={project}
                                        close={() => handleCloseModal(index)}
                                      />
                                    }
                                  </Overlay>
                                )}
                              </>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
