type BubbleLegendProps = {
  scale: d3.ScaleLinear<number, number, never>;
  tickNumber: number;
};

const DASH_WIDTH = 50;

export const BubbleLegend = ({ scale, tickNumber }: BubbleLegendProps) => {
  const ticks = scale.ticks(tickNumber);
  const maxValue = ticks[ticks.length - 1];
  const dimension = scale(maxValue) * 2; // height and width of the biggest circle

  const allCircles = ticks.map((tick, i) => {
    const xCenter = dimension / 2;
    const yCircleTop = dimension - 2 * scale(tick);
    const yCircleCenter = dimension - scale(tick);

    return (
      <g key={i}>
        <circle
          cx={xCenter}
          cy={yCircleCenter}
          r={scale(tick)}
          fill="none"
          stroke="black"
        />
        <line
          x1={xCenter}
          x2={xCenter + DASH_WIDTH}
          y1={yCircleTop}
          y2={yCircleTop}
          stroke="black"
          strokeDasharray={"2,2"}
        />
        <text
          x={xCenter + DASH_WIDTH + 4}
          y={yCircleTop}
          fontSize={10}
          alignmentBaseline="middle"
        >
          {tick}
        </text>
      </g>
    );
  });

  return (
    <svg width="200" height="100" overflow="visible">
      {allCircles}
    </svg>
  );
};
