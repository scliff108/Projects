import React from 'react';
import Square from './Square';

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

export default Board;
