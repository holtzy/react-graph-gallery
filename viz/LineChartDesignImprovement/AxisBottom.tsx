import { useMemo } from 'react';
import { ScaleLinear } from 'd3';

type AxisBottomProps = {
  xScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
  height: number;
  hasGrid: boolean;
};

// tick length
const TICK_LENGTH = 8;

export const AxisBottom = ({
  xScale,
  pixelsPerTick,
  height,
  hasGrid,
}: AxisBottomProps) => {
  const range = xScale.range();

  const width = range[1] - range[0];
  const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

  const ticks = xScale.ticks(numberOfTicksTarget).map((value) => ({
    value,
    xOffset: xScale(value),
  }));

  return (
    <>
      <text
        x={width / 2}
        y={50}
        fontStyle={'bold'}
        fontSize={14}
        textAnchor="center"
      >
        Year
      </text>
      <line stroke="black" x2={range[1]} />
      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }, i) => (
        <g
          key={value}
          transform={`translate(${xOffset}, 0)`}
          shapeRendering={'crispEdges'}
        >
          <line y1={TICK_LENGTH} y2={0} stroke="black" strokeWidth={0.5} />
          {i % 4 === 0 && hasGrid && (
            <line y1={-height} y2={0} stroke="grey" strokeWidth={0.5} />
          )}
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

export const AxisBottomGood = ({
  xScale,
  pixelsPerTick,
  height,
  hasGrid,
}: AxisBottomProps) => {
  const range = xScale.range();

  const ticks = useMemo(() => {
    const width = range[1] - range[0];
    const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [xScale]);

  return (
    <>
      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }, i) => {
        const isMain = value % 5 === 0;

        return (
          <g
            key={value}
            transform={`translate(${xOffset}, 0)`}
            shapeRendering={'crispEdges'}
          >
            <line
              y1={isMain ? 11 * 2 : 11}
              y2={0}
              stroke={isMain ? 'black' : '#D3D3D3'}
              strokeWidth={0.5}
            />
            {i % 4 === 0 && hasGrid && (
              <line y1={-height} y2={0} stroke="grey" strokeWidth={0.5} />
            )}
            <text
              key={i}
              y={isMain ? 0 : -8}
              x={5}
              style={{
                fontSize: '10px',
                textAnchor: 'start',
                transform: 'translateY(20px)',
                fill: isMain ? 'black' : '#D3D3D3',
              }}
            >
              {isMain ? value : String(value).slice(-2)}
            </text>
          </g>
        );
      })}
    </>
  );
};
