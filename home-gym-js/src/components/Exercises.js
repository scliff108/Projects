import React from 'react';
import Exercise from './Exercise';
import CardColumns from 'react-bootstrap/CardColumns';
import exerciseData from './../exerciseData';

const Exercises = () => {

  const exercises = exerciseData.map((exercise, idx) => {
    return <Exercise {...exercise} key={idx} />
  });

  return (
    <div>
      <h1>Exercises</h1>
      <CardColumns>
        {exercises}
      </CardColumns>
    </div>
  );
}

export default Exercises;