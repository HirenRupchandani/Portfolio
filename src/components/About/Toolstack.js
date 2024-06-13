import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows11, 
  SiDocker,
  SiDiscord,
  SiMicrosoftteams,
  SiJira,
  SiUbuntu,
  SiPycharm,
  SiLatex,
  SiKubernetes
  
} from "react-icons/si";

import { RiFileExcel2Fill } from "react-icons/ri";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Windows</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Ubuntu</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>MacOS</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Docker</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Kubernetes</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>VS Code</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>PyCharm</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Postman</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFileExcel2Fill />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>MS Excel</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Vercel</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>MS Teams</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Slack</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Discord</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>JIRA</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>LaTeX</span></div>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
