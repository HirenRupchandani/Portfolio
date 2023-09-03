import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
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
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with <b className="purple">computers, programming</b>, and <b className="purple">data </b> and I have at least learnt
              to grow with them.
              <br />
              <br />I am fluent in technologies like
              <i>
                <b className="purple"> Python</b></i> and its vast libraries such as 
                <i><b className="purple"> Django, Flask, Numpy, Pandas, Matplotlib</b></i> as well as database and web technologies like <i><b className="purple">MySQL, HTML, CSS,</b></i> and<i><b className="purple"> Javascript. </b></i>
              
              <br />
              <br />
              My field of Interest's are building new 
              <i>
                <b className="purple"> Web Technologies </b> and
                <b className="purple"> Data Science </b>
              </i>
               Products.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">
              <i>Python</i></b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Django, Flask, and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
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
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFileText />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rupchandanihiren@gmail.com"
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
