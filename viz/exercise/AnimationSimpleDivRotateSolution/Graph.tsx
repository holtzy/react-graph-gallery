import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const width = 500;
const height = 300;

export const Graph = () => {
  const [position, setPosition] = useState(40);

  const springProps = useSpring({
    to: { left: position, rotate: position > 100 ? 0 : 360 },
  });

  return (
    <div
      style={{ width, height, position: 'relative' }}
      onClick={() => {
        setPosition(position > 100 ? 40 : width - 50);
      }}
    >
      <animated.div
        style={{
          left: springProps.left,
          rotate: springProps.rotate,
          top: 50,
          position: 'absolute',
          width: 50,
          height: 50,
          backgroundColor: 'red',
        }}
      ></animated.div>
    </div>
  );
};
