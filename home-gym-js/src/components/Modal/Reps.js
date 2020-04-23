import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Reps = (props) => {
  return (
      <>
    <h4>Reps</h4>
    <p className="h4">
        <Badge variant="success" className="mx-1">Easy: {props.reps[0]}</Badge>
        <Badge variant="warning" className="mx-1">Medium: {props.reps[1]}</Badge>
        <Badge variant="danger" className="mx-1">Hard: {props.reps[2]}</Badge>
    </p>
    </>
  );
}

export default Reps;