import { useMemo } from 'react';
import { ScaleLinear } from 'd3';

type AxisBottomProps = {
  xScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
  height: number;
};

// tick length
const TICK_LENGTH = 4;

export const AxisBottom = ({
  xScale,
  pixelsPerTick,
  height,
}: AxisBottomProps) => {
  const range = xScale.range();
  const width = range[1] - range[0];

  const ticks = useMemo(() => {
    const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [xScale]);

  return (
    <>
      <line
        y1={0}
        y2={0}
        x1={0}
        x2={width}
        stroke="#D2D7D3"
        strokeWidth={0.5}
        shapeRendering={'crispEdges'}
      />
      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, 0)`}>
          <line
            y1={0}
            y2={TICK_LENGTH}
            stroke="#D2D7D3"
            strokeWidth={0.5}
            shapeRendering={'crispEdges'}
          />

          <text
            key={value}
            style={{
              fontSize: '10px',
              textAnchor: 'middle',
              transform: 'translateY(20px)',
              fill: 'black',
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
