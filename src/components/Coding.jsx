import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faGit,
  faSass,
  faJs,
  faReact,
  faNode
} from '@fortawesome/free-brands-svg-icons';
import {faBold} from '@fortawesome/free-solid-svg-icons';
const Coding = (props) => (<Fragment>
  <div className="container-markting container">

    <h2 className="h1 text-center mb-2">Languages | Frameworks | Environments</h2>
    <div className="row">
      <div className="col-lg-3 col-md-6 p-1 text-center">
        {/* <img className="img rounded-circle" alt="html" width="150" height="150"/> */}
        <FontAwesomeIcon icon={faHtml5} className="text-warning display-4"/>
        <h3 className="text-center ">HTML
        </h3>

      </div>

      <div className="col-lg-3 col-md-6 p-1 text-center">
        {/* <img className="img rounded-circle" src="images/css.jpg" alt="css" width="150" height="150"/> */}
        <FontAwesomeIcon icon={faCss3} className="text-primary display-4"/>
        <h3 className="text-center">CSS
        </h3>

      </div>

      <div className="col-lg-3 col-md-6 p-1 text-center">
        {/* <img className="img rounded-circle" src="images/github.jpg" alt="github" width="150" height="150"/> */}
        <FontAwesomeIcon icon={faGit} className="display-4"/>
        <h3 className="text-center ">Git
        </h3>

      </div>

      <div className="col-lg-3 col-md-6 p-1 text-center">
        {/* <img className="img rounded-circle" src="images/bootstrap.jpg" alt="bootstrap" width="150" height="150"/> */}
        <FontAwesomeIcon icon={faBold} color="purple" className="display-4"/>
        <h3 className="text-center ">Bootstrap</h3>

      </div>

      <div className="col-lg-3 col-md-6 p-1 text-center">
        {/* <img className="img rounded-circle" src="images/sass.jpg" alt="sass" width="150" height="150"/> */}
        <FontAwesomeIcon icon={faSass} className="text-danger display-4"/>
        <h3 className="text-center ">Sass
        </h3>

      </div>

      <div className="col-lg-3 col-md-6 p-1 text-center">
        {/* <img className="img rounded-circle" src="images/js.jpg" alt="javascript" width="150" height="150"/> */}
        <FontAwesomeIcon icon={faJs} className="text-warning display-4"/>
        <h3 className="text-center ">Javascript
        </h3>

      </div>

      <div className="col-lg-3 col-md-6  text-center">
        {/* <img className="img rounded-circle" src="images/js.jpg" alt="javascript" width="150" height="150"/> */}
        <FontAwesomeIcon icon={faReact} className="text-primary display-4"/>
        <h3 className="text-center ">React.js
        </h3>

      </div>
      <div className="col-lg-3 col-md-6  text-center">
        {/* <img className="img rounded-circle" src="images/js.jpg" alt="javascript" width="150" height="150"/> */}
        <FontAwesomeIcon icon={faNode} className="text-primary display-4"/>
        <h3 className="text-center ">Node.js
        </h3>

      </div>
    </div>
  </div>
</Fragment>);

export default Coding;
