import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = (props) => {

  const viewBox = [
    window.innerWidth / -2,
    200 - window.innerHeight,
    window.innerWidth,
    window.innerHeight
  ];

  return(
    <svg
      id="aliens-go-home-canvas"
      // preserveAspectRatio="xMaxYMax none"
      viewBox={ viewBox }
      onMouseMove={ props.trackMouse }
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={ props.angle } />
      <CannonBase />
    </svg>
  );
};

export default Canvas;
