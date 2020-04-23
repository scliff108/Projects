import React from 'react';
import Media from 'react-bootstrap/Media';

const ImageDescription =  (props) => {
  return (
    <Media>
      <a href={props.start} target="_blank" rel="noopener noreferrer">
        <img
          width={100}
          height={100}
          className="mr-3"
          src={props.start}
          alt={props.exercise}
        />
      </a>
      <a href={props.end} target="_blank" rel="noopener noreferrer">
        <img
          width={100}
          height={100}
          className="mr-3"
          src={props.end}
          alt={props.exercise}
        />
      </a>
      <Media.Body>
        <p>{props.description}</p>
      </Media.Body>
    </Media>
  );
}

export default ImageDescription;