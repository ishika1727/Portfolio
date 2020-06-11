import React from 'react';
import './css/App.css';

import Intro from './Intro';
import Nav from './Nav';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedpart: 1
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
        <Aboutme />
        <hr />
        <Projects />
        <Skills />
        <div className="line"></div>
        <Experience />
        <Contact />
      </div>
    );
  }
}
export default App;
