import { animated, useSpring } from 'react-spring';

type CircleVizProps = {
  r: number;
  cx: number;
  cy: number;
  fill: string;
  stroke: string;
  fillOpacity: number;
  strokeWidth: number;
  onMouseDown: () => void;
  onMouseUp: () => void;
};

export const Circle = ({
  r,
  cx,
  cy,
  fill,
  stroke,
  fillOpacity,
  strokeWidth,
  onMouseDown,
  onMouseUp,
}: CircleVizProps) => {
  const springProps = useSpring({
    to: { r, cx, cy, fill, stroke, fillOpacity, strokeWidth },
  });

  return (
    <animated.circle
      cursor={'pointer'}
      strokeWidth={springProps.strokeWidth}
      fillOpacity={springProps.fillOpacity}
      r={springProps.r}
      cy={springProps.cy}
      cx={springProps.cx}
      stroke={springProps.stroke}
      fill={springProps.fill}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    />
  );
};
