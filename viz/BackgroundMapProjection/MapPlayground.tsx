import { useState } from 'react';
import { data } from './data';
import { Map } from './Map';

const buttonStyle = {
  border: '1px solid #cb1dd1',
  borderRadius: '3px',
  padding: '0px 8px',
  margin: '10px 2px',
  fontSize: 14,
  color: '#cb1dd1',
  opacity: 0.7,
};

export const MapPlayground = ({ width = 700, height = 400 }) => {
  const [projection, setProjection] = useState('mercator');

  const allProjection = [
    'mercator',
    'orthographic',
    'conicConformal',
    'naturalEarth',
  ];

  if (width === 0) {
    return null;
  }

  return (
    <div style={{ position: 'relative' }}>
      <Map data={data} width={width} height={height} projection={projection} />
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundColor: '#f7e4f6',
          padding: 5,
          margin: 5,
          borderRadius: 5,
        }}
      >
        <select
          value={projection}
          onChange={(e) => setProjection(e.target.value)}
          style={buttonStyle}
        >
          {allProjection.map((projection) => (
            <option key={projection} value={projection}>
              {projection}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
