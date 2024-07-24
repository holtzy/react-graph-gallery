import { useState } from 'react';
import { ResponsivePopulationPyramid } from '../PopulationPyramid';
import { Legend } from '../plot/Legend';
import { DataItem } from '../types';
import { HorizontalTabBar } from '../HorizontalTabBar';

const weirdCountries = ['Sint Maarten', 'Quatar', 'Monaco'];

type WeirdosSectionProps = {
  data: DataItem[];
  allGroupsWithCode: string[];
};

export const WeirdosSection = ({
  data,
  allGroupsWithCode,
}: WeirdosSectionProps) => {
  const [highlightedYear, setHighlightedYear] = useState<number | undefined>();
  const [selectedGroup, setSelectedGroup] = useState(10);

  const tabBar = (
    <div className="relative w-full h-12 flex justify-center">
      <HorizontalTabBar
        selectedItem={selectedGroup}
        items={allGroupsWithCode} // .filter((d) => weirdCountries.includes(d))
        setSelectedItem={setSelectedGroup}
      />
    </div>
  );

  return (
    <div className="relative py-60">
      <div className="wrapper  flex flex-col justify-center items-start">
        <p className="text-gray-400 text-xl uppercase">Unexpected</p>
        <p className="text-7xl">The weirdest countries</p>
        <p>Some countries are old my friend</p>
      </div>
      <div className="relative w-full max-w-5xl" style={{ height: 700 }}>
        {tabBar}
        <ResponsivePopulationPyramid
          data={data
            .filter((d) => d.Location === allGroupsWithCode[selectedGroup])
            .filter((d) => Number(d.Time) === 2000)}
          highlightedYear={highlightedYear}
          isHistogramEnabled={true}
          isLineEnabled={false}
          histogramOpacity={0.8}
        />
      </div>
      <div className="absolute top-1/2 left-10 transform -translate-x-1/2">
        <Legend setHighlightedYear={setHighlightedYear} />
      </div>
    </div>
  );
};
