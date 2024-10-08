import { useState } from 'react';
import { data } from './data';
import { Histogram } from './Histogram';

const HEADER_HEIGHT = 70;

export const HistogramSliderBinSizeDemo = ({ width = 700, height = 400 }) => {
  const [bucketNumber, setBucketNumber] = useState(300);

  return (
    <div>
      {/* Row 1 = slider */}
      <div
        style={{
          height: HEADER_HEIGHT,
          marginLeft: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className="text-sm">Number of bins (target):</span>
          <input
            type="range"
            min={20}
            max={300}
            value={bucketNumber}
            step={1}
            onChange={(e) => setBucketNumber(Number(e.target.value))}
            style={{ height: 2, opacity: 0.5, marginLeft: 10 }}
          />
          <span className="text-sm ml-2">{bucketNumber}</span>
        </div>
      </div>
      <Histogram
        width={width}
        height={height - HEADER_HEIGHT}
        data={data}
        bucketNumber={bucketNumber}
      />
    </div>
  );
};
