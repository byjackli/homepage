import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './config/firebase';

import './styles/App.css';
// import './styles/Queries.css';
import { Navbar, Footer } from './components/Navigation';
import Resume from './pages/Resume';
import About from './pages/About';
import Project from './pages/Project';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Styleguide from './pages/Styleguide';
import { render } from '@testing-library/react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path={["/", "/resume"]} exact component={Resume} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Project} />
            <Route path="/project/:id" strict component={Project} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/styleguide" exact component={Styleguide} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
