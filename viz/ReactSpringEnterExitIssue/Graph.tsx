import { Circle } from './Circle';

const width = 500;
const height = 300;

const colors = {
  Mark: 'red',
  Lucas: 'blue',
  Shuntaro: 'yellow',
  Elise: 'green',
  Brendan: 'grey',
};

type Data = { x: number; y: number; name: string }[];

export const Graph = ({ data }: { data: Data }) => {
  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      {data.map((d, i) => {
        return (
          <Circle
            key={d.name}
            cx={d.x}
            cy={d.y}
            color={colors[d.name]}
            name={d.name}
          />
        );
      })}
    </svg>
  );
};
