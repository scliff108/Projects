import React from 'react';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        col: null,
        row: null,
      }],
      stepNumber: 0,
      xIsNext: true,
      descendingOrder: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        col: i % 3 + 1,
        row: Math.floor(i / 3) + 1
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleToggle() {
    this.setState({
      descendingOrder: !this.state.descendingOrder,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winningSquares = calculateWinner(current.squares);

    let winner;
    if (winningSquares) {
      winner = current.squares[winningSquares[0]];
    }
    
    const moves = history.map((step, move) => {
      let description = '';
      if (!move) {
        description = 'Go to game start'
      } else if (move === this.state.stepNumber) {
        description = <strong>Go to move # {move} ({step.col}, {step.row})</strong>;
      } else {
        description = 'Go to move # ' + move + ' (' + step.col + ', ' + step.row + ')';
      }

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {description}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (this.state.stepNumber === 9) {
      status = 'The game is a tie.';
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winners={winningSquares ? winningSquares : []}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.handleToggle()}>Toggle Order</button>
          <ul>{this.state.descendingOrder ? moves : moves.reverse()}</ul>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

export default Game;
