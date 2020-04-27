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
    {props.heading ? <h4>Muscle Groups</h4> : <span />}
    <span className={props.size}>{badges}</span>
    </>
  );
}

export default BodyParts;