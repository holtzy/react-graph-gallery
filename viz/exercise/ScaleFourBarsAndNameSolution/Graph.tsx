import { scaleBand, scaleLinear, scaleOrdinal } from 'd3';

const width = 500;
const height = 300;

const data = [
  {
    name: 'kevin',
    group: 'A',
    value: 25,
  },
  {
    name: 'alan',
    group: 'A',
    value: 15,
  },
  {
    name: 'camille',
    group: 'B',
    value: 8,
  },
  {
    name: 'toto',
    group: 'B',
    value: 6,
  },
];

export const Graph19 = () => {
  const xScale = scaleLinear().domain([0, 100]).range([0, width]);

  const yScale = scaleBand()
    .domain(['kevin', 'alan', 'camille', 'toto'])
    .range([0, height])
    .padding(0.1);

  const colorScale = scaleOrdinal()
    .domain(['A', 'B'])
    .range(['orange', 'blue']);

  return (
    <svg width={500} height={300}>
      {data.map((d, i) => {
        return (
          <g key={i}>
            <rect
              x={xScale(0)}
              y={yScale(d.name)}
              height={yScale.bandwidth()}
              width={xScale(d.value)}
              fill={colorScale(d.group)}
            />
            <text
              key={i}
              x={xScale(d.value) + 4}
              y={yScale(d.name) + yScale.bandwidth() / 2}
              fill={colorScale(d.group)}
            >
              {d.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
