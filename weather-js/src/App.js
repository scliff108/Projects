import React, { Component } from 'react';
import IPinfo from 'node-ipinfo';
import './App.css';
import WeeklyForecast from './components/WeeklyForecast';
import HourlyForecast from './components/HourlyForecast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      region: '',
      country: ''
    }
  }

  getLocation(city, region, country) {
    this.setState({
      city: city,
      region: region,
      country: country
    });
  }

  componentDidMount() {
    let token = 'fd3d9ed3bf6df3';
    
    fetch('http://ip-api.com/json/')
      .then(res => res.json())
      .then(data => {
        this.setState({ city: data.city, region: data.region , country: data.countryCode })
      })
      .catch(err => err)
  }

  render() {
    return (
      <div className="App container">
        <h1 className="pageTitle">Weather for {this.state.city}, {this.state.region}</h1>
        <section>
          <h2>Weekly Weather</h2>
          <WeeklyForecast city={this.state.city} country={this.state.country} />
        </section>
        <section>
          <h2>Hourly Weather</h2>
          <HourlyForecast city={this.state.city} country={this.state.country} />
        </section>
      </div>
    );
  }
  
}

export default App;
