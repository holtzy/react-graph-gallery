import { animated, useSpring, config } from "react-spring";

type CircleVizProps = {
  width: number;
  height: number;
  position: number;
  fill: string;
};

export const CircleViz = ({
  position,
  width,
  height,
  fill,
}: CircleVizProps) => {
  const springProps = useSpring({
    to: { position, fill },
    config: config.molasses,
  });

  return (
    <svg width={width} height={height}>
      <animated.circle
        stroke={springProps.fill}
        fill={springProps.fill}
        strokeWidth={2}
        fillOpacity={0.4}
        r={38}
        cx={springProps.position}
        cy={50}
      />
    </svg>
  );
};
