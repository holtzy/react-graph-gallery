import * as d3 from 'd3';

const BAR_PADDING = 0.4;

type BarplotProps = {
  width: number;
  height: number;
  data: { name: string; count: number }[];
};

export const Barplot = ({ width, height, data }: BarplotProps) => {
  const groups = data.map((d) => d.name).reverse();
  const yScale = d3
    .scaleBand()
    .domain(groups)
    .range([0, height])
    .paddingInner(BAR_PADDING)
    .paddingOuter(0.1);

  // X axis
  const xScale = d3.scaleLinear().domain([0, 55]).range([0, width]);

  // Build the shapes
  const allRects = data.map((d, i) => {
    const y = yScale(d.name);

    if (y === undefined) {
      return null;
    }

    return (
      <g key={i}>
        <rect
          x={0}
          y={yScale(d.name)}
          width={xScale(d.count)}
          height={yScale.bandwidth()}
          opacity={1}
          stroke="#076fa2"
          fill="#076fa2"
        />
        {d.count > 7 ? (
          <text
            x={xScale(0) + 7}
            y={y + yScale.bandwidth() / 2}
            textAnchor="start"
            alignmentBaseline="central"
            fontSize={14}
            fill="white"
            fillOpacity={0.9}
          >
            {d.name}
          </text>
        ) : (
          <text
            x={xScale(d.count) + 7}
            y={y + yScale.bandwidth() / 2}
            textAnchor="start"
            alignmentBaseline="central"
            fontSize={14}
            fill="#076fa2"
          >
            {d.name}
          </text>
        )}
      </g>
    );
  });

  const grid = xScale
    .ticks(10)
    .slice(1)
    .map((count, i) => (
      <g key={i}>
        <line
          x1={xScale(count)}
          x2={xScale(count)}
          y1={0}
          y2={height}
          stroke="#808080"
          opacity={0.2}
        />
        <text
          x={xScale(count)}
          y={-10}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={12}
          fill="#808080"
          opacity={1}
        >
          {count}
        </text>
      </g>
    ));

  return (
    <div>
      <svg width={width} height={height} style={{ overflow: 'visible' }}>
        {grid}
        {allRects}
        <g>
          <line
            x1={xScale(0)}
            x2={xScale(0)}
            y1={0}
            y2={height}
            stroke="black"
            opacity={0.8}
          />
          <text
            x={xScale(0)}
            y={-10}
            textAnchor="middle"
            alignmentBaseline="central"
            fontSize={12}
            fill="#808080"
            opacity={1}
          >
            {0}
          </text>
        </g>
      </svg>
    </div>
  );
};
