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
      <div className="narrowWrapper py-24 flex flex-col justify-center items-start">
        <p className="text-gray-400 text-xl uppercase">ok Boomer!</p>
        <p className="text-7xl">Baby booming</p>
        <p>
          Countries like Nigeria, Angola, and many other African nations are
          currently experiencing a significant <b>baby boom</b>.
        </p>
        <p>
          This demographic trend is characterized by a <b>high birth rate</b>{' '}
          and a <b>youthful population structure</b>. In these regions, the
          population pyramid is typically broad at the base, indicating a large
          proportion of children and young people.
        </p>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="grid grid-cols-3 h-96 w-full max-w-7xl px-8">
          {['Nigeria', 'Gabon', 'India'].map((country) => {
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
          Several factors contribute to this phenomenon, including improved
          healthcare, increased access to education, and cultural values that
          emphasize large families. As a result, these countries face unique
          challenges and opportunities.
        </p>
        <p>
          On the one hand, a youthful population can drive economic growth and
          innovation if properly harnessed. On the other hand, it also requires
          substantial investments in education, healthcare, and infrastructure
          to ensure sustainable development. Addressing these needs is crucial
          for capitalizing on the demographic dividend and avoiding potential
          socio-economic problems.
        </p>
      </div>
    </div>
  );
};

// ['France', 'Italy', 'Japan']
// ['Nigeria', 'Gabon', 'India']
