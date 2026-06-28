import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <div style={{ fontSize: "3em", textAlign: "center", paddingBottom: "10px" }}>{props.icon}</div>
        <Card.Title style={{ color: "white", textAlign: "center" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "#b0b0b0" }}>{props.description}</Card.Text>
        <div style={{ textAlign: "center" }}>
          <span style={{ background: "rgba(199,112,240,0.15)", border: "1px solid #c770f0", color: "#c770f0", padding: "4px 12px", borderRadius: "20px", fontSize: "0.8em", marginBottom: "15px", display: "inline-block" }}>{props.tag}</span>
        </div>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginRight: "10px" }}>
            <BsGithub /> &nbsp;GitHub
          </Button>
        )}
        {props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;