import { csv } from 'd3';
import { DataItem, PopulationPyramid } from './PopulationPyramid';
import { useEffect, useMemo, useRef, useState } from 'react';
import { HorizontalTabBar } from './HorizontalTabBar';
import { Legend } from './Legend';
import { useDimensions } from 'hook/use-dimensions';
import { bahrainData } from './bahrainData';
import { dummyData } from './dummyData';
import { ExplanationSection } from './ExplanationSection';

export const PopulationPyramidArtDemo = () => {
  const [data, setData] = useState<DataItem[]>([]); // used only for datafetching
  const [selectedData, setSelectedData] = useState<DataItem[]>(dummyData); // the data that is actually passed to the plot
  const [selectedGroup, setSelectedGroup] = useState(10);
  const [isForecastEnabled, setIsForecastEnabled] = useState(true);
  const [highlightedYear, setHighlightedYear] = useState<number | undefined>();

  const section3Ref = useRef(null);

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

  // Load bahrain data 1 sec after the dummy data to trigger an animation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSelectedData(bahrainData);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

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
    const newData = data.filter((d) => d.Location === allGroups[selectedGroup]);
    setSelectedData(newData);
  }, [data, selectedGroup]);

  const plot = (
    <div ref={chartRef} className="w-full h-full max-w-5xl">
      {chartSize.width > 0 && (
        <PopulationPyramid
          data={selectedData}
          width={chartSize.width}
          height={chartSize.height}
          highlightedYear={highlightedYear}
          isHistogramEnabled={false}
          isLineEnabled={true}
        />
      )}
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
      <div className="mt-4 max-w-lg text-center opacity-70">
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

  return (
    <>
      <div className="relative pt-32">
        {introduction}
        {tabBar}
        <div
          className="relative flex justify-center"
          style={{ height: `calc(100vh - 100px)`, maxHeight: 900 }}
        >
          {plot}
        </div>

        <div className="fixed top-1/2 left-10 transform -translate-x-1/2">
          <Legend setHighlightedYear={setHighlightedYear} />
        </div>

        <ExplanationSection />
      </div>
    </>
  );
};
