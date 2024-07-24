import { useMemo, useState } from 'react';
import { ResponsivePopulationPyramid } from '../PopulationPyramid';
import { Legend } from '../plot/Legend';
import { DataItem } from '../types';
import { HorizontalTabBar } from '../HorizontalTabBar';

type WeirdosSectionProps = {
  data: DataItem[];
  allGroupsWithCode: string[];
};

export const WeirdosSection = ({
  data,
  allGroupsWithCode,
}: WeirdosSectionProps) => {
  const [highlightedYear, setHighlightedYear] = useState<number | undefined>();
  const [selectedGroup, setSelectedGroup] = useState(0);

  const weirdCountriesWithCode = allGroupsWithCode.filter((d) =>
    ['Sint Maarten', 'Qatar', 'Monaco', 'Japan', 'Bahrain', 'Italy'].includes(
      d.split('---')[0]
    )
  );

  const weirdCountries = weirdCountriesWithCode.map((c) => c.split('---')[0]);

  const selectedData = data
    .filter((d) => d.Location === weirdCountries[selectedGroup])
    .filter((d) => Number(d.Time) === 2024);

  const tabBar = useMemo(() => {
    return (
      <div className="relative w-full h-12 flex justify-center">
        <HorizontalTabBar
          selectedItem={selectedGroup}
          items={weirdCountriesWithCode}
          setSelectedItem={setSelectedGroup}
          isActive={false}
          hasGradient={false}
        />
      </div>
    );
  }, [selectedGroup]);

  return (
    <div className="relative py-60">
      <div className="narrowWrapper  flex flex-col justify-center items-start">
        <p className="text-gray-400 text-xl uppercase">Unexpected</p>
        <p className="text-7xl">Unusual patterns</p>
        <p>
          In the study of population dynamics, some countries exhibit unusual
          and unexpected age distribution patterns.
        </p>
        <p>
          These nations, such as Monaco, Qatar, and Bahrain, defy conventional
          population structures seen in most other regions. Their unique
          demographic profiles often result from specific socio-economic
          factors, such as high levels of immigration, economic specialization,
          or distinctive healthcare and social policies.
        </p>

        <p>
          <br />
        </p>

        {tabBar}
      </div>

      <div className="wrapper">
        <div className="w-full" style={{ height: 600 }}>
          <ResponsivePopulationPyramid
            data={selectedData}
            highlightedYear={highlightedYear}
            isHistogramEnabled={true}
            isLineEnabled={false}
            histogramOpacity={0.8}
          />
        </div>
      </div>

      <div className="absolute top-1/2 left-10 transform -translate-x-1/2">
        <Legend setHighlightedYear={setHighlightedYear} />
      </div>
    </div>
  );
};
