import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
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
              I am an analytical and detail-oriented
              <i><b className="purple"> Data Analyst </b></i>
              based in Mumbai, India, with hands-on experience in data cleaning, transformation, and visualization.
              <br /><br />
              I am proficient in
              <i><b className="purple"> Python, SQL, Excel, and Power BI </b></i>
              — and I enjoy turning raw data into meaningful insights that drive business decisions.
              <br /><br />
              My key areas of interest include
              <i><b className="purple"> Data Visualization, Business Intelligence, </b></i>
              and building interactive dashboards that tell compelling data stories.
              <br /><br />
              I hold an
              <b className="purple"> M.Sc in Data Science </b>
              from KES Shroff College, Mumbai with a GPA of 9.25, and I am currently working as a
              <b className="purple"> Senior Executive – Content Operations </b>
              at JustDial Ltd.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div style={{ width: "250px", height: "250px", borderRadius: "50%", background: "linear-gradient(135deg, #c770f0, #6d20c5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "6em", margin: "auto" }}>
                👨‍💻
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>Feel free to <span className="purple">connect </span>with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/Vinit3105" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/vinittiwari3105" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/vinitt._/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillInstagram />
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