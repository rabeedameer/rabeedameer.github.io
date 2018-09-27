//external
import React, {Component, Fragment} from 'react';
import {Badge} from 'reactstrap';
//internal
import projects from "../Projects.json"


class Project extends Component{
  componentDidMount(){
    const {id} = this.props.match.params;
    const project = projects[id] || {};

    document.title = `${project.title} | Rabee's portfolio`;
  }
  render(){
    const {id} = this.props.match.params;
    const project = projects[id] || {};
    return(
      <div className="container-fluid">
        <div className="m-auto">
          <Fragment>
            <h2>{project.title}</h2>
            <div className="justify-content-center">
            <img src={project.imageUrl}
              width="50%" alt={project.title}/>
            <p>{project.description}</p>
            </div>
            <div>{project.tags.map(tag =>(
              <Badge key={tag} color="#bf9a9d" className="btn btn-secondary m-1">
                {tag}
              </Badge>
            ))}</div>
            <a href={project.projectUrl}className="btn btn-success" >See it online!</a>
          </Fragment>
        </div>
      </div>
      );
  }
}

export default Project;
