import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMsqlServer,
  DiDjango 
} from "react-icons/di";
import {
  SiFirebase,
  SiTableau,
  SiNumpy, 
  SiPandas, 
  SiTensorflow, 
  SiKeras, 
  SiScikitlearn,
  SiMysql,
  SiPostgresql,
  SiPowerbi,
  SiMicrosoftazure,
  SiGooglecloud,
  SiPlotly,
  SiOpencv,
  SiFlask,
  SiScipy ,
  SiPytorch 
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Python</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>MySQL</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>PostgreSQL</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>SQL Server</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>PowerBI</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Tableau</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>C++</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div>
        <span style={{marginTop: '5px', fontSize: '30px'}}>JavaScript</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>React.js</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>MongoDB</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Git</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Firebase</span></div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Java</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>MS Azure</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>GCP</span></div>
      </Col>
      
      <h1 className="project-heading">
          <strong>Python Libraries</strong>
        </h1>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Numpy</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Pandas</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>ScikitLearn</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>TensorFlow</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Keras</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch  />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>PyTorch</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly  />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Plotly</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask  />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Flask</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScipy  />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>SciPy</span></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango  />
        <div><span style={{marginTop: '5px', fontSize: '30px'}}>Django</span></div>
      </Col>
    </Row>
  );
}

export default Techstack;
