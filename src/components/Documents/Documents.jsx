import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";

function Documents() {
  const documents = [
    {
      title: "Resume",
      description: "My complete resume including work experience, education, and skills as a Data Analyst.",
      icon: "📄",
      file: "/Vinit_Tiwari_Resume.pdf",
      color: "#c770f0",
    },
    {
      title: "Cover Letter",
      description: "My professional cover letter for Data Analyst roles highlighting my strengths and goals.",
      icon: "✉️",
      file: "/Vinit_Tiwari_Cover_Letter.pdf",
      color: "#f0a500",
    },
    {
      title: "AI and Automation in MS Excel",
      description: "Certification in AI and Automation tools within Microsoft Excel for data processing.",
      icon: "📊",
      file: "/Excel_Certification.pdf",
      color: "#00c896",
    },
    {
      title: "Business Intelligence Using Power BI",
      description: "Certification in Business Intelligence and interactive dashboard creation using Power BI.",
      icon: "📈",
      file: "/PowerBI_Certification.pdf",
      color: "#f5a623",
    },
  ]

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Documents</strong>
        </h1>
        <p style={{ color: "white" }}>Download or view my resume, cover letter, and certifications.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {documents.map((doc) => (
            <Col md={5} className="project-card" key={doc.title}>
              <div className="project-card-view" style={{ padding: "30px", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "4em", marginBottom: "15px" }}>{doc.icon}</div>
                <h4 style={{ color: doc.color, marginBottom: "10px" }}>{doc.title}</h4>
                <p style={{ color: "#b0b0b0", marginBottom: "20px", fontSize: "0.95em" }}>{doc.description}</p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                  <Button variant="primary" href={doc.file} download>
                    <AiOutlineDownload /> &nbsp;Download
                  </Button>
                  <Button variant="primary" href={doc.file} target="_blank">
                    <AiOutlineEye /> &nbsp;View
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Documents;