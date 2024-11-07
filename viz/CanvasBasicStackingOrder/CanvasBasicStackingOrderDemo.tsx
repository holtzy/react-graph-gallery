import { Graph } from './Graph';

export const CanvasBasicStackingOrderDemo = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }
  return <Graph width={width} height={height} />;
};
