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

  // Not very clean
  // But I need the ISO2_code somewhere to get the flag in the TabBar
  const allGroupsWithCode = useMemo(() => {
    return [
      ...new Set(
        data.map((d) => {
          return d.Location + '---' + d.ISO2_code;
        })
      ),
    ].sort();
  }, [data]);

  const franceId = allGroups.findIndex((g) => g === 'France');
  const bahrainId = allGroups.findIndex((g) => g === 'Bahrain');
  const japanId = allGroups.findIndex((g) => g === 'Japan');
  const nigeriaId = allGroups.findIndex((g) => g === 'Nigeria');

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
    <div ref={chartRef} className="w-full h-full max-w-5xl">
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
    <div className="relative w-full h-12 flex justify-center">
      <HorizontalTabBar
        selectedItem={selectedGroup}
        items={allGroupsWithCode}
        setSelectedItem={setSelectedGroup}
      />
    </div>
  );

  const introduction = (
    <div className="text-white text-sm flex flex-col justify-center items-center">
      <p className="text-gray-400 text-xl uppercase">Watch the world...</p>
      <p className="text-7xl whitespace-nowrap">Getting older</p>
      <div className="mt-4 max-w-lg text-center opacity-40">
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
          . Some face unusual demographic{' '}
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
          . Dive into the intriguing patterns of global population dynamics with
          this captivating set of lines.
        </p>
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
      <div className="relative hidden lg:block pt-32">
        {introduction}
        {tabBar}
        <div
          className="relative flex justify-center"
          style={{ height: `calc(100vh - 100px)` }}
        >
          {plot}
        </div>
        <div className="fixed top-1/2 left-10 transform -translate-x-1/2">
          <Legend setHighlightedYear={setHighlightedYear} />
        </div>
      </div>
    </>
  );
};
