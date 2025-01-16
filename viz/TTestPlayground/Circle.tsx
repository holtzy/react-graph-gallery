import { animated, useSpring } from 'react-spring';

type CircleVizProps = {
  r: number;
  cx: number;
  cy: number;
};

export const Circle = ({ r, cx, cy }: CircleVizProps) => {
  const springProps = useSpring({
    to: { r, cx, cy },
  });

  return (
    <animated.circle
      cursor={'pointer'}
      r={springProps.r}
      cy={springProps.cy}
      cx={springProps.cx}
      fill="grey"
      fillOpacity={0.3}
    />
  );
};
