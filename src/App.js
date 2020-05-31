import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './config/firebase';

import './styles/App.css';
import { Navbar, Footer } from './components/Navigation';
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Styleguide from './pages/Styleguide';

function App() {
  // const db = firebase.firestore();

  // let
  //   dbCards = db.collection('cards'),
  //   dbCourses = db.collection('courses'),
  //   dbUsersCourses = db.collection('users-courses'),
  //   dbTags = db.collection('tags'),
  //   dbResumes = db.collection('resumes');

  // function addToDB() {
  //   let UsersCourse = [
  //     {
  //       "course": "CSE115",
  //       "term": "Fall",
  //       "year": 2017,
  //       "tags": []
  //     },
  //     {
  //       "course": "CSE199",
  //       "term": "Fall",
  //       "year": 2017,
  //       "tags": []
  //     },
  //     {
  //       "course": "ENG105",
  //       "term": "Fall",
  //       "year": 2017,
  //       "tags": []
  //     },
  //     {
  //       "course": "ENG394",
  //       "term": "Fall",
  //       "year": 2017,
  //       "tags": ["networking", "exploration", "influence", "motivation"]
  //     },
  //     {
  //       "course": "MTH141",
  //       "term": "Fall",
  //       "year": 2017,
  //       "tags": []
  //     },
  //     {
  //       "course": "ARC211",
  //       "term": "Spring",
  //       "year": 2018,
  //       "tags": ["purposeful"]
  //     },
  //     {
  //       "course": "ART105",
  //       "term": "Spring",
  //       "year": 2018,
  //       "tags": []
  //     },
  //     {
  //       "course": "CSE116",
  //       "term": "Spring",
  //       "year": 2018,
  //       "tags": []
  //     },
  //     {
  //       "course": "CSE191",
  //       "term": "Spring",
  //       "year": 2018,
  //       "tags": []
  //     },
  //     {
  //       "course": "ENG394",
  //       "term": "Spring",
  //       "year": 2018,
  //       "tags": ["discovery"]
  //     },
  //     {
  //       "course": "MTH142",
  //       "term": "Spring",
  //       "year": 2018,
  //       "tags": []
  //     },
  //     {
  //       "course": "CL110",
  //       "term": "Fall",
  //       "year": 2018,
  //       "tags": []
  //     },
  //     {
  //       "course": "CSE250",
  //       "term": "Fall",
  //       "year": 2018,
  //       "tags": ["motivation", "discovery"]
  //     },
  //     {
  //       "course": "DMS105",
  //       "term": "Fall",
  //       "year": 2018,
  //       "tags": ["discovery"]
  //     },
  //     {
  //       "course": "GLY101",
  //       "term": "Fall",
  //       "year": 2018,
  //       "tags": []
  //     },
  //     {
  //       "course": "GLY105",
  //       "term": "Fall",
  //       "year": 2018,
  //       "tags": []
  //     },
  //     {
  //       "course": "STA301",
  //       "term": "Fall",
  //       "year": 2018,
  //       "tags": []
  //     },
  //     {
  //       "course": "CSE220",
  //       "term": "Spring",
  //       "year": 2019,
  //       "tags": ["motivation", ]
  //     },
  //     {
  //       "course": "CSE306",
  //       "term": "Spring",
  //       "year": 2019,
  //       "tags": ["purpose", "motivation"]
  //     },
  //     {
  //       "course": "EAS360",
  //       "term": "Spring",
  //       "year": 2019,
  //       "tags": []
  //     },
  //     {
  //       "course": "GLY102",
  //       "term": "Spring",
  //       "year": 2019,
  //       "tags": []
  //     },
  //     {
  //       "course": "MTH309",
  //       "term": "Spring",
  //       "year": 2019,
  //       "tags": []
  //     },
  //     {
  //       "course": "CHI301",
  //       "term": "Fall",
  //       "year": 2019,
  //       "tags": []
  //     },
  //     {
  //       "course": "COM101",
  //       "term": "Fall",
  //       "year": 2019,
  //       "tags": ["discovery"]
  //     },
  //     {
  //       "course": "COM240",
  //       "term": "Fall",
  //       "year": 2019,
  //       "tags": []
  //     },
  //     {
  //       "course": "COM443",
  //       "term": "Fall",
  //       "year": 2019,
  //       "tags": []
  //     },
  //     {
  //       "course": "COM447",
  //       "term": "Fall",
  //       "year": 2019,
  //       "tags": []
  //     },
  //     {
  //       "course": "COM410",
  //       "term": "Spring",
  //       "year": 2020,
  //       "tags": []
  //     },
  //     {
  //       "course": "CSE312",
  //       "term": "Spring",
  //       "year": 2020,
  //       "tags": ["motivation", "exploration"]
  //     },
  //     {
  //       "course": "CSE370",
  //       "term": "Spring",
  //       "year": 2020,
  //       "tags": ["motivation", "exploration"]
  //     },
  //     {
  //       "course": "CSE442",
  //       "term": "Spring",
  //       "year": 2020,
  //       "tags": ["motivation", ]
  //     }
  //   ]

  //   UsersCourse.forEach(elem => {
  //     dbUsersCourses.doc().set({
  //       "course": elem.course,
  //       "term": elem.term,
  //       "year": elem.year,
  //       "tags": []
  //     })
  //   })
  // courses.forEach(elem => {
  //   dbCourses.doc(`${elem.prefix}${elem.num}`).set({
  //     "prefix": elem.prefix,
  //     "num": elem.num,
  //     "name": elem.name,
  //     "link": elem.link
  //   })
  // })
  // tags.forEach(elem => {
  //   dbTags.doc(elem.name).set({
  //     "name": elem.name,
  //     "desc": elem.desc
  //   })
  // })
  // resumes.forEach(elem => {
  //   dbResumes.doc(`resume${elem.userid}`).set({
  //     "userid": "",
  //     "contact": {
  //       "email": "jack7598@gmail.com",
  //       "email_school": "jackli@buffalo.edu",
  //       "email_work": "email.byjackli.com",
  //       "phone": 3474764944,
  //     },
  //     "courses": [

  //     ],
  //     "projects": [

  //     ],
  //     "social_media": {
  //       "linkedin": "byjackli",
  //       "github": "byjackli",
  //       "twitter": "byjackli",
  //       "instagram": "byjackli",
  //       "pinterest": "byjackli",
  //       "spotify": "byjackli",
  //       "facebook": "byjackli",
  //       "youtube": "byjackli",
  //       "tiktok": "byjackli",
  //     }
  //   })
  // })

  // }
  // addToDB();

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
        <Footer right={[
          <ol key={"1"}>
            <li className="style5">Contact</li>
            <li>347 476 - 4944</li>
            <li>jackli@buffalo.edu</li>
            <li>email@byjackli.com</li>
          </ol>,
          <ol key={"2"}>
          <li className="style5">Proudly built with</li>
            <li>- Javascript</li>
            <li>- Reactjs</li>
            <li>- Visual Studio Code</li>
            <li>- Firebase</li>
          </ol>,
          <ol key={"3"}>
          <li className="style5">Other projects</li>
            <li>Travel - help travelers make decisions</li>
            <li>Photo - immersive instagram experience</li>
            <li>Focus - chrome extensions to improve focus</li>
            <li>Lyrics - music and lyrics side-by-side</li>
            <li>Playlists - share your spotify playlists</li>
          </ol>
        ]} />
      </div>
    </Router>
  );
}

export default App;
