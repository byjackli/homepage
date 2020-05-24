import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/App.css';
import { Navbar, Footer } from './components/Navigation';
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Styleguide from './pages/Styleguide';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={["/", "/resume"]} exact component={Resume} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/styleguide" exact component={Styleguide} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
