import { Tooltip } from './Tooltip';

const width = 500;
const height = 300;

export const Graph8 = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* SVG layer */}
      <svg width={width} height={height}>
        <circle cx={width / 2} cy={height / 2} r={30} fill="red" />
      </svg>

      {/* Tooltip Layer */}
      <div
        style={{
          position: 'absolute',
          width,
          height,
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      >
        <Tooltip
          interactionData={{
            xPos: width / 2,
            yPos: height / 2,
            name: 'hello',
            xValue: width / 2,
            yValue: height / 2,
            color: 'green',
          }}
        />
      </div>
    </div>
  );
};
