import { useState } from 'react';
import {
  badRepartitionData,
  curveData,
  data as initialData,
  outlierData,
} from './data';
import { Scatterplot } from './Scatterplot';
import { Button } from '@/component/UI/button';
import { Boxplot } from './Boxplot';

const dataset = [
  { name: 'Curve', data: curveData },
  { name: 'Bad repartition', data: badRepartitionData },
  { name: 'Linear', data: initialData },
  { name: 'Outlier', data: outlierData },
];

export const TTestPlaygroundDemo = ({ width = 700, height = 400 }) => {
  const [sampleSize, setSampleSize] = useState(1000);
  const [effectSize, setEffectSize] = useState(2);

  const vals1 = generateNormalDistribution(10 - effectSize / 2, 1, sampleSize);
  const vals2 = generateNormalDistribution(10 + effectSize / 2, 1, sampleSize);
  const data1 = vals1.map((v) => {
    return {
      name: 'A',
      value: v,
    };
  });
  const data2 = vals2.map((v) => {
    return {
      name: 'B',
      value: v,
    };
  });
  const data = data1.concat(data2);

  return (
    <div>
      <div
        className="flex gap-2 justify-center w-full items-center"
        style={{ height: 80 }}
      >
        {dataset.map((d, i) => {
          return (
            // <Button
            //   key={i}
            //   variant={data === d.data ? 'default' : 'outline'}
            //   size="sm"
            //   onClick={() => setData(d.data)}
            // >
            //   {d.name}
            // </Button>
            null
          );
        })}
      </div>

      <Boxplot data={data} width={width} height={height - 80} />
    </div>
  );
};

function generateNormalDistribution(
  mean: number,
  stdDev: number,
  count: number
) {
  const numbers = [];

  for (let i = 0; i < count; i++) {
    let u1 = Math.random();
    let u2 = Math.random();
    let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2); // Box-Muller transform
    let value = z0 * stdDev + mean;
    numbers.push(value);
  }

  return numbers;
}
