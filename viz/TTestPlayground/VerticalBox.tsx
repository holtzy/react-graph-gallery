import { animated, useSpring, config } from 'react-spring';

const STROKE_WIDTH = 40;

// A reusable component that builds a vertical box shape using svg
// Note: numbers here are px, not the real values in the dataset.

type VerticalBoxProps = {
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  width: number;
  stroke: string;
  fill: string;
};

export const VerticalBox = ({
  min,
  q1,
  median,
  q3,
  max,
  width,
  stroke,
  fill,
}: VerticalBoxProps) => {
  const springProps = useSpring({
    to: { min, q1, median, q3, max, diff: q1 - q3 },
    config: config.molasses,
  });

  return (
    <>
      <animated.line
        x1={width / 2}
        x2={width / 2}
        y1={springProps.min}
        y2={springProps.max}
        stroke={stroke}
        width={STROKE_WIDTH}
      />
      <animated.rect
        x={0}
        y={springProps.q3}
        width={width}
        height={springProps.diff}
        stroke={stroke}
        fill={fill}
      />
      <animated.line
        x1={0}
        x2={width}
        y1={springProps.median}
        y2={springProps.median}
        stroke={stroke}
        width={STROKE_WIDTH}
      />
    </>
  );
};
