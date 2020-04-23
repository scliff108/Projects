import React from 'react';
import Badge from 'react-bootstrap/Badge';

const BodyParts = (props) => {
  const badges = props.bodyparts.map((bodypart, idx) => {
    return (
      <Badge variant="info" key={idx} className="mx-1">{bodypart}</Badge>
    );
  });
  return (
    <>
    <h4>Muscle Groups</h4>
    <p className="h4">{badges}</p>
    </>
  );
}

export default BodyParts;