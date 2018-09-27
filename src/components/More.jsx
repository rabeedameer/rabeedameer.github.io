import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
const More = (props) => (<Fragment>
  <div className="container marketing">
    <h2 className="text-center mb-3">More</h2>
    <div className="row">

      <div className="col-lg-3 col-md-6 text-center">
        <FontAwesomeIcon icon={faGraduationCap} className="display-4"/>
        <h3 className="text-center">Education</h3>
        <p className="text-left">Web Development | Digital Career Institute 2017-now | Berlin, Germany.
        </p>
        <p className="text-left">Bachelor degree in English literature | Al-Baath University 2004-2011 | Homs,Syria.
        </p>

      </div>

      <div className="col-lg-3 col-md-6 text-center">
        <FontAwesomeIcon icon={faBriefcase} className="text-success display-4"/>
        <h3>Work Experience</h3>
        <ul className="text-left">
          <li>since<time dateTime="2016">2016</time>&#58; Voluntary work in children care at the B8 Youth Club, Berlin-Moabit</li>
          <li>2013 – 2015: Distribution Team leader at
            <abbr title="The United Nations Relief and Works Agency for Palestine Refugees">UNRWA</abbr>, Hama, Syria</li>
          <li>2011 – 2013: Teacher of English language at
            <abbr title="The United Nations Relief and Works Agency for Palestine Refugees">UNRWA</abbr>, Hama, Syria</li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 text-center">
        <FontAwesomeIcon icon={faThumbsUp} className="text-danger display-4"/>
        <h3 className="">Interests</h3>

        <ul className="text-left">
          <li>Documentaries</li>
          <li>Football</li>
          <li>Youtube videos</li>
        </ul>

      </div>

      <div className="col-lg-3 col-md-6 text-center">
        <FontAwesomeIcon icon={faBook} className="text-primary display-4"/>
        <h3 className="">Languages</h3>

        <ul className="text-left">
          <li>Arabic: Mother language</li>
          <li>English: Fluent</li>
          <li>German: B2</li>
        </ul>

      </div>
    </div>
  </div>
</Fragment>);

export default More;
