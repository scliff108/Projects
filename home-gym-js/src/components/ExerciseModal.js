import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ImageDescription from './Modal/ImageDescription';
import BodyParts from './Modal/BodyParts';
import Reps from './Modal/Reps';
import Equipment from './Modal/Equipment';

const ExerciseModal = (props) => {
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.exercise}
        </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <ImageDescription
            exercise={props.exercise}
            description={props.description}
            start={props.images.start}
            end={props.images.end}
          />
          <BodyParts bodyparts={props.bodyparts} />
          <Equipment equipment={props.equipment} />
          <Reps reps={props.reps} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
  );
}


export default ExerciseModal;