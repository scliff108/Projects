import React from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';
import BodyParts from './BodyParts';
import Reps from './Reps';
import Equipment from './Equipment';

const GymModal = (props) => {

  const isExercise = props.exercise;
  const title = isExercise ? props.exercise : props.workout;
  
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
          <Badge variant="dark" className="mx-2">{props.category}</Badge>
        </Modal.Title>
      </Modal.Header>
        <Modal.Body>
          {
            isExercise ? 
              <ImageCarousel images={props.images} /> :
              <div />
          }
          <div className="text-center">
            {
              isExercise ? 
                <>
                <BodyParts bodyparts={props.bodyparts} size="h4" heading={true} />
                <Equipment equipment={props.equipment} size="h4" heading={true} />
                <Reps reps={props.reps} size="h4" heading={true} /> 
                </> :
                <p>Workout</p>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
  );
}

export default GymModal;