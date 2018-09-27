//external
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Badge
} from 'reactstrap';
//internal
import projects from "../Projects.json";

class ProjectsList extends Component {
  componentDidMount() {
    document.title = 'Projects | Rabee\'s Portfolio';
  }
  render() {
    return (<Row className="container m-auto">
      {
        projects.map((project, i) => (<Col lg="3" sm="6" xs="12" mt-1="mt-1">
          <Card key={i}>
            <CardBody>
              <CardTitle>
                {project.title}
              </CardTitle>
              <img className="text-center" src={project.thumbnailUrl} width="100%" alt={project.title}/>
            </CardBody>

            <CardBody>
              {
                project.tags.map(tag => (<Badge key={tag} color="#bf9a9d" className="btn btn-secondary m-1">
                  {tag}
                </Badge>))
              }

              <div>
                <Link className="btn btn-success" to={`/projectslist/${i}`}>Go to project</Link>
              </div>
            </CardBody>
          </Card>
        </Col>))

      }

    </Row>);
  }
}

export default ProjectsList;
