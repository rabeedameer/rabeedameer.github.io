import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from './views/Home';
import About from './views/About';
import ProjectsList from './views/ProjectsList';
import NotFound from './views/NotFound';
import Contact from './views/Contact';
import Project from './views/Project';


import Header from './components/Header';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Fragment>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projectslist" component={ProjectsList} />
              <Route  path="/projectslist/:id" component={Project}/> {/*added the path as a param */}
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
