import { useRef } from 'react';
import { useDimensions } from './use-dimensions';

export const Graph = () => {
  const chartRef = useRef(null);
  const chartSize = useDimensions(chartRef);

  return (
    <div
      style={{
        backgroundColor: 'grey',
        width: '100%',
      }}
    >
      <div
        ref={chartRef}
        style={{ backgroundColor: 'red', margin: 30, height: 300 }}
      >
        <p>Width: {chartSize.width}</p>
        <p>Height: {chartSize.height}</p>
      </div>
    </div>
  );
};
