import { useState } from 'react';
import {
  badRepartitionData,
  curveData,
  data as initialData,
  outlierData,
} from './data';
import { Scatterplot } from './Scatterplot';
import { Button } from '@/component/UI/button';

const dataset = [
  { name: 'Curve', data: curveData },
  { name: 'Bad repartition', data: badRepartitionData },
  { name: 'Linear', data: initialData },
  { name: 'Outlier', data: outlierData },
];

export const ScatterplotR2PlaygroundDemo = ({ width = 700, height = 400 }) => {
  const [data, setData] = useState(initialData);

  return (
    <div>
      <div
        className="flex gap-2 justify-center w-full items-center"
        style={{ height: 80 }}
      >
        {dataset.map((d, i) => {
          return (
            <Button
              key={i}
              variant={data === d.data ? 'default' : 'outline-solid'}
              size="sm"
              onClick={() => setData(d.data)}
            >
              {d.name}
            </Button>
          );
        })}
      </div>

      <Scatterplot
        data={data}
        width={width}
        height={height - 80}
        setData={setData}
      />
    </div>
  );
};
