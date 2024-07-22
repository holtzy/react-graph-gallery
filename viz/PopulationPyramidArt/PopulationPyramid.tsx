import * as d3 from 'd3';
import { LineItem } from './LineItem';
import { colorScale, opacityScale } from './utils';
import { useMemo, useState } from 'react';
import styles from './population-pyramid.module.css';
import { RectItem } from './RectItem';

const MARGIN = { top: 30, right: 0, bottom: 30, left: 0 };

export type DataItem = {
  AgeGrpStart: string;
  Location: string;
  ISO2_code: string;
  Time: string;
  PopFemale: string;
  PopMale: string;
};

type PopulationPyramidProps = {
  width: number;
  height: number;
  data: DataItem[];
  highlightedYear: number | undefined;
  isHistogramEnabled?: boolean;
};

export const PopulationPyramid = ({
  width,
  height,
  data,
  highlightedYear,
  isHistogramEnabled,
}: PopulationPyramidProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const [mouseY, setMouseY] = useState(null);

  const allYears = useMemo(() => {
    return [...new Set(data.map((d) => d.Time))].sort();
  }, [data]);

  const yScale = useMemo(() => {
    return d3.scaleLinear().range([boundsHeight, 0]).domain([0, 100]);
  }, [boundsHeight]);

  // Males on the left
  const xScaleMale = d3
    .scaleLinear()
    .range([0, boundsWidth / 2 - 10])
    .domain([10, 0]);

  const xScaleFemale = d3
    .scaleLinear()
    .range([boundsWidth / 2 + 10, boundsWidth])
    .domain([0, 10]);

  const lineBuilderMale = d3
    .line<DataItem>()
    .x((d) => xScaleMale(Number(d.PopMale)))
    .y((d) => yScale(Number(d.AgeGrpStart)));

  const lineBuilderFemale = d3
    .line<DataItem>()
    .x((d) => xScaleFemale(Number(d.PopFemale)))
    .y((d) => yScale(Number(d.AgeGrpStart)));

  const allLinePathMale = useMemo(() => {
    return allYears.map((year) => {
      const path = lineBuilderMale(data.filter((d) => d.Time === year));
      return (
        <LineItem
          path={path}
          color={colorScale(Number(year))}
          opacity={opacityScale(Number(year))}
        />
      );
    });
  }, [allYears, data, width, height]);

  const allLinePathFemale = useMemo(() => {
    return allYears.map((year) => {
      const path = lineBuilderFemale(data.filter((d) => d.Time === year));
      return (
        <LineItem
          path={path}
          color={colorScale(year)}
          opacity={opacityScale(year)}
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
    if (mousePosY >= 0 && mousePosY <= boundsHeight) {
      setMouseY(mousePosY);
    }
  };

  const allRectFemales = data.map((d) => {
    console.log('d', d);
    console.log(
      'xScaleFemale(Number(d.PopFemale))',
      xScaleFemale(Number(d.PopFemale))
    );
    return (
      <RectItem
        x={xScaleFemale(0)}
        y={yScale(Number(d.AgeGrpStart))}
        width={xScaleFemale(Number(d.PopFemale)) - xScaleFemale(0)}
        height={8}
        opacity={1}
        color="white"
      />
    );
  });

  return (
    <div className="relative">
      <svg width={width} height={height}>
        <text
          x={width / 2}
          y={15}
          fill="white"
          opacity={0.3}
          fontSize={10}
          alignmentBaseline="central"
          textAnchor="middle"
        >
          100 years old
        </text>
        <line
          x1={width / 2 - 5}
          y1={32}
          x2={width / 2 + 5}
          y2={32}
          stroke="white"
          opacity={1}
          strokeWidth={0.5}
        />

        <text
          x={width / 2}
          y={height - 15}
          fill="white"
          opacity={0.3}
          fontSize={10}
          alignmentBaseline="central"
          textAnchor="middle"
        >
          0 years old
        </text>
        <line
          x1={width / 2 - 5}
          y1={height - MARGIN.top}
          x2={width / 2 + 5}
          y2={height - MARGIN.top}
          stroke="white"
          opacity={1}
          strokeWidth={0.5}
        />

        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
          className={highlightedYear ? styles.hasHighlight : ''}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMouseY(null)}
        >
          {/* A transparent rect to capture mouse events */}
          <rect width="100%" height="100%" fill="transparent" />
          {allLinePathMale}
          {allLinePathFemale}
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

        {highlightedYear && (
          <g
            width={boundsWidth}
            height={boundsHeight}
            transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
          >
            <LineItem path={highlightedPathMale} color={'red'} opacity={1} />
            <LineItem path={highlightedPathFemale} color={'red'} opacity={1} />
          </g>
        )}

        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {allRectFemales}
        </g>
      </svg>
    </div>
  );
};
