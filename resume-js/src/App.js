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
        <Hero personal={resume.personal} />
        <Work work={resume.work} />
        <Education education={resume.education} />
        <Certifications certifications={resume.certifications} />
        <Skills skills={resume.skills} />
      </div>
    );
  }
}

export default App;
