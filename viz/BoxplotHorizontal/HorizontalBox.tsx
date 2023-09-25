const STROKE_WIDTH = 40;

// A reusable component that builds a horizontal box shape using svg
// Note: numbers here are px, not the real values in the dataset.

type HorizontalBoxProps = {
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  height: number;
  stroke: string;
  fill: string;
};

export const HorizontalBox = ({
  min,
  q1,
  median,
  q3,
  max,
  height,
  stroke,
  fill,
}: HorizontalBoxProps) => {
  return (
    <>
      <line
        y1={height / 2}
        y2={height / 2}
        x1={min}
        x2={max}
        stroke={stroke}
        width={STROKE_WIDTH}
      />
      <rect
        x={q1}
        y={0}
        width={q3 - q1}
        height={height}
        stroke={stroke}
        fill={fill}
      />
      <line
        y1={0}
        y2={height}
        x1={median}
        x2={median}
        stroke={stroke}
        width={STROKE_WIDTH}
      />
    </>
  );
};
