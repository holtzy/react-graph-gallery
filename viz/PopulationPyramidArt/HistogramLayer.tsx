import { ScaleLinear, scaleBand } from 'd3';
import { RectItem } from './RectItem';
import { DataItem } from './types';
import { useMemo } from 'react';

type HistogramLayerProps = {
  data: DataItem[];
  height: number;
  xScaleFemale: ScaleLinear<number, number, never>;
};

export const HistogramLayer = ({
  data,
  xScaleFemale,
  height,
}: HistogramLayerProps) => {
  const allAges = useMemo(() => {
    return [...new Set(data.map((d) => d.AgeGrpStart))].sort();
  }, [data]);

  const yScale = scaleBand().range([height, 0]).domain(allAges).padding(0.01);

  const allRectFemales = data.map((d) => {
    return (
      <RectItem
        x={xScaleFemale(0)}
        y={yScale(d.AgeGrpStart)}
        width={xScaleFemale(Number(d.PopFemale)) - xScaleFemale(0)}
        height={8}
        opacity={1}
        color="white"
      />
    );
  });

  return <>{allRectFemales}</>;
};
