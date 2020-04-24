import React from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';
import ImageDescription from './ImageDescription';
import BodyParts from './BodyParts';
import Reps from './Reps';
import Equipment from './Equipment';

const ExerciseModal = (props) => {
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.exercise}
          <Badge variant="dark" className="mx-2">{props.mainmuscle}</Badge>
        </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <ImageDescription
            exercise={props.exercise}
            description={props.description}
            start={props.images.start}
            end={props.images.end}
          />
          <div className="text-center">
            <BodyParts bodyparts={props.bodyparts} />
            <Equipment equipment={props.equipment} />
            <Reps reps={props.reps} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
  );
}


export default ExerciseModal;