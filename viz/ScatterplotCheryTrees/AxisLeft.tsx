import { useMemo } from 'react';
import { ScaleLinear } from 'd3';
import { getDateFromDayOfYear } from './getDateFromDayOfYears';

type AxisLeftProps = {
  yScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
  width: number;
};

export const AxisLeft = ({ yScale, pixelsPerTick, width }: AxisLeftProps) => {
  const range = yScale.range();

  const ticks = useMemo(() => {
    const height = range[0] - range[1];
    const numberOfTicksTarget = Math.floor(height / pixelsPerTick);

    return yScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      yOffset: yScale(value),
    }));
  }, [yScale]);

  return (
    <>
      {/* Ticks and labels */}
      {ticks.map(({ value, yOffset }) => (
        <g key={value} transform={`translate(0, ${yOffset})`}>
          <line
            x1={0}
            x2={width}
            stroke="#D2D7D3"
            strokeWidth={0.5}
            shapeRendering={'crispEdges'}
            stroke-dasharray="2,2"
          />
          <text
            key={value}
            style={{
              fontSize: '13px',
              textAnchor: 'start',
              transform: 'translateY(-5px)',
              fill: '#D2D7D3',
            }}
          >
            {getDateFromDayOfYear(value)}
          </text>
        </g>
      ))}
    </>
  );
};
