import React, {Component, Fragment} from 'react';

class NotFound extends Component{
  componentDidMount(){
    document.title = 'Not found';
  }
  render(){
    return(
      <Fragment>
        <h2>404 NOT FOUND!</h2>
        <p>Sorry !!! what you are looking for is not here</p>
      </Fragment>
    );
  }
}

export default NotFound;
