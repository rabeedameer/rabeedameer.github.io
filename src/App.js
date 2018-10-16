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
            <Route  path='/' component={Home} exact />
              <Route  path='/about' component={About} exact />
              <Route  path='/projectslist' component={ProjectsList} exact />
              <Route  path='/projectslist/:id' component={Project} exact/> {/*added the path as a param */}
              <Route  path='/contact' component={Contact} exact/>
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
