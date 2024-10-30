import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import youtube from "../../Assets/Projects/youtube.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";


import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E Commerce"
              description="Developed a full-stack e-commerce web application using the MERN stack that is fully functional."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website"
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              title="Youtube Summaries"
              description="Developed a machine learning-based model to automatically generate concise summaries of YouTube videos by processing their transcripts"
              ghLink="#"
              demoLink="#"
            />
          </Col>

         
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
