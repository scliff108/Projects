import React from 'react';

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

export default Square;