import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";

function About() {
  const skills = [
    { name: "Python", emoji: "🐍", color: "#3776AB" },
    { name: "MySQL", emoji: "🗄️", color: "#4479A1" },
    { name: "Excel", emoji: "📊", color: "#217346" },
    { name: "Power BI", emoji: "📈", color: "#F2C811" },
    { name: "Tableau", emoji: "📉", color: "#E97627" },
    { name: "Web Scraping", emoji: "🕷️", color: "#c770f0" },
    { name: "Reporting", emoji: "📋", color: "#00c896" },
    { name: "Pandas", emoji: "🐼", color: "#150458" },
    { name: "Numpy", emoji: "🔢", color: "#013243" },
    { name: "Matplotlib", emoji: "📉", color: "#11557c" },
    { name: "Seaborn", emoji: "🌊", color: "#4c72b0" },
    { name: "Machine Learning", emoji: "🤖", color: "#FF6F00" },
  ]

  const tools = [
    { name: "Jupyter Notebook", emoji: "📓", color: "#F37626" },
    { name: "Spyder", emoji: "🕷️", color: "#FF0000" },
    { name: "VS Code", emoji: "💻", color: "#007ACC" },
    { name: "Git", emoji: "🔀", color: "#F05032" },
    { name: "GitHub", emoji: "🐙", color: "#181717" },
  ]

  const hobbies = [
    { name: "Playing Cricket", emoji: "🏏" },
    { name: "Mobile Gaming", emoji: "🎮" },
    { name: "Trekking", emoji: "🏔️" },
    { name: "Exploring New Places", emoji: "🗺️" },
  ]

  const experiences = [
    { role: "Senior Executive – Database Operations", company: "JustDial Ltd.", period: "Apr 2025 – Present", type: "💼 Work", color: "#c770f0", points: ["Manage and streamline data-driven processes across verticals.", "Extract and manipulate large datasets from MySQL for operational reports.", "Develop Excel dashboards with pivot tables, charts, and advanced formulas.", "Automate recurring tasks and data extraction using Python."] },
  ]

  const internships = [
    { role: "ESG Intern", company: "Gist Advisory Pvt. Ltd.", period: "Nov 2024 – Mar 2025", color: "#00c896", points: ["Analyzed financial and non-financial KPIs for ESG assessments.", "Utilized Microsoft Excel to clean and analyze datasets."] },
    { role: "Data Analyst Intern", company: "Quantam Rental Solutions Pvt. Ltd.", period: "Jul 2024 – Sep 2024", color: "#f0a500", points: ["Cleaned and transformed large datasets using Excel.", "Designed interactive dashboards using Power BI and Excel."] },
    { role: "Data Analyst Intern", company: "Clairifier Ecobreath Technologies", period: "Feb 2024 – Mar 2024", color: "#f0a500", points: ["Analyzed complex datasets to extract business insights.", "Utilized SQL for data cleaning and transformation."] },
  ]

  return (
    <Container fluid className="home-about-section">
      <Particle />
      <Container>

        {/* Header */}
        <Row style={{ paddingBottom: "50px" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2.6em", color: "white", paddingTop: "20px" }}>
              About <span className="purple">Me</span>
            </h1>
            <p style={{ color: "#b0b0b0", fontSize: "1.1em", maxWidth: "700px", margin: "0 auto" }}>
              Analytical and detail-oriented Data Analyst from Mumbai, passionate about turning raw data into meaningful business insights.
            </p>
          </Col>
        </Row>

        {/* Image + Bio Row */}
        <Row style={{ paddingBottom: "60px", alignItems: "center" }}>
          <Col md={5} style={{ display: "flex", justifyContent: "center", paddingBottom: "30px" }}>
            <img src="/about-main.png" alt="Data Analyst" style={{ width: "100%", maxWidth: "480px", filter: "drop-shadow(0 0 30px rgba(199,112,240,0.4))" }}/>
          </Col>

          <Col md={7}>
            <div style={{ color: "white", paddingLeft: "20px" }}>
              <h2 style={{ color: "#c770f0", marginBottom: "20px" }}>Vinit Ramesh Tiwari</h2>
              <p style={{ color: "#b0b0b0", fontSize: "1.05em", lineHeight: "1.8" }}>
                I am a passionate <b style={{ color: "#c770f0" }}>Data Analyst</b> from Mumbai, India with a strong foundation in data cleaning, transformation, and visualization. I hold an <b style={{ color: "#c770f0" }}>M.Sc in Data Science</b> from KES Shroff College,Kandivali with a GPA of 9.25.
              </p>
              <p style={{ color: "#b0b0b0", fontSize: "1.05em", lineHeight: "1.8", marginTop: "15px" }}>
                I specialize in turning complex datasets into clear, actionable insights using tools like <b style={{ color: "#c770f0" }}>Python, SQL, Excel, and Power BI</b>. I enjoy building interactive dashboards and automating data workflows to solve real business problems.
              </p>
              <div style={{ marginTop: "20px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <div style={{ background: "rgba(199,112,240,0.1)", border: "1px solid #c770f0", borderRadius: "10px", padding: "12px 20px", textAlign: "center" }}>
                  <p style={{ color: "#c770f0", fontSize: "1.6em", fontWeight: "700", margin: 0 }}>2+</p>
                  <p style={{ color: "#b0b0b0", fontSize: "0.85em", margin: 0 }}>Years Experience</p>
                </div>
                <div style={{ background: "rgba(199,112,240,0.1)", border: "1px solid #c770f0", borderRadius: "10px", padding: "12px 20px", textAlign: "center" }}>
                  <p style={{ color: "#c770f0", fontSize: "1.6em", fontWeight: "700", margin: 0 }}>1</p>
                  <p style={{ color: "#b0b0b0", fontSize: "0.85em", margin: 0 }}>Job</p>
                </div>
                <div style={{ background: "rgba(199,112,240,0.1)", border: "1px solid #c770f0", borderRadius: "10px", padding: "12px 20px", textAlign: "center" }}>
                  <p style={{ color: "#c770f0", fontSize: "1.6em", fontWeight: "700", margin: 0 }}>3</p>
                  <p style={{ color: "#b0b0b0", fontSize: "0.85em", margin: 0 }}>Internships</p>
                </div>
                <div style={{ background: "rgba(199,112,240,0.1)", border: "1px solid #c770f0", borderRadius: "10px", padding: "12px 20px", textAlign: "center" }}>
                  <p style={{ color: "#c770f0", fontSize: "1.6em", fontWeight: "700", margin: 0 }}>4</p>
                  <p style={{ color: "#b0b0b0", fontSize: "0.85em", margin: 0 }}>Projects</p>
                </div>
                <div style={{ background: "rgba(199,112,240,0.1)", border: "1px solid #c770f0", borderRadius: "10px", padding: "12px 20px", textAlign: "center" }}>
                  <p style={{ color: "#c770f0", fontSize: "1.6em", fontWeight: "700", margin: 0 }}>9.25</p>
                  <p style={{ color: "#b0b0b0", fontSize: "0.85em", margin: 0 }}>M.Sc GPA</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Experience */}
        <Row style={{ paddingBottom: "50px" }}>
          <Col md={12}>
            <h2 style={{ color: "white", fontSize: "2em", paddingBottom: "10px" }}>
              💼 Work <span className="purple">Experience</span>
            </h2>
            {experiences.map((exp) => (
              <div key={exp.role} style={{ background: "rgba(199,112,240,0.05)", border: `1px solid ${exp.color}`, borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
                  <div>
                    <h5 style={{ color: exp.color, marginBottom: "4px" }}>{exp.role}</h5>
                    <p style={{ color: "#b0b0b0", marginBottom: 0, fontSize: "0.9em" }}>{exp.company}</p>
                  </div>
                  <span style={{ background: "rgba(199,112,240,0.15)", border: "1px solid #c770f0", color: "#c770f0", padding: "4px 14px", borderRadius: "20px", fontSize: "0.82em", height: "fit-content" }}>{exp.period}</span>
                </div>
                <ul style={{ color: "#d0d0d0", paddingLeft: "20px", marginBottom: 0 }}>
                  {exp.points.map((point, i) => (<li key={i} style={{ paddingBottom: "5px" }}>{point}</li>))}
                </ul>
              </div>
            ))}
          </Col>
        </Row>

        {/* Internships */}
        <Row style={{ paddingBottom: "50px" }}>
          <Col md={12}>
            <h2 style={{ color: "white", fontSize: "2em", paddingBottom: "10px" }}>
              🎓 <span className="purple">Internships</span>
            </h2>
            {internships.map((exp) => (
              <div key={exp.role + exp.company} style={{ background: "rgba(199,112,240,0.05)", border: `1px solid ${exp.color}`, borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
                  <div>
                    <h5 style={{ color: exp.color, marginBottom: "4px" }}>{exp.role}</h5>
                    <p style={{ color: "#b0b0b0", marginBottom: 0, fontSize: "0.9em" }}>{exp.company}</p>
                  </div>
                  <span style={{ background: "rgba(240,165,0,0.15)", border: `1px solid ${exp.color}`, color: exp.color, padding: "4px 14px", borderRadius: "20px", fontSize: "0.82em", height: "fit-content" }}>{exp.period}</span>
                </div>
                <ul style={{ color: "#d0d0d0", paddingLeft: "20px", marginBottom: 0 }}>
                  {exp.points.map((point, i) => (<li key={i} style={{ paddingBottom: "5px" }}>{point}</li>))}
                </ul>
              </div>
            ))}
          </Col>
        </Row>

        {/* Skills */}
        <Row style={{ paddingBottom: "50px" }}>
          <Col md={12}>
            <h2 style={{ color: "white", fontSize: "2em", paddingBottom: "30px" }}>
              🛠️ Technical <span className="purple">Skills</span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              {skills.map((skill) => (
                <div key={skill.name} className="tech-icons" style={{ borderColor: skill.color }}>
                  <span style={{ fontSize: "1.5em", marginRight: "8px" }}>{skill.emoji}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Tools */}
        <Row style={{ paddingBottom: "50px" }}>
          <Col md={12}>
            <h2 style={{ color: "white", fontSize: "2em", paddingBottom: "30px" }}>
              ⚙️ Tools <span className="purple">I Use</span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              {tools.map((tool) => (
                <div key={tool.name} className="tech-icons" style={{ borderColor: tool.color }}>
                  <span style={{ fontSize: "1.5em", marginRight: "8px" }}>{tool.emoji}</span>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Hobbies */}
        <Row style={{ paddingBottom: "60px" }}>
          <Col md={12}>
            <h2 style={{ color: "white", fontSize: "2em", paddingBottom: "30px" }}>
              🎯 <span className="purple">Hobbies</span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              {hobbies.map((hobby) => (
                <div key={hobby.name} style={{ background: "rgba(199,112,240,0.08)", border: "1px solid rgba(199,112,240,0.4)", borderRadius: "24px", padding: "12px 24px", color: "white", fontSize: "1em", display: "flex", alignItems: "center", gap: "10px", transition: "all 0.3s ease", cursor: "default" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "#c770f0"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(199,112,240,0.4)"}>
                  <span style={{ fontSize: "1.4em" }}>{hobby.emoji}</span>
                  <span>{hobby.name}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default About;