import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar1" />
            </Tilt>
          </Col>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15, paddingTop: 100 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm 
                <strong className="main-name"> Hiren Rupchandani</strong>
                </h1>
              <div style={{ padding: 50, textAlign: "left" }}></div>
              <h1 className="heading-name">I'm a </h1>
              <div style={{ padding: 0, textAlign: "left", paddingLeft: 43 }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
