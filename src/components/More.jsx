import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase,faThumbsUp,faBook, faGraduationCap,faUser} from '@fortawesome/free-solid-svg-icons';



const More = (props) => (
 <Fragment>
    <div className="container marketing">
      <h2 className="text-center mb-3">More</h2>
      <div className="row">
        <div className="col-lg-3 col-md-6 text-center">
          <FontAwesomeIcon icon={faGraduationCap} className="display-4"/>
          <h3 className="text-center">Education</h3>
         <div>
           <dl>
            <dt>One Year Web development Program</dt>
            <dd>Digital Career Institute 2017-now | Berlin, Germany</dd>
            <dt>Bachelor degree in English literature</dt>
            <dd>Al-Baath University 2004-2011 | Homs, Syria</dd>
          </dl>
         </div> 

      </div>

      <div className="col-lg-3 col-md-6 text-center">
        <FontAwesomeIcon icon={faBriefcase} className="text-success display-4"/>
        <h3>Work Experience</h3>
        <div>
           <dl>
            <dt>Child Care Worker</dt>
            <dd>Diakoniegemeinschaft Bethania e.V. 2016 - now | Berlin, Germany</dd>
            <dt>Distribution Clerk</dt>
            <dd><abbr title="The United Nations Relief and Works Agency for Palestine Refugees" > UNRWA</abbr>&nbsp; 2013-2015 | Hama, Syria</dd>
            <dt>English Language Teacher</dt>
            <dd><abbr title="The United Nations Relief and Works Agency for Palestine Refugees" > UNRWA</abbr>&nbsp; 2011-2013 | Hama, Syria</dd>
           </dl>
         </div>
      </div>
      <div className="col-lg-3 col-md-6 text-center">
        <FontAwesomeIcon icon={faUser} className="text-danger display-4"/>
        <h3 className="">Personal Skills</h3>
        <dl>
          <dt>Good communication skills</dt>
          <dt>Adaptability</dt>
          <dt>Ability to Work Under Pressure</dt>
          <dt>Teamwork</dt>
          <dt>Leadership</dt>
        </dl>

      </div>
      <div className="col-lg-3 col-md-6 text-center">
        <FontAwesomeIcon icon={faBook} className="text-primary display-4"/>
        <h3 className="">Languages</h3>

        <dl>
          <dt>Arabic</dt>
          <dd>Mother Tongue</dd>
          <dt>English</dt>
          <dd>Fluent </dd>
          <dt>German</dt>
          <dd>B2 level </dd>
        </dl>

      </div>
      
    </div>
  </div>
</Fragment>);

export default More