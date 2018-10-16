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
