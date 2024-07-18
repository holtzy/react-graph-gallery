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

  const [selectedGroup, setSelectedGroup] = useState(0);

  const allGroups = [...new Set(data.map((d) => d.Location))].sort();

  useEffect(() => {
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setSelectedGroup(selectedGroup + 1);
      } else if (event.key === 'ArrowLeft') {
        setSelectedGroup(selectedGroup - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGroup]);

  const groupSelectButtons = allGroups.map((grp, i) => {
    return (
      <button
        key={i}
        className="text-xs px-2 py-1 py-0  bg-black border border-white text-white rounded-lg whitespace-nowrap flex-shrink-0"
        onClick={() => setSelectedGroup(i)}
      >
        {grp}
      </button>
    );
  });

  return (
    <div className="flex flex-col items-center">
      <div>
        <p className="text-3xl uppercase text-white font-light">
          {allGroups[selectedGroup]}
        </p>
        <hr className="" />
      </div>

      <br />

      <div className="w-full flex justify-center">
        <div className="relative max-w-3xl">
          <div className="overflow-scroll w-full flex gap-1">
            {groupSelectButtons}
          </div>
          <div className="absolute inset-y-0 left-0 w-28 h-full  bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-28 h-full  bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>

      <PopulationPyramid
        data={data}
        width={width}
        height={height}
        selectedGroup={allGroups[selectedGroup]}
      />
    </div>
  );
};
