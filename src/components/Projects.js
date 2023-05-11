import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";
import { projects } from "./Data";
import TrackVisibility from "react-on-screen";
import { useState } from "react";
import Overlay from "./Overlay";
import Modal from "./Modal";
import "../styles/Projects.css";

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

  // const handleOpenModal = (index) => {
  //   setOpenModals(openModals.map((val, i) => (i === index ? true : val)));
  // };

  // const handleCloseModal = (index) => {
  //   setOpenModals(openModals.map((val, i) => (i === index ? false : val)));
  // };

  const getProjectsByCategory = (category) => {
    let filteredProjects = projects;
    if (category !== "All") {
      filteredProjects = projects.filter(
        (project) => project.category === category
      );
    }

    // useEffect(() => {
    //   getProjectsByCategory("All");
    // }, []);

    return filteredProjects.map((project, index) => (
      <>
        <ProjectsCard
          open={() => handleOpenModal(index)}
          key={project.id}
          data={project}
          index={index}
        />

        {openModals[index] && (
          <Overlay close={() => handleCloseModal(index)}>
            {<Modal data={project} close={() => handleCloseModal(index)} />}
          </Overlay>
        )}
      </>
    ));
  };

  const allProjects = getProjectsByCategory("All");
  const reactProjects = getProjectsByCategory("react");
  const nodeJsProjects = getProjectsByCategory("nodeJs");

  return (
    <section className="project" id="project">
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
                  <Tab.Container id="projects-tabs" defaultActiveKey="All">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="All">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="react">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">nodeJs</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="All">
                        <Row>{allProjects}</Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="react">
                        <p>Projets React</p>
                        <Row>{reactProjects}</Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Projets nodeJs</p>
                        <Row>{nodeJsProjects}</Row>
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
