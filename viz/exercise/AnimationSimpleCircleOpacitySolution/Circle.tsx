import { animated, useSpring } from 'react-spring';

type CircleVizProps = {
  position: number;
  color: string;
  opacity: number;
};

export const Circle = ({ position, color, opacity }: CircleVizProps) => {
  const springProps = useSpring({
    to: { position, color, opacity },
  });

  return (
    <animated.circle
      strokeWidth={2}
      fillOpacity={springProps.opacity}
      r={38}
      cy={50}
      cx={springProps.position}
      stroke={springProps.color}
      fill={springProps.color}
    />
  );
};
