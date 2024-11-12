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

export const Graph12 = () => {
  const xScale = '';

  const yScale = '';

  const colorScale = '';

  return (
    <svg width={500} height={300}>
      {data.map((d, i) => {
        return null; // TODO
      })}
    </svg>
  );
};
