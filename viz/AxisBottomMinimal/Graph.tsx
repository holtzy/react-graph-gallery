import * as d3 from 'd3';

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };
const TICK_LENGTH = 8;

type GraphProps = {
  width: number;
  height: number;
};

export const Graph = ({ width, height }: GraphProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = d3.scaleLinear().domain([0, 100]).range([0, boundsWidth]);

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {/* Main horizontal line */}
          <line
            x1={0}
            x2={boundsWidth}
            y1={0}
            y2={0}
            stroke="black"
            strokeWidth={0.5}
          />

          {/* Ticks and Labels */}
          {xScale.ticks(10).map((value) => (
            <g key={value} transform={`translate(${xScale(value)}, 0)`}>
              <line y2={TICK_LENGTH} stroke="currentColor" />
              <text
                key={value}
                style={{
                  fontSize: '10px',
                  textAnchor: 'middle',
                  transform: 'translateY(20px)',
                }}
              >
                {value}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};
