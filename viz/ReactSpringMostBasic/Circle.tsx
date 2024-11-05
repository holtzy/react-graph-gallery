import { animated, useSpring, config } from 'react-spring';

type CircleVizProps = {
  position: number;
  color: string;
};

export const Circle = ({ position, color }: CircleVizProps) => {
  const springProps = useSpring({
    to: { position, color },
  });

  return (
    <animated.circle
      strokeWidth={2}
      fillOpacity={0.4}
      r={38}
      cy={50}
      cx={springProps.position}
      stroke={springProps.color}
      fill={springProps.color}
    />
  );
};
