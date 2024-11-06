import { animated, useSpring, config } from 'react-spring';

type CircleVizProps = {
  cx: number;
  cy: number;
  color: string;
  name: string;
};

export const Circle = ({ cx, cy, color, name }: CircleVizProps) => {
  const springProps = useSpring({
    from: { opacity: 0 },
    to: { cx, cy, color, opacity: 1 },
    config: { mass: 100 },
  });

  return (
    <>
      <animated.circle
        strokeWidth={2}
        fillOpacity={springProps.opacity}
        strokeOpacity={springProps.opacity}
        r={20}
        cy={springProps.cy}
        cx={springProps.cx}
        stroke={springProps.color}
        fill={springProps.color}
      />
      <animated.text
        x={springProps.cx}
        y={springProps.cy}
        textAnchor={'middle'}
        alignmentBaseline={'central'}
        opacity={springProps.opacity}
      >
        {name}
      </animated.text>
    </>
  );
};
