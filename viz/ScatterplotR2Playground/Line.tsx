import { animated, useSpring } from 'react-spring';

type LineVizProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export const Line = ({ x1, y1, x2, y2 }: LineVizProps) => {
  const springProps = useSpring({
    to: { x1, y1, x2, y2 },
  });

  return (
    <animated.line
      x1={springProps.x1}
      y1={springProps.y1}
      x2={springProps.x2}
      y2={springProps.y2}
      stroke="black"
    />
  );
};
