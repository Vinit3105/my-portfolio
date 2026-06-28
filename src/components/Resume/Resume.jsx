import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "20px" }}>
          <Button variant="primary" href="/Vinit_Tiwari_Resume.pdf" target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <div style={{ maxWidth: "900px", width: "100%", padding: "0 20px" }}>

            {/* Experience */}
            <div className="resume-left" style={{ paddingRight: "0" }}>
              <h2 style={{ color: "#c770f0", paddingBottom: "20px", borderBottom: "2px solid #c770f0", marginBottom: "30px" }}>Experience</h2>

              <div className="resume" style={{ paddingTop: "0" }}>
                {[
                  { role: "Senior Executive – Database Operations", company: "JustDial Ltd.", period: "Apr 2025 – Present", points: ["Manage and streamline data-driven processes across verticals.", "Extract and manipulate large datasets from MySQL for operational reports.", "Develop Excel dashboards with pivot tables, charts, and advanced formulas.", "Automate recurring tasks and data extraction using Python."] },
                  { role: "ESG Intern", company: "Gist Advisory Pvt. Ltd.", period: "Nov 2024 – Mar 2025", points: ["Analyzed business and geographical segments with key financial KPIs for ESG assessments.", "Collected and interpreted revenue segment data and employee counts.", "Utilized Microsoft Excel to clean and analyze datasets."] },
                  { role: "Data Analyst Intern", company: "Quantam Rental Solutions Pvt. Ltd.", period: "Jul 2024 – Sep 2024", points: ["Cleaned and transformed large datasets using Microsoft Excel.", "Designed interactive dashboards using Power BI and Excel."] },
                  { role: "Data Analyst Intern", company: "Clairifier Ecobreath Technologies", period: "Feb 2024 – Mar 2024", points: ["Analyzed complex datasets to extract meaningful business insights.", "Utilized SQL for data cleaning and transformation tasks."] },
                ].map((exp) => (
                  <div key={exp.role} className="resume-item" style={{ paddingLeft: "25px", marginBottom: "25px", borderLeft: "2px solid #8a49a8", position: "relative" }}>
                    <div style={{ position: "absolute", width: "16px", height: "16px", borderRadius: "50%", left: "-9px", top: "0", background: "#fff", border: "2px solid #8a49a8" }}></div>
                    <div style={{ background: "#5234795d", padding: "8px 15px", display: "inline-block", fontWeight: "600", marginBottom: "10px", fontSize: "0.9em" }}>{exp.period}</div>
                    <h5 style={{ color: "#c770f0" }}>{exp.role}</h5>
                    <p style={{ color: "#b0b0b0", marginBottom: "8px" }}>{exp.company}</p>
                    <ul style={{ paddingLeft: "20px", color: "#d0d0d0" }}>
                      {exp.points.map((point, i) => (<li key={i} style={{ paddingBottom: "5px" }}>{point}</li>))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <h2 style={{ color: "#c770f0", paddingBottom: "20px", borderBottom: "2px solid #c770f0", margin: "40px 0 30px" }}>Education</h2>
              <div className="resume">
                {[
                  { degree: "M.Sc in Data Science", college: "KES Shroff College, Mumbai", year: "April 2024", gpa: "GPA: 9.25" },
                  { degree: "B.Sc in Computer Science", college: "S.D.S.M. College, Mumbai", year: "April 2022", gpa: "GPA: 8.18" },
                ].map((edu) => (
                  <div key={edu.degree} className="resume-item" style={{ paddingLeft: "25px", marginBottom: "25px", borderLeft: "2px solid #8a49a8", position: "relative" }}>
                    <div style={{ position: "absolute", width: "16px", height: "16px", borderRadius: "50%", left: "-9px", top: "0", background: "#fff", border: "2px solid #8a49a8" }}></div>
                    <div style={{ background: "#5234795d", padding: "8px 15px", display: "inline-block", fontWeight: "600", marginBottom: "10px", fontSize: "0.9em" }}>{edu.year}</div>
                    <h5 style={{ color: "#c770f0" }}>{edu.degree}</h5>
                    <p style={{ color: "#b0b0b0" }}>{edu.college}</p>
                    <p style={{ color: "#c770f0", fontWeight: "600" }}>{edu.gpa}</p>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <h2 style={{ color: "#c770f0", paddingBottom: "20px", borderBottom: "2px solid #c770f0", margin: "40px 0 30px" }}>Skills</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", paddingBottom: "30px" }}>
                {["Python", "SQL", "Excel", "Power BI", "Tableau", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Jupyter Notebook", "MySQL", "VS Code"].map((skill) => (
                  <span key={skill} className="tech-icons">{skill}</span>
                ))}
              </div>

              {/* Certifications */}
              <h2 style={{ color: "#c770f0", paddingBottom: "20px", borderBottom: "2px solid #c770f0", margin: "40px 0 30px" }}>Certifications</h2>
              <div className="resume">
                {[
                  { title: "AI and Automation in MS Excel", icon: "📊" },
                  { title: "Business Intelligence Using Power BI", icon: "📈" },
                ].map((cert) => (
                  <div key={cert.title} className="resume-item" style={{ paddingLeft: "25px", marginBottom: "20px", borderLeft: "2px solid #8a49a8", position: "relative" }}>
                    <div style={{ position: "absolute", width: "16px", height: "16px", borderRadius: "50%", left: "-9px", top: "0", background: "#fff", border: "2px solid #8a49a8" }}></div>
                    <h5 style={{ color: "white" }}>{cert.icon} {cert.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "20px" }}>
          <Button variant="primary" href="/Vinit_Tiwari_Resume.pdf" target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;