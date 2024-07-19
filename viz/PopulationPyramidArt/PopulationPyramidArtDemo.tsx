import { csv } from 'd3';
import { PopulationPyramid } from './PopulationPyramid';
import { useEffect, useState } from 'react';
import { HorizontalTabBar } from './HorizontalTabBar';

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
        <HorizontalTabBar
          selectedItem={selectedGroup}
          items={allGroups}
          setSelectedItem={setSelectedGroup}
        />
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
