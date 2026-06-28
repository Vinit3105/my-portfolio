import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Vinit Tiwari</h3>
          <h3 style={{ fontSize: "0.85em", color: "#c770f0" }}>📧 tvinit3105@gmail.com &nbsp;|&nbsp; 📞 +91-8459696073</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} VT</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/Vinit3105" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/vinittiwari3105" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.instagram.com/vinitt._/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;