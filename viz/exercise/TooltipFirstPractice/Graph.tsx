// import { Tooltip } from './Tooltip';

const width = 500;
const height = 300;

export const Graph = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* SVG layer */}
      <svg width={width} height={height}>
        <circle cx={width / 2} cy={height / 2} r={30} fill="red" />
      </svg>

      {/* Tooltip Layer: TODO */}
    </div>
  );
};
