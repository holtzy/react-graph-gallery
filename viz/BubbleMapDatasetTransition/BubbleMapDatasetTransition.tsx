import { useState } from 'react';
import { geoData, numData } from './data';
import { Map } from './Map';

const BUTTONS_HEIGHT = 60;

type BubbleMapDatasetTransitionProps = {
  width: number;
  height: number;
};

const buttonStyle = {
  border: '1px solid #9a6fb0',
  borderRadius: '3px',
  padding: '0px 8px',
  margin: '10px 2px',
  fontSize: 14,
  color: '#9a6fb0',
  opacity: 0.7,
};

export const BubbleMapDatasetTransition = ({
  width,
  height,
}: BubbleMapDatasetTransitionProps) => {
  const [year, setYear] = useState<number>(1990);

  const selectedData = numData.filter((item) => item.year === year);

  const allYears = [...new Set(numData.map((d) => d.year))];

  return (
    <div>
      <div
        style={{
          height: BUTTONS_HEIGHT,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          style={buttonStyle}
        >
          {allYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <Map
        width={width}
        height={height - BUTTONS_HEIGHT}
        numData={selectedData}
        geoData={geoData}
      />
    </div>
  );
};
