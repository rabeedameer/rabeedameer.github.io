import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  componentDidMount() {
    document.title = 'Contact | Rabee\'s Portfolio';
  }
  render() {
    return (<Fragment>
      <main>
        <div className="container markting">
          <div className="row">
            <section className="col-lg-6">
              <h2>Contact information</h2>
              <div className="media">
                <span className="mr-4"><FontAwesomeIcon icon={faPhone}/></span>
               <div className="media-body">
                  <h5 className="mt-0">Call me</h5>
                  <p>Mobile: <span>+49 1766 1543 884</span></p>
               </div>
              </div>
              <div className="media">
                <span className="mr-4"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
               <div className="media-body">
                  <h5 className="mt-0">Where to find me</h5>
                  <p>Address: <span>Reuchlin Str. 2A 10553</span></p>
               </div>
              </div>
              <div className="media">
                <span className="mr-4"><FontAwesomeIcon icon={faEnvelope}/></span>
               <div className="media-body">
                  <h5 className="mt-0">Contact me </h5>
                  <p>E-Mail: <span>rabee.dameer@gmail.com</span></p>
               </div>
              </div>
            </section>
            <form action="https://formspree.io/rabee.dameer@gmail.com" method="POST" className="col-lg-6">

              <h2>Send me a message</h2>
              <div className="form-group">
                <label htmlFor="fname">First name</label>
                <input type="text" name="name" required="required" className="form-control" id="" placeholder="Your name"/>
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last name</label>
                <input type="text" name="lastName" required="required" className="form-control" id="" placeholder="Your last name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" name="_replyTo" required="required" className="form-control" id="email" placeholder="example@email.com"/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message</label>
                <textarea className="form-control" id="message" name="message" rows="3" placeholder="type your message here.."></textarea>
              </div>
              <button type="submit" className="btn btn-secondary btn-sm">Send</button>
            </form>
          </div>
        </div>

      </main>
    </Fragment>);
  }
}

export default Contact;
