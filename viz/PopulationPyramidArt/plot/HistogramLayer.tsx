import { ScaleLinear, scaleBand } from 'd3';
import { RectItem } from './RectItem';
import { useMemo } from 'react';
import { DataItem } from '../types';

type HistogramLayerProps = {
  data: DataItem[];
  height: number;
  xScaleFemale: ScaleLinear<number, number, never>;
  xScaleMale: ScaleLinear<number, number, never>;
};

export const HistogramLayer = ({
  data,
  xScaleFemale,
  xScaleMale,
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

  const allRectMales = data.map((d) => {
    return (
      <RectItem
        x={xScaleMale(Number(d.PopMale))}
        y={yScale(d.AgeGrpStart)}
        width={xScaleMale(0) - xScaleMale(Number(d.PopMale))}
        height={8}
        opacity={0.5}
        color="white"
      />
    );
  });

  return (
    <>
      {allRectFemales}
      {allRectMales}
    </>
  );
};
