import { ScaleLinear, scaleBand } from 'd3';
import { RectItem } from './RectItem';
import { useMemo } from 'react';
import { DataItem } from '../types';

type HistogramLayerProps = {
  data: DataItem[];
  height: number;
  xScaleFemale: ScaleLinear<number, number, never>;
  xScaleMale: ScaleLinear<number, number, never>;
  histogramOpacity?: number;
};

export const HistogramLayer = ({
  data,
  xScaleFemale,
  xScaleMale,
  histogramOpacity = 1,
  height,
}: HistogramLayerProps) => {
  const allAges = useMemo(() => {
    return [...new Set(data.map((d) => d.AgeGrpStart))];
  }, [data]);

  const yScale = scaleBand().range([height, 0]).domain(allAges).padding(0.01);

  const allRectFemales = data.map((d) => {
    if (Number(d.PopFemale) === 0) {
      return null;
    }

    return (
      <RectItem
        key={'female-' + d.AgeGrpStart}
        x={xScaleFemale(0)}
        y={yScale(d.AgeGrpStart) || 0}
        width={xScaleFemale(Number(d.PopFemale)) - xScaleFemale(0)}
        height={8}
        opacity={histogramOpacity}
        color="white"
        value={Number(d.PopFemale)}
        orientation="right"
        center={xScaleFemale.range()[0]}
      />
    );
  });

  const allRectMales = data.map((d) => {
    if (Number(d.PopMale) === 0) {
      return null;
    }

    return (
      <RectItem
        key={'male-' + d.AgeGrpStart}
        x={xScaleMale(Number(d.PopMale))}
        y={yScale(d.AgeGrpStart) || 0}
        width={xScaleMale(0) - xScaleMale(Number(d.PopMale))}
        height={8}
        opacity={histogramOpacity}
        color="white"
        value={Number(d.PopMale)}
        orientation="left"
        center={xScaleMale.range()[1]}
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
