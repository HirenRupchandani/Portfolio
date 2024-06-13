import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import myImg2 from "../../Assets/data.png";
import Tilt from "react-parallax-tilt";
import CustomTimeline from "./CustomTimeline";
import {
  AiFillGithub,
  AiFillFileText,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "3em", paddingTop: 100 }}>
              <span className="purple">Let Me Introduce Myself</span>
            </h1>
            <p className="home-about-body">
              I fell in love with computers, programming, and data and I have at least learnt
              to grow with them.
              <br />
              <br />I am fluent in technologies like Python and its vast libraries such as Django, Flask, Numpy, Pandas, Matplotlib, TensforFlow, Keras
              as well as database and web technologies like MySQL, HTML, CSS, andJavascript.
              
              <br />
              <br />
              I love building new Web and Data Products.
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={myImg2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <CustomTimeline />
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on</h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HirenRupchandani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hiren-rupchandani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/Portfolio/articles"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFileText />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hrupchan@iu.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      
    </Container>
    
  );
}
export default Home2;
