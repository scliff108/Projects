import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(event) {
    const id = event.target.id;

    if (id.slice(0,5) === 'grade') {
      this.setState({
        grade: event.currentTarget.value
      });
    } else {
      this.setState({
        [id]: event.target.value
      });
    }
  }

  clearForm() {
    alert(this.state.firstName + ', thank you for your submission');
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>Simple Form</h1>
        </header>

        <section className="form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="First Name" id="firstName" className="form-control" value={this.state.firstName} onChange={this.handleChange} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="Last Name" id="lastName" className="form-control" value={this.state.lastName} onChange={this.handleChange} />
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="Email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
          </div>

          <label htmlFor="grade">Your Current Grade</label>
          <div className="form-group" id="grade">
            <div className="form-check form-check">
              <input type="radio" className="form-check-input" name="gradeRadioOptions" id="grade9" value="9" checked={this.state.grade === '9'} onChange={this.handleChange} />
              <label htmlFor="grade9" className="form-check-label">9</label>
            </div>
            <div className="form-check form-check">
              <input type="radio" className="form-check-input" name="gradeRadioOptions" id="grade10" value="10" checked={this.state.grade === '10'} onChange={this.handleChange} />
              <label htmlFor="grade10" className="form-check-label">10</label>
            </div>
            <div className="form-check form-check">
              <input type="radio" className="form-check-input" name="gradeRadioOptions" id="grade11" value="11" checked={this.state.grade === '11'} onChange={this.handleChange} />
              <label htmlFor="grade11" className="form-check-label">11</label>
            </div>
            <div className="form-check form-check">
              <input type="radio" className="form-check-input" name="gradeRadioOptions" id="grade12" value="12" checked={this.state.grade === '12'} onChange={this.handleChange} />
              <label htmlFor="grade12" className="form-check-label">12</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.clearForm}>Submit</button>
        </section>

        <section className="results">
          <p>First Name: {this.state.firstName}</p>
          <p>Last Name: {this.state.lastName}</p>
          <p>Email Address: {this.state.email}</p>
          <p>Grade: {this.state.grade}</p>
        </section>
      </div>
    );
  }
}

export default App;
