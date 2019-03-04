import React from 'react';
import { Constants } from '../utils/constants';

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  }
  const skyWidth = Constants.skyAndGroundWidth;
  const gameHeight = 1200;

  return (
    <rect
      style={ skyStyle }
      width={ skyWidth }
      height={ gameHeight }
      x={ skyWidth / -2 }
      y={ 200 - gameHeight }
      // x={ 0 }
      // y={ 0 }
    />
  );
};

export default Sky;
