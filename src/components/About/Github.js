import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong>GitHub Statistics</strong>
      </h1>
      <GitHubCalendar
        username="HirenRupchandani"
      />
    </Row>
  );
}

export default Github;
