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
    return (<Fragment>

      <section className="container">
        <h2>About me</h2>
        <p>Hi, I’m Rabee Dameer. I'm 32 years old and I was born in Hama, Syria. I studied English Literature at
          <a href="http://albaath-univ.edu.sy/" rel="noopener noreferrer" target="_blank"> Al-Baath University
           </a> in Homs and after my graduation, I worked two years as an English language teacher at
          <abbr title="The United Nations Relief and Works Agency for Palestine Refugees">
            UNRWA
          </abbr>
          schools then I started a new job as a distribution clerk and in the same organization.</p>
        <p>
          After leaving my country and moving to Germany in 2015, my life was totally changed and I couldn't start working as a teacher again. So I started new challenges in my new life which are learning the German language and finding a new job. then the opportunity appeared in
          <abbr title="Digital Carrier Center">
            DCI
          </abbr>
          in Berlin and I could start my first step being a web developer.</p>
      </section>
      <More/>
      <Coding/>
    </Fragment>);
  }
};
export default About;
