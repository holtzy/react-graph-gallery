import { animated, useSpring, config } from 'react-spring';

type CircleVizProps = {
  position: number;
  color: string;
};

export const Circle = ({ position, color }: CircleVizProps) => {
  const springProps = useSpring({
    to: { position, color },
    config: config.molasses,
  });

  return (
    <>
      <animated.circle
        strokeWidth={2}
        fillOpacity={0.4}
        r={springProps.position.to((pos) => pos / 10 + 10)}
        cy={50}
        cx={springProps.position}
        stroke={springProps.color}
        fill={springProps.color}
      />
      <animated.text
        x={springProps.position}
        y={50}
        textAnchor={'middle'}
        alignmentBaseline={'central'}
      >
        {springProps.position.to((pos) => Math.floor(pos))}
      </animated.text>
    </>
  );
};
