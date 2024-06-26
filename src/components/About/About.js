import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Leet from "./Leet";
import gamingImg from "../../Assets/Gaming-amico.svg"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong>About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={gamingImg} alt="about" className="img-fluid" />
            
          </Col>
        </Row>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">LeetCode Progress</strong>
        </h1>
        <Leet />
        <Github />
        <h1 className="project-heading">
          
          <strong className="purple">Professional Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Relevant Tools</strong>
        </h1>
        <Toolstack />
        
      </Container>
    </Container>
  );
}

export default About;
