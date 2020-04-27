import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardColumns from 'react-bootstrap/CardColumns';
import exerciseData from './exerciseData';
import Exercise from './components/Exercise';
import Workout from './components/Workout';

class App extends Component {

  render() {
    const exercises = exerciseData.exercises.map((exercise, idx) => {
      return <Exercise {...exercise} key={idx} />;
    });

    return (
      <Container fluid>
        <Jumbotron>
          <h1>Welcome to The At Home Workout Center</h1>
          <p className="lead">Browse through body weight exercises and workouts. Find your favorites and keep yourself in shape from anywhere.</p>
        </Jumbotron>
        <CardColumns>
          {exercises}
        </CardColumns>
      </Container>
    );
  }
}

export default App;
