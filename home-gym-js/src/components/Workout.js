import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import GymModal from './GymModal';

const Workout = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const exercises = props.exercises.map((exercise, idx) => {
    return <p>{exercise}</p>;
  });
  return (
    <>
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            {props.workout}
            <Badge variant="dark" className="mx-2">{props.category}</Badge>
          </Card.Title>
          <Card.Text>
            <p>{props.level}</p>
            <p>Exercises: {exercises.length}</p>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => setModalShow(true)}
            block>
              View Workout
          </Button>
        </Card.Body>
      </Card>
      <h1>{props.name}</h1>
      <div>{exercises}</div>
    </div>

    <GymModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      exercise={false}
      {...props}
    />
    </>
  );
}

export default Workout;