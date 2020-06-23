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
      opacity: 0,
    }
  }

  componentDidMount() {
    if (window.location.pathname === "/") { window.addEventListener("scroll", this.updateHeight.bind(this)); }
    if (window.innerHeight < window.scrollY) { this.setState({ opacity: 1 }); }
  }
  updateHeight() {
    if (window.scrollY < window.innerHeight - 100) {
      // this.setState({ opacity: 1 - (window.innerHeight - 400 - window.scrollY) / (window.innerHeight - 400) });
      this.setState({ opacity: 1 - (window.innerHeight - window.scrollY - 200) / (300) });
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar style={{ opacity: this.state.opacity }} />
          <Switch>
            <Route path={["/", "/resume"]} exact component={Resume} />
            <Route path="/about" exact component={About} />
            <Route path={["/project", "/projects"]} exact component={Project} />
            <Route path="/project/:id" component={Project} />
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
