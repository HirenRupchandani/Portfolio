import React from "react";
import Card from "react-bootstrap/Card";
import { CgGames } from "react-icons/cg";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { GiTechnoHeart, GiGuitar } from "react-icons/gi";
import { RiMovie2Fill } from "react-icons/ri";
import { FaSpaceShuttle } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am Hiren Rupchandani 
            from <span className="purple"> Bloomington, Indiana.</span>
            <br /> I am a Master of Science in Computer Science from Indiana University - Bloomington.
            <br />
            Previously, I have worked as a Data Science Researcher at an Ed-Tech named INSAID (now Accredian).
            <br />
            <br />
            When I am away from building projects and grinding leetcode problems, I indulge myself in some other activities that I love to do!
          </p>
          <span>
          <ul>
            <li className="about-activity">
              <MdOutlineModeOfTravel /> Travelling
            </li>
            <li className="about-activity">
              <CgGames /> Playing Video Games like God of War, Warzone, Red Dead Redemption 2, Spider-Man
            </li>
            <li className="about-activity">
              <FaSpaceShuttle /> Take some pictures of the Moon and appreciate the beauty of the Night Sky
            </li>
            <li className="about-activity">
              <GiGuitar /> Learning how to play a Guitar
            </li>
            <li className="about-activity">
              <GiTechnoHeart /> Listening to Tech Podcasts (WVFRM, WAN Show, Chai Time with Data Science, etc.)
            </li>
            <li className="about-activity">
              <RiMovie2Fill /> Watching some Shows, Movies, or Anime
            </li>
          </ul>
          </span>

          <p style={{ }}>
            I always go with the following quote - <b><i>"Sic Parvis Magna"</i></b> meaning <b><i>"Great things from small beginnings"</i></b>{" "}
          </p>
          <footer className="blockquote-footer">Sir Francis Drake</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
