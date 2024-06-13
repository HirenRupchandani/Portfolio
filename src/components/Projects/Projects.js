import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hcdr from "../../Assets/Projects/hcdr.jpeg";
import chatify from "../../Assets/Projects/pdf_assistant.jpg";
import car from "../../Assets/Projects/car.webp";
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
              imgPath={car}
              isBlog={false}
              title="Self-Driving Car"
              description="A Level 2 Autonomous Driving System"
              ghLink="https://github.com/HirenRupchandani/assets/blob/main/Driving_Hands.pdf"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GPT Powered PDF Assistant"
              description="A system that allows you to chat with your PDF"
              ghLink="https://github.com/HirenRupchandani/PDF-Chat"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anomalyfinder}
              isBlog={false}
              title="IntrusionMaster"
              description="A system to detect intrusion in a network  "
              ghLink="https://github.com/HirenRupchandani/IDS"
              demoLink="https://majestic-raindrop-6ce37c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cboard}
              isBlog={false}
              title="CrimsonBoard"
              description="A Learning management system for Indiana University"
              ghLink="https://github.com/HirenRupchandani/LMS"
              demoLink="https://www.youtube.com/watch?v=p9nVGRKm6lI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vgs}
              isBlog={false}
              title="Games Recommendation System"
              description="A System that recommends you video games based on your preferences"
              ghLink="https://github.com/HirenRupchandani/Video-Game-Recommendation-System"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hcdr}
              isBlog={false}
              title="Home Credit Default Risk Prediction"
              description="A solution to predict whether a specific client will repay the home loan they have taken out"
              ghLink="https://github.iu.edu/hrupchan/Home-Credit-Default-Risk"
              demoLink=""
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
