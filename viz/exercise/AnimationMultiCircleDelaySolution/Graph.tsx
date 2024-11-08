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
        y={50}
        delay={10}
        color={position > 200 ? 'red' : 'blue'}
      />
      <Circle
        position={position}
        y={150}
        delay={100}
        color={position > 200 ? 'red' : 'blue'}
      />
      <Circle
        position={position}
        y={250}
        delay={1000}
        color={position > 200 ? 'red' : 'blue'}
      />
    </svg>
  );
};
