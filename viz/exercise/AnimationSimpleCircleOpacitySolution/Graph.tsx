import { useState } from 'react';
import { Circle } from './Circle';

const width = 500;
const height = 300;

export const Graph = () => {
  const [position, setPosition] = useState(40);

  return (
    <svg
      width={width}
      height={height}
      onClick={() => {
        position > 100 ? setPosition(40) : setPosition(width - 50);
      }}
    >
      <Circle
        position={position}
        color={position > 200 ? 'red' : 'blue'}
        opacity={position > 200 ? 0.2 : 1}
      />
    </svg>
  );
};
