import { useMemo } from 'react';
import { LineItem } from './LineItem';
import { DataItem } from '../types';
import { ScaleLinear, line } from 'd3';
import { colorScale, opacityScale } from '../utils';
import styles from './lines-layer.module.css';

type LinesLayerProps = {
  data: DataItem[];
  yScale: ScaleLinear<number, number, never>;
  xScaleFemale: ScaleLinear<number, number, never>;
  xScaleMale: ScaleLinear<number, number, never>;
  highlightedYear: number | undefined;
};

export const LinesLayer = ({
  data,
  yScale,
  xScaleFemale,
  xScaleMale,
  highlightedYear,
}: LinesLayerProps) => {
  const allYears = useMemo(() => {
    return [...new Set(data.map((d) => d.Time))].sort();
  }, [data]);

  const lineBuilderMale = line<DataItem>()
    .x((d) => xScaleMale(Number(d.PopMale)))
    .y((d) => yScale(Number(d.AgeGrpStart)));

  const lineBuilderFemale = line<DataItem>()
    .x((d) => xScaleFemale(Number(d.PopFemale)))
    .y((d) => yScale(Number(d.AgeGrpStart)));

  const allLinePathMale = useMemo(() => {
    return allYears.map((year) => {
      const path = lineBuilderMale(data.filter((d) => d.Time === year));
      return (
        <LineItem
          path={path}
          color={colorScale(Number(year))}
          opacity={1}
          hasDelay={true}
        />
      );
    });
  }, [allYears, data]);

  const allLinePathFemale = useMemo(() => {
    return allYears.map((year) => {
      const path = lineBuilderFemale(data.filter((d) => d.Time === year));
      return (
        <LineItem
          path={path}
          color={colorScale(year)}
          opacity={1}
          hasDelay={true}
        />
      );
    });
  }, [allYears, data]);

  const highlightedPathMale = lineBuilderMale(
    data.filter((d) => d.Time === String(highlightedYear))
  );
  const highlightedPathFemale = lineBuilderFemale(
    data.filter((d) => d.Time === String(highlightedYear))
  );

  return (
    <>
      <g className={highlightedYear ? styles.hasHighlight : ''}>
        {allLinePathMale}
        {allLinePathFemale}
      </g>

      {highlightedYear && (
        <>
          <LineItem path={highlightedPathMale} color={'red'} opacity={1} />
          <LineItem path={highlightedPathFemale} color={'red'} opacity={1} />
        </>
      )}
    </>
  );
};
