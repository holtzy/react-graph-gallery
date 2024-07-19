import { csv } from 'd3';
import { DataItem, PopulationPyramid } from './PopulationPyramid';
import { useEffect, useState } from 'react';
import { HorizontalTabBar } from './HorizontalTabBar';
import { Legend } from './Legend';

export const PopulationPyramidArtDemo = ({ width = 700, height = 400 }) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [selectedGroup, setSelectedGroup] = useState(0);
  const [isForecastEnabled, setIsForecastEnabled] = useState(false);
  const [highlightedYear, setHighlightedYear] = useState<number | undefined>();

  const allGroups = [...new Set(data.map((d) => d.Location))].sort();

  const franceId = allGroups.findIndex((g) => g === 'France');
  const bahreinId = allGroups.findIndex((g) => g === 'Bahrein');
  const japanId = allGroups.findIndex((g) => g === 'Japan');
  const indiaId = allGroups.findIndex((g) => g === 'India');
  const nigeriaId = allGroups.findIndex((g) => g === 'Nigeria');

  const allGroupsWithCode = [
    ...new Set(
      data.map((d) => {
        return d.Location + '---' + d.ISO2_code;
      })
    ),
  ];

  const filteredData = isForecastEnabled
    ? data
    : data.filter((d) => Number(d.Time) < 2024);

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
          items={allGroupsWithCode}
          setSelectedItem={setSelectedGroup}
        />
      </div>

      <br />

      <PopulationPyramid
        data={filteredData || data}
        width={width}
        height={height}
        selectedGroup={allGroups[selectedGroup]}
      />

      <Legend
        highlightedYear={highlightedYear}
        setHighlightedYear={setHighlightedYear}
      />

      <div className="text-white text-sm">
        <p className="text-xl">Population Pyramid</p>
        <div>
          <p>
            Some countries are experiencing an{' '}
            <a
              onClick={() => {
                setSelectedGroup(japanId);
              }}
              className="cursor-pointer"
            >
              aging population
            </a>
            , while others are in the midst of a{' '}
            <a
              onClick={() => {
                setSelectedGroup(nigeriaId);
              }}
              className="cursor-pointer"
            >
              baby boom
            </a>
            .
          </p>
          <p>
            Some face unusual{' '}
            <a
              onClick={() => {
                setSelectedGroup(bahreinId);
              }}
              className="cursor-pointer"
            >
              demographic shifts
            </a>
            .
          </p>
          <p>
            Dive into the intriguing patterns of global population dynamics with
            this captivating set of lines.
          </p>
          <p>
            A project by <a href="https://www.yan-holtz.com">Yan Holtz</a>
          </p>
          <p>Pro Tip: arrows to switch. Command K to search for a country.</p>
        </div>
      </div>
      <div>
        <p>How to read</p>
        <div className="flex gap-2">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
};
