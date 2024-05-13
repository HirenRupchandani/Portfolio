import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import vgs from "../../Assets/Projects/videogamerec.webp";
import anomalyfinder from "../../Assets/Projects/anomalyfinder.jpg"
import cboard from "../../Assets/Projects/crimsonboard.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anomalyfinder}
              isBlog={false}
              title="AnomalyFinder"
              description=""
              ghLink="https://github.iu.edu/hrupchan/IntrusionMaster"
              demoLink="https://majestic-raindrop-6ce37c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cboard}
              isBlog={false}
              title="CrimsonBoard"
              description=""
              ghLink="https://github.iu.edu/hrupchan/SP23_Team22_Learning_Management_System"
              demoLink="https://www.youtube.com/watch?v=p9nVGRKm6lI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vgs}
              isBlog={false}
              title="Video Games' Recommendation System"
              description=""
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Home Credit Default Risk Prediction"
              description=""
              ghLink="https://github.iu.edu/hrupchan/Home-Credit-Default-Risk"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Self-Driving Car"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Good Reads Book Analysis and Recommendation"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
