import { useMemo } from 'react';
import { ScaleBand } from 'd3';

type AxisLeftProps = {
  yScale: ScaleBand<string>;
};

// tick length
const TICK_LENGTH = 6;

export const AxisLeft = ({ yScale }: AxisLeftProps) => {
  const [min, max] = yScale.range();

  const ticks = useMemo(() => {
    return yScale.domain().map((value) => ({
      value,
      yOffset: yScale(value) + yScale.bandwidth() / 2,
    }));
  }, [yScale]);

  return (
    <>
      {/* Main vertical line */}
      <path
        d={['M', 0, min, 'L', 0, max].join(' ')}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {ticks.map(({ value, yOffset }) => (
        <g key={value} transform={`translate(0, ${yOffset})`}>
          <line x2={-TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: '10px',
              textAnchor: 'middle',
              alignmentBaseline: 'middle',
              transform: 'translateX(-20px)',
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
