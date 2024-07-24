import { useState } from 'react';
import { ResponsivePopulationPyramid } from '../PopulationPyramid';
import { Legend } from '../plot/Legend';
import { DataItem } from '../types';

type OldCountrySectionProps = {
  data: DataItem[];
};

export const OldCountrySection = ({ data }: OldCountrySectionProps) => {
  const [highlightedYear, setHighlightedYear] = useState<number | undefined>();

  return (
    <div className="relative">
      <div className="narrowWrapper py-24 flex flex-col justify-center items-start">
        <p className="text-gray-400 text-xl uppercase">
          getting old ain't funny
        </p>
        <p className="text-7xl">Aging Nations</p>
        <p>
          On the other hand, many countries are experiencing significant
          demographic shifts, with populations aging at an unprecedented rate.
        </p>
        <p>
          Nations such as Japan, Germany, Italy, and Spain are at the forefront
          of this trend, with a notable rise in the median age of their
          citizens.
        </p>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="grid grid-cols-3 h-96 w-full max-w-7xl px-8">
          {['France', 'Italy', 'Japan'].map((country) => {
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

      <div className="narrowWrapper mt-40">
        <p>
          This shift is primarily due to longer <b>life expectancies</b> and
          declining <b>birth rates</b>. Countries experiencing rapid economic
          development, like China and South Korea, are also seeing similar
          trends.
        </p>
        <p>
          The implications of an aging population are profound, impacting
          healthcare, social services, and economic stability, making it crucial
          for policymakers and societies to understand and address these
          changes.
        </p>
      </div>
    </div>
  );
};
