// external
import React, {Component, Fragment} from 'react';

//internal
import myImage from '../images/me.jpg';

class Home extends Component {
  componentDidMount() {
    document.title = 'Home | Rabee\'s Portfolio';
  }
  render() {
    return (<Fragment>
      <main>
        <div className="container markting">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mt-5 display-4">
                JUNIOR FRONT-END WEB DEVELOPER
              </h2>
              <h4>I'm looking for</h4>
          <p>A job that provides opportunity to learn, progress and contribute to the organization. A teamwork-oriented environment in a company that empowers employees to create and take initiatives. A job that my skills are utilized to the maximum and allows me to grow within the organization.</p>
        
            </div>
            <div className="col-lg-4 text-center"><img src={myImage} alt="rabee" width="350" height="350" className="rounded-circle"/>
            </div>
          </div>
        </div>
      </main>
    </Fragment>);
  }
}

export default Home;
