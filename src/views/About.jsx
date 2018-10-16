//external
import React, {Component, Fragment} from 'react';

//internal
import More from '../components/More';
import Coding from '../components/Coding';

class About extends Component {
  componentDidMount() {
    document.title = 'About | Rabee\'s Portfolio';
  }
  render() {
    return (
    <Fragment>
            <section className="container">
        <h2>About me</h2>
        <p>
          Hi, I’m Rabee Dameer, a junior web developer with teaching and social work experiences. 
        </p>
        <p>
          After leaving my country and moving to Germany in 2015, my life was totally changed and I couldn't start working as a teacher again and also I have seen such a huge upward trend in tech and web development world. So without hesitation, I decided to have a new start with a new challenge. then the opportunity appeared at&nbsp; 
          <abbr title="Digital Carrier Center">DCI </abbr>&nbsp;in Berlin and I could start my first step being a web developer.
        </p>
      </section>
      <More/>
      <Coding/>
    </Fragment>);
  }
};

export default About;
