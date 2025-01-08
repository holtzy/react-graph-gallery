import { useState } from 'react';
import { badRepartitionData, curveData, data as initialData } from './data';
import { Scatterplot } from './Scatterplot';
import { Button } from '@/component/UI/button';

export const ScatterplotR2PlaygroundDemo = ({ width = 700, height = 400 }) => {
  const [data, setData] = useState(initialData);

  return (
    <div>
      <div>
        <Button onClick={() => setData(badRepartitionData)}>
          Bad X repartition
        </Button>
        <Button onClick={() => setData(curveData)}>Curve</Button>
      </div>
      <Scatterplot
        data={data}
        width={width}
        height={height}
        setData={setData}
      />
    </div>
  );
};
