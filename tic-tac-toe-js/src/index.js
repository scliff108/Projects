import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button
      className={props.highlight ? "square square-highlight" : "square"}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
      return (
        <Square
          key={i}
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          highlight={this.props.winners.includes(i)}
        />
      );
  }

  render() {
    let rows = [0,1,2].map(row => {
      let squares = [0,1,2].map(col => {
        return this.renderSquare(row * 3 + col);
      });
      return <div className="board-row" key={row}>{squares}</div>;
    });

    return <div>{rows}</div>;
  }
}

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

    if (calculateWinner(squares || squares[i])) {
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
    const history = this.state.descendingOrder ? 
      this.state.history : 
      this.state.history.slice(0).reverse();
    const current = history[this.state.stepNumber];
    const winningSquares = calculateWinner(current.squares);
    let winner;
    if (winningSquares) {
      winner = current.squares[winningSquares[0]];
    }

    const moves = history.map((step, move) => {
      move = this.state.descendingOrder ? move : history.length - move - 1;
      const desc = !move ? 
        'Go to game start' :
        move  === this.state.stepNumber ? 
        <strong>Go to move # {move} ({step.col}, {step.row})</strong> :
        'Go to move # ' + move + ' (' + step.col + ', ' + step.row + ')';

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
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
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

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