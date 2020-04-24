import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import ExerciseModal from './Modal/ExerciseModal';
import BodyParts from './Modal/BodyParts';
import Equipment from './Modal/Equipment';
import Reps from './Modal/Reps';

const Exercise = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div>
      <Card>
        <Card.Img variant="top" src={props.images.thumbnail} alt="IMG" />
        <Card.Body>
          <Card.Title>
            {props.exercise}
            <Badge variant="dark" className="mx-2">{props.category}</Badge>
          </Card.Title>
          <Card.Text>
            <BodyParts bodyparts={props.bodyparts} size="h6" heading={false} />
            <Equipment equipment={props.equipment} size="h6" heading={false} />
            <Reps reps={props.reps} size="h6" heading={false} />
          </Card.Text>
          <Button 
            variant="primary"
            onClick={() => setModalShow(true)}
            block>
              More Details
            </Button>
        </Card.Body>
      </Card>
    </div>

    <ExerciseModal
      show={modalShow}
      onHide={() =>setModalShow(false)}
      {...props}
    />
    </>
  );
}


export default Exercise;