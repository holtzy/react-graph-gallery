import { useMemo } from 'react';
import * as d3 from 'd3';
import { DumbbellItem } from './DumbbellItem';

const MARGIN = { top: 30, right: 30, bottom: 30, left: 70 };

type DumbbellProps = {
  width: number;
  height: number;
  data: { name: string; value1: number; value2: number }[];
};

export const Dumbbell = ({ width, height, data }: DumbbellProps) => {
  // bounds = area inside the graph axis = calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis is for groups since the barplot is horizontal
  const groups = data.map((d) => d.name).sort();
  const yScale = useMemo(() => {
    return d3.scaleBand().domain(groups).range([0, boundsHeight]);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 120]).range([0, boundsWidth]);
  }, [data, width]);

  // Build the shapes
  const allShapes = data.map((d) => {
    return (
      <DumbbellItem
        key={d.name}
        name={d.name}
        xValue1={xScale(d.value1)}
        xValue2={xScale(d.value2)}
        y={yScale(d.name)}
      />
    );
  });

  const selectedData = data[0];
  const selectedShape = (
    <DumbbellItem
      name={selectedData.name}
      xValue1={xScale(selectedData.value1)}
      xValue2={xScale(selectedData.value2)}
      y={yScale(selectedData.name)}
    />
  );

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {allShapes}
          {selectedShape}
        </g>
      </svg>
    </div>
  );
};
