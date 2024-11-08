import { animated, useSpring } from 'react-spring';

type CircleVizProps = {
  position: number;
  color: string;
  y: number;
  delay: number;
};

export const Circle = ({ position, color, y, delay }: CircleVizProps) => {
  const springProps = useSpring({
    to: { position, color },
    delay: delay,
  });

  return (
    <animated.circle
      strokeWidth={2}
      fillOpacity={0.4}
      r={38}
      cy={y}
      cx={springProps.position}
      stroke={springProps.color}
      fill={springProps.color}
    />
  );
};
