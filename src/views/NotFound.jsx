import React, {Component, Fragment} from 'react';

class NotFound extends Component{
  componentDidMount(){
    document.title = 'Not found';
  }
  render(){
    return(
      <Fragment className="container">
        <div className="row">
          <div className="m-auto">
            <h2>404 NOT FOUND!</h2>
            <p>Sorry !!! what you are looking for is not here</p>
          </div>
        
        </div>
      </Fragment>
    );
  }
}

export default NotFound;
