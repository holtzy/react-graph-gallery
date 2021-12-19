import { useMemo } from "react";
import * as d3 from "d3";
import { Tree } from "../../data/hierarchy-1-level-random";
import { useSpring, animated } from "react-spring";

type CircularPackingDatasetTransitionProps = {
  width: number;
  height: number;
  data: Tree;
};

export const CircularPackingDatasetTransition = ({
  width,
  height,
  data,
}: CircularPackingDatasetTransitionProps) => {
  const hierarchy = useMemo(() => {
    return d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value! - a.value!);
  }, [data]);

  const root = useMemo(() => {
    return d3.pack<Tree>().size([width, height]).padding(4)(hierarchy);
  }, [hierarchy, width, height]);

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <AnimatedCircle
            key={node.data.name}
            cx={node.x}
            cy={node.y}
            r={node.r}
            stroke="#553C9A"
            strokeWidth={2}
            fill="#B794F4"
            fillOpacity={0.2}
          />
        ))}
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <AnimatedText
            key={node.data.name}
            x={node.x}
            y={node.y}
            fontSize={13}
            fontWeight={0.4}
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {node.data.name}
          </AnimatedText>
        ))}
    </svg>
  );
};

const AnimatedCircle = ({
  cx,
  cy,
  r,
  ...props
}: React.SVGAttributes<SVGCircleElement>) => {
  const animatedProps = useSpring({
    cx,
    cy,
    r,
  });
  return (
    <animated.circle
      {...props}
      r={animatedProps.r as any}
      cx={animatedProps.cx as any}
      cy={animatedProps.cy as any}
    />
  );
};

const AnimatedText = ({
  x,
  y,
  ...props
}: React.SVGAttributes<SVGTextElement>) => {
  const animatedProps = useSpring({
    x,
    y,
  });
  return (
    <animated.text
      {...props}
      x={animatedProps.x as any}
      y={animatedProps.y as any}
    />
  );
};
