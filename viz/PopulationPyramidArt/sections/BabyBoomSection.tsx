import { useState } from 'react';
import { ResponsivePopulationPyramid } from '../PopulationPyramid';
import { Legend } from '../plot/Legend';
import { DataItem } from '../types';

type BabyBoomSectionProps = {
  data: DataItem[];
};

export const BabyBoomSection = ({ data }: BabyBoomSectionProps) => {
  const [highlightedYear, setHighlightedYear] = useState<number | undefined>();

  return (
    <div className="relative">
      <div className="wrapper  py-24 flex flex-col justify-center items-start">
        <p className="text-gray-400 text-xl uppercase">ok Boomer!</p>
        <p className="text-7xl">Old countries</p>

        <p>Some countries are old my friend</p>
      </div>
      <div className="relative w-full flex justify-center">
        <div className="grid grid-cols-3 h-96 w-full max-w-7xl px-8">
          {['Sint Maarten', 'Monaco', 'Qatar'].map((country) => {
            return (
              <div key={country} className="relative w-full h-full max-w-5xl">
                <ResponsivePopulationPyramid
                  data={data.filter((d) => d.Location === country)}
                  highlightedYear={highlightedYear}
                  isHistogramEnabled={false}
                  isLineEnabled={true}
                />
                <p className="uppercase text-xl text-center">{country}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute top-1/2 left-10 transform -translate-x-1/2">
        <Legend setHighlightedYear={setHighlightedYear} />
      </div>
    </div>
  );
};

// ['France', 'Italy', 'Japan']
// ['Nigeria', 'Gabon', 'India']
