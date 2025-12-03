import { useMemo } from 'react';
import { ScaleLinear } from 'd3';

type AxisLeftProps = {
  yScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
  width: number;
};

// tick length
const TICK_LENGTH = 6;

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
      {/* Main vertical line */}
      <path
        d={['M', 0, range[0], 'L', 0, range[1]].join(' ')}
        fill="none"
        stroke="currentColor"
      />

      {/* Awis label */}
      <g transform={`translate(${-40}, ${range[0] / 2})`}>
        <text transform="rotate(-90)" fontSize={14} textAnchor="middle">
          Percentage (%)
        </text>
      </g>

      {/* Ticks and labels */}
      {ticks.map(({ value, yOffset }, i) => (
        <g key={value} transform={`translate(0, ${yOffset})`}>
          <line x2={-TICK_LENGTH} stroke="currentColor" />
          <line x2={width} x1={0} stroke="grey" strokeWidth={0.5} />
          <text
            key={value}
            style={{
              fontSize: '10px',
              textAnchor: 'middle',
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

export const AxisLeftGood = ({
  yScale,
  pixelsPerTick,
  width,
}: AxisLeftProps) => {
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
      {ticks.map(({ value, yOffset }, i) => (
        <g key={value} transform={`translate(0, ${yOffset})`}>
          <line x2={width} x1={-TICK_LENGTH} stroke="#D3D3D3" strokeWidth={1} />
          <text
            key={value}
            style={{
              fontSize: '10px',
              textAnchor: 'middle',
              alignmentBaseline: 'middle',
              transform: 'translateX(-20px)',
            }}
          >
            {value + '%'}
          </text>
        </g>
      ))}
    </>
  );
};
