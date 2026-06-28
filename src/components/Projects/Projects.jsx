import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I have worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              icon="📊"
              title="Excel Projects"
              tag="Excel"
              description="Customer Demographics & Income Analysis Dashboard and Bike Purchase Behavior Analysis & Sales Dashboard — built using advanced Excel formulas, Pivot Tables, Pivot Charts, and interactive dashboards to uncover key business insights."
              ghLink="https://github.com/Vinit3105/Excel-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon="📈"
              title="Power BI Projects"
              tag="Power BI"
              description="Built interactive dashboards including Data Professional Survey Breakdown, Sample Superstore Dashboard, and Amazon Sales Dashboard to visualize key business metrics and provide actionable insights."
              ghLink="https://github.com/Vinit3105/Power-BI-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon="🗄️"
              title="SQL Projects"
              tag="SQL"
              description="COVID Vaccination Data Cleaning and Exploration — acquired and cleaned COVID-19 vaccination data, addressed inconsistencies, and conducted exploratory data analysis to identify trends in vaccination rates and demographics."
              ghLink="https://github.com/Vinit3105/SQL-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon="🐍"
              title="Python Projects"
              tag="Python"
              description="1️⃣ Prediction and Analysis of Heart Attack — ML models to predict heart attack risk with 85% accuracy analyzing age, cholesterol, and blood pressure. 2️⃣ Data Visualization Using Python — interactive charts and visual insights using Matplotlib and Seaborn."
              ghLink="https://github.com/Vinit3105/python-projects"
              demoLink="https://github.com/Vinit3105/python-projects/blob/main/Data%20Visualization%20Using%20Python.ipynb"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;