import { animated, useSpring } from 'react-spring';

type CircleVizProps = {
  cx: number;
  cy: number;
  color: string;
};

export const Circle = ({ cx, cy, color }: CircleVizProps) => {
  const springProps = useSpring({
    to: { cx, cy, color },
    config: {
      friction: 50,
    },
  });

  return (
    <animated.circle
      strokeWidth={2}
      fillOpacity={0.9}
      r={5}
      cy={springProps.cy}
      cx={springProps.cx}
      stroke={springProps.color}
      fill={springProps.color}
    />
  );
};
