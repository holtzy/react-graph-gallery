import { useMemo, useState } from 'react';
import { LineItem } from './LineItem';
import { DataItem } from '../types';
import { ScaleLinear, line, scaleLinear } from 'd3';
import { colorScale, opacityScale } from '../utils';
import styles from './lines-layer.module.css';

type LinesLayerProps = {
  data: DataItem[];
  width: number;
  height: number;
  xScaleFemale: ScaleLinear<number, number, never>;
  xScaleMale: ScaleLinear<number, number, never>;
  highlightedYear: number | undefined;
};

export const LinesLayer = ({
  data,
  xScaleFemale,
  xScaleMale,
  highlightedYear,
  width,
  height,
}: LinesLayerProps) => {
  const [mouseY, setMouseY] = useState<number | null>(null);

  const yScale = useMemo(() => {
    return scaleLinear().range([height, 0]).domain([0, 100]);
  }, [height]);

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
          key={'male-' + year}
          path={path}
          color={colorScale(Number(year))}
          opacity={1}
          hasDelay={true}
        />
      );
    });
  }, [allYears, data, width, height]);

  const allLinePathFemale = useMemo(() => {
    return allYears.map((year) => {
      const path = lineBuilderFemale(data.filter((d) => d.Time === year));
      return (
        <LineItem
          key={'female-' + year}
          path={path}
          color={colorScale(Number(year))}
          opacity={1}
          hasDelay={true}
        />
      );
    });
  }, [allYears, data, width, height]);

  const highlightedPathMale = lineBuilderMale(
    data.filter((d) => d.Time === String(highlightedYear))
  );
  const highlightedPathFemale = lineBuilderFemale(
    data.filter((d) => d.Time === String(highlightedYear))
  );

  const handleMouseMove = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    const { clientY } = event;
    const { top } = event.target.getBoundingClientRect();
    const mousePosY = clientY - top;

    // Ensure mousePosY is within boundsHeight
    if (mousePosY >= 0 && mousePosY <= height) {
      setMouseY(mousePosY);
    }
  };

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

      <g
        width={width}
        height={height}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMouseY(null)}
      >
        {/* A transparent rect to capture mouse events */}
        <rect width="100%" height="100%" fill="transparent" />

        {mouseY && (
          <g>
            <line
              x1={100}
              x2={width - 100}
              y1={mouseY}
              y2={mouseY}
              stroke="white"
              strokeDasharray="5,5"
            />
            <text
              x={width - 100 - 70}
              y={mouseY - 10}
              fill="white"
              fontSize={12}
            >
              {Math.round(yScale.invert(mouseY)) + ' years old'}
            </text>
          </g>
        )}
      </g>
    </>
  );
};
