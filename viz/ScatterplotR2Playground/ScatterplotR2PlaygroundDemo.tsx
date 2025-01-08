import { useState } from 'react';
import { data as initialData } from './data';
import { Scatterplot } from './Scatterplot';

export const ScatterplotR2PlaygroundDemo = ({ width = 700, height = 400 }) => {
  const [data, setData] = useState(initialData);

  return (
    <Scatterplot data={data} width={width} height={height} setData={setData} />
  );
};
