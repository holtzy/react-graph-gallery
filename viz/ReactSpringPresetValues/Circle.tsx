import { animated, useSpring, config } from 'react-spring';

export type Preset =
  | 'default'
  | 'gentle'
  | 'wobbly'
  | 'stiff'
  | 'slow'
  | 'molasses';

type CircleVizProps = {
  position: number;
  color: string;
  preset: Preset;
};

export const Circle = ({ position, color, preset }: CircleVizProps) => {
  const springProps = useSpring({
    to: { position, color },
    config: config[preset],
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
