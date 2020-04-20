import React, { Component } from 'react';
import Hero from './components/Hero';
import Work from './components/Work';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'word'
    };
  }

  render() {
    const resume = this.props.resume;
    return (
      <div className="App">
        <Hero />
        <Work />
        <Education />
        <Certifications />
        <Skills />
      </div>
    );
  }
}

export default App;
