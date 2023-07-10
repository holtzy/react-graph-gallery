import { data } from './data';
import { NetworkDiagram } from './NetworkDiagram';

import { useState } from 'react';

const HEADER_HEIGHT = 120;
const FOOTER_HEIGHT = 50;
const FONT_STYLE = { color: 'grey', fontSize: 14 };

export const NetworkDiagramAndSliders = ({ width = 700, height = 400 }) => {
  const [collideRadius, setCollideRadius] = useState(25);
  const [manyBodyStrength, setManyBodyStrength] = useState(0);
  const [forceYStrength, setForceYStrength] = useState(0.1);

  return (
    <div style={{ height, width }}>
      {/* Row 1 = sliders */}
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
          <i>
            <span style={FONT_STYLE}>
              {'Radius used to avoid collision: ' + collideRadius}
            </span>
          </i>
          <input
            type="range"
            min={2}
            max={80}
            value={collideRadius}
            step={1}
            onChange={(e) => setCollideRadius(Number(e.target.value))}
            style={{ height: 2, opacity: 0.5, marginLeft: 10 }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <i>
            <span style={FONT_STYLE}>
              {'ManyBody strength: ' + manyBodyStrength}
            </span>
          </i>
          <input
            type="range"
            min={-60}
            max={60}
            value={manyBodyStrength}
            step={1}
            onChange={(e) => setManyBodyStrength(Number(e.target.value))}
            style={{ height: 2, opacity: 0.5, marginLeft: 10 }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <i>
            <span style={FONT_STYLE}>
              {'ForceY strength: ' + forceYStrength}
            </span>
          </i>
          <input
            type="range"
            min={0}
            max={1}
            value={forceYStrength}
            step={0.1}
            onChange={(e) => setForceYStrength(Number(e.target.value))}
            style={{ height: 2, opacity: 0.5, marginLeft: 10 }}
          />
        </div>
      </div>

      {/* Row 2 = chart */}
      <NetworkDiagram
        data={data}
        width={width}
        height={height - HEADER_HEIGHT - FOOTER_HEIGHT}
        collideRadius={collideRadius}
        manyBodyStrength={manyBodyStrength}
        forceYStrength={forceYStrength}
      />
    </div>
  );
};
