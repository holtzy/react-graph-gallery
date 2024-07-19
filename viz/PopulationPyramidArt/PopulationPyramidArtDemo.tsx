import { csv } from 'd3';
import { DataItem, PopulationPyramid } from './PopulationPyramid';
import { useEffect, useMemo, useRef, useState } from 'react';
import { HorizontalTabBar } from './HorizontalTabBar';
import { Legend } from './Legend';
import { useDimensions } from 'hook/use-dimensions';

export const PopulationPyramidArtDemo = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [selectedGroup, setSelectedGroup] = useState(0);
  const [isForecastEnabled, setIsForecastEnabled] = useState(true);
  const [highlightedYear, setHighlightedYear] = useState<number | undefined>();

  const chartRef = useRef(null);
  const chartSize = useDimensions(chartRef);

  const allGroups = useMemo(() => {
    return [...new Set(data.map((d) => d.Location))].sort();
  }, [data]);

  const franceId = allGroups.findIndex((g) => g === 'France');
  const bahrainId = allGroups.findIndex((g) => g === 'Bahrain');
  const japanId = allGroups.findIndex((g) => g === 'Japan');
  const indiaId = allGroups.findIndex((g) => g === 'India');
  const nigeriaId = allGroups.findIndex((g) => g === 'Nigeria');

  const allGroupsWithCode = useMemo(() => {
    return [
      ...new Set(
        data.map((d) => {
          return d.Location + '---' + d.ISO2_code;
        })
      ),
    ];
  }, [data]);

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

  const plot = (
    <div ref={chartRef} className="w-full flex-grow">
      <PopulationPyramid
        data={filteredData || data}
        width={chartSize.width}
        height={chartSize.height}
        selectedGroup={allGroups[selectedGroup]}
        highlightedYear={highlightedYear}
      />
    </div>
  );

  const tabBar = (
    <div className="relative w-full flex flex-col justify-center h-12">
      <HorizontalTabBar
        selectedItem={selectedGroup}
        items={allGroupsWithCode}
        setSelectedItem={setSelectedGroup}
      />
    </div>
  );

  const introduction = (
    <div className="text-white text-sm">
      <p className="text-gray-400 text-xl uppercase">Watch the world...</p>
      <p className="text-7xl whitespace-nowrap">Getting older</p>
      <div className="mt-12">
        <p>
          Some countries are experiencing an{' '}
          <a
            onClick={() => {
              setSelectedGroup(japanId);
            }}
            className="cursor-pointer text-blue-400 hover:text-blue-500 hover:underline"
          >
            aging population
          </a>
          , while others are in the midst of a{' '}
          <a
            onClick={() => {
              setSelectedGroup(nigeriaId);
            }}
            className="cursor-pointer text-blue-400 hover:text-blue-500 hover:underline"
          >
            baby boom
          </a>
          .
        </p>
        <p>
          Some face unusual demographic{' '}
          <a
            onClick={() => {
              setSelectedGroup(bahrainId);
            }}
            className="cursor-pointer text-blue-400 hover:text-blue-500 hover:underline"
          >
            shifts
          </a>{' '}
          when some others are surprisingly{' '}
          <a
            onClick={() => {
              setSelectedGroup(franceId);
            }}
            className="cursor-pointer text-blue-400 hover:text-blue-500 hover:underline"
          >
            stable
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
  );

  const howToRead = (
    <div>
      <p>How to read</p>
      <div className="flex gap-2">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  );

  const countryName = (
    <div className="h-24 flex flex-col justify-center ">
      <p className="text-xl uppercase text-white font-light">
        {allGroups[selectedGroup]}
      </p>
    </div>
  );

  return (
    <>
      {/* Small Screen */}
      <div className="block md:hidden">
        <p className="text-white">SMALL SCREEN</p>
      </div>
      {/* Medium Screen */}
      <div className="hidden md:block lg:hidden">
        <p className="text-white">MEDIUM SCREEN</p>
      </div>
      {/* Large Screen */}
      <div className="relative h-full w-full hidden lg:block ">
        <div className="relative h-full w-full flex flex-row justify-center items-start">
          <div className="w-96 overflow-visible mt-24 transform translate-x-20">
            {introduction}
            <div className="ml-24 mt-8">
              <Legend setHighlightedYear={setHighlightedYear} />
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center overflow-hidden  h-full">
            {plot}
            {tabBar}
          </div>
        </div>
      </div>
    </>
  );
};
