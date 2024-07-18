import { csv } from 'd3';
import { PopulationPyramid } from './PopulationPyramid';
import { useEffect, useState } from 'react';

const BUTTONS_HEIGHT = 50;

const buttonStyle = {
  border: '1px solid #9a6fb0',
  borderRadius: '3px',
  padding: '4px 8px',
  margin: '10px 2px',
  fontSize: 14,
  color: '#9a6fb0',
  opacity: 0.7,
};

export const PopulationPyramidArtDemo = ({ width = 700, height = 400 }) => {
  const [data, setData] = useState([]);

  const [selectedGroup, setSelectedGroup] = useState('ADB region: South Asia');

  useEffect(() => {
    // Load CSV data
    csv(
      'https://raw.githubusercontent.com/holtzy/react-graph-gallery/main/data/population-pyramid-percentage.csv'
    )
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error loading the CSV data', error);
      });
  }, []);

  const allGroups = [...new Set(data.map((d) => d.Location))].sort();

  return (
    <>
      <div style={{ height: BUTTONS_HEIGHT }}>
        <button
          style={buttonStyle}
          onClick={() => setSelectedGroup('ADB region: South Asia')}
        >
          South Asia
        </button>
        <button
          style={buttonStyle}
          onClick={() => setSelectedGroup('Belt-Road Initiative: Africa')}
        >
          Africa
        </button>
        <button style={buttonStyle} onClick={() => setSelectedGroup('BRICS')}>
          BRICS
        </button>
      </div>
      <PopulationPyramid
        data={data}
        width={width}
        height={height}
        selectedGroup={selectedGroup}
      />
    </>
  );
};
