import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hiren Rupchandani </span>
            from <span className="purple"> Bloomington, Indiana.</span>
            <br /> I am a Master of Science in Computer Science from Indiana University - Bloomington.
            <br />
            Previously, I have worked as a Data Science Researcher at an Ed-Tech named INSAID (now Accredian).
            <br />
            <br />
            When I am away from building projects and grinding leetcode problems, I indulge myself in some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning how to play a Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Tech Podcasts (WVFRM, WAN Show, Chai Time with Data Science, etc.)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            I always go with the following quote - <b><i>"Sic Parvis Magna"</i></b> meaning <b><i>"Great things from small beginnings"</i></b>{" "}
          </p>
          <footer className="blockquote-footer">Sir Francis Drake</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
