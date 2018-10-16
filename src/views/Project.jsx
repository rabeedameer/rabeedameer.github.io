//external
import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Badge,
  CardText,
  CardLink
} from 'reactstrap';
//internal
import projects from "../Projects.json"


class Project extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const project = projects[id] || {};

    document.title = `${project.title} | Rabee's portfolio`;
  }
  render() {
    const { id } = this.props.match.params;
    const project = projects[id] || {};
    return (

      <Row className="container m-auto">
        <Col>
          <Card>
            <CardBody>
              <CardTitle>{project.title}</CardTitle>
            </CardBody>
            <img src={project.imageUrl}
              width="100%" alt={project.title} />
            <CardBody>
              <CardText>{project.description}</CardText>

            </CardBody>
            <CardBody>
              {project.tags.map(tag => (
                <Badge key={tag} color="#bf9a9d" className="btn btn-secondary m-1">
                  {tag}
                </Badge>
              ))}
            </CardBody>
            <CardBody>
            <CardLink href={project.projectUrl}><button className="btn btn-success mb-5">See it online</button></CardLink>
            </CardBody>
            
          </Card>
        </Col>

      </Row>

    );
  }
}

export default Project;
