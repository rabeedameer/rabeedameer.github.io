//external
import React from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import {Nav, NavItem, NavLink} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
// internal

const Header = (props) => (<header>

  <nav className="social-media">
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link" href="https://www.linkedin.com/in/rabee-dameer/">
          <FontAwesomeIcon icon={faLinkedin} className="h2 text-muted"/>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="https://facebook.com/rabee.dameer">
          <FontAwesomeIcon icon={faFacebook} className="h2 text-muted"/>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="https://twitter.com/Rabee_Dameer">
          <FontAwesomeIcon icon={faTwitter} className="h2 text-muted"/>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://github.com/rabeedameer">
          <FontAwesomeIcon icon={faGithub} className="h2 text-muted"/>
        </a>
      </li>

    </ul>
  </nav>

  <h1 className="text-white text-center">Rabee Dameer</h1>

  <div>
    <Nav className="justify-content-center">
      <NavItem>
        <NavLink  to="/" tag={RRNavLink}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="/about" tag={RRNavLink}>About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="/projectslist" tag={RRNavLink}>Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="/contact" tag={RRNavLink}>Contact</NavLink>
      </NavItem>
    </Nav>
  </div>
</header>)

export default Header;
