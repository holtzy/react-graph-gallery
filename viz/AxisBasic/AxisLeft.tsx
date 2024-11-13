import { ScaleLinear } from 'd3';

type AxisLeftProps = {
  yScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
};

// tick length
const TICK_LENGTH = 6;

export const AxisLeft = ({ yScale, pixelsPerTick }: AxisLeftProps) => {
  const range = yScale.range();
  const height = range[0] - range[1];
  const numberOfTicksTarget = Math.floor(height / pixelsPerTick);

  return (
    <>
      {/* Main vertical line */}
      <path
        d={['M', 0, range[0], 'L', 0, range[1]].join(' ')}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {yScale.ticks(numberOfTicksTarget).map((value, i) => (
        <g key={value} transform={`translate(0, ${yScale(value)})`}>
          <line x2={-TICK_LENGTH} stroke="currentColor" />
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
