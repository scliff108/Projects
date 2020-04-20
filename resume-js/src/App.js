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
      view: 'Work Experience'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.id);
    this.setState({
      'view': event.target.id
    });
  }

  render() {
    const resume = this.props.resume;
    return (
      <div className="App container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-6" id="hero">
            <Hero personal={resume.personal} />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary" id="Work Experience" onClick={this.handleChange}>Work Experience</button>
          <button className="btn btn-outline-primary" id="Education" onClick={this.handleChange}>Education</button>
          <button className="btn btn-outline-primary" id="Certifications" onClick={this.handleChange}>Certifications</button>
          <button className="btn btn-outline-primary" id="Skills" onClick={this.handleChange}>Skills</button>
        </div>
        <h2 style={{textAlign: "center"}}>{this.state.view}</h2>
          {this.state.view === 'Work Experience' ? <Work work={resume.work} /> :
            this.state.view === 'Education' ? <Education education={resume.education} /> :
            this.state.view === 'Certifications' ? <Certifications certifications={resume.certifications} /> :
            <Skills skills={resume.skills} />
          }
      </div>
    );
  }
}

export default App;
