import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: '',
      randomNumber: -1,
      guess: 0,
      guessCount: 0,
      result: '',
      isStarted: false
    };
    this.changeDifficulty = this.changeDifficulty.bind(this);
    this.getGuess = this.getGuess.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
    this.restart = this.restart.bind(this);
  }

  randomNumber(difficulty) {
    const max = difficulty === "Easy" ? 10 : difficulty ==="Medium" ? 100 : 1000;
    return Math.floor(Math.random() * Math.floor(max));
  }

  changeDifficulty(difficulty) {
    this.setState({
      difficulty: difficulty,
      randomNumber: this.randomNumber(difficulty),
      guessCount: 0,
      result: '',
      isStarted: true
    });
  }

  getGuess(val) {
    this.setState({
      guess: val.target.value
    });
  }

  handleGuess() {
    const currentGuessCount = this.state.guessCount;
    const result = this.state.guess == this.state.randomNumber ? 'Correct' :
                   this.state.guess > this.state.randomNumber ? 'Lower' : 'Higher';

    this.setState({
      guessCount: currentGuessCount + 1,
      result: result
    });
  }

  restart() {
    this.setState({
      randomNumber: this.randomNumber(this.state.difficulty),
      guess: 0,
      guessCount: 0,
      result: '',
      isStarted: true
    });
  }

  render() {
    const difficulty = this.state.difficulty;

    return (
      <div className="App">
        <header>
          <h1>Higher or Lower</h1>
        </header>

        <div>
          <ToggleButtonGroup type="radio" name="difficulty" onChange={this.changeDifficulty} className="m-2">
            <ToggleButton value="Easy" variant={difficulty === "Easy" ? "primary" : "outline-primary"} size="lg">
              Easy
            </ToggleButton>
            <ToggleButton value="Medium" variant={difficulty === "Medium" ? "primary" : "outline-primary"} size="lg">
              Medium
            </ToggleButton>
            <ToggleButton value="Hard" variant={difficulty === "Hard" ? "primary" : "outline-primary"} size="lg">
              Hard
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        {this.state.isStarted ? 
        <>
        <div className="d-flex justify-content-center m-2">
          <Form.Control size="lg" type="number" className="col-sm-4 text-center" value={this.state.guess} onChange={this.getGuess} />
        </div>

        <div className="m-2">
          <Button variant="success" size="lg" onClick={this.handleGuess}>Guess</Button>
          <Button variant="danger" size="lg" onClick={this.restart}>Restart</Button>
        </div>

        <div>
          <p className="h1">Guess Count: {this.state.guessCount}</p>
          <p className="h1">{this.state.result}</p>
        </div>
        </>
        : <div />}
      </div>
    );
  }
}

export default App;
