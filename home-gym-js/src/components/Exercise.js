import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import ExerciseModal from './Modal/ExerciseModal';

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
            <Badge variant="dark" className="mx-2">{props.mainmuscle}</Badge>
          </Card.Title>
          <Card.Text>
            {props.description.substring(0, 100)}...
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