import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Equipment = (props) => {
  const badges = props.equipment.length > 0 ?
    props.equipment.map((equip, idx) => {
      return (
        <Badge variant="secondary" key={idx} className="mx-1">{equip}</Badge>
      );
    }) :
    <Badge variant="secondary" className="mx-1">No Equipment Needed</Badge>;
  return (
    <>
    <h4>Equipment</h4>
    <p className="h4">{badges}</p>
    </>
  );
}

export default Equipment;