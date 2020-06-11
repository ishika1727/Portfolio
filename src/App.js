import React from 'react';
import './App.css';

import Intro from './Intro';
import Nav from './Nav';
import Aboutme from './Aboutme';
import Projects from './Projects';

export class App extends React.Component{
  constructor(){
    super();
    this.state = {
      selectedpart:1
    };
  }

render(){
  return(
    <div className="App">
      <Nav />
      <Intro />
      <Aboutme />
      <Projects />
    </div>
  );
}
}
export default App;
