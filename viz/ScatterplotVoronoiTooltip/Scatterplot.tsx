import { useMemo, useState } from 'react';
import * as d3 from 'd3';
import { Delaunay } from 'd3';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

type ScatterplotProps = {
  width: number;
  height: number;
  data: { x: number; y: number }[];
};

export const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = d3.scaleLinear().domain([0, 100]).range([0, boundsWidth]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([boundsHeight, 0]);

  //
  // Delaunay triangulation
  //
  const delaunay = useMemo(() => {
    const formattedData = data.map((d) => [xScale(d.x), yScale(d.y)]);
    return Delaunay.from(formattedData);
  }, [data]);

  //
  // Voronoi Diagram
  //
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const voronoi = useMemo(() => {
    return delaunay.voronoi([0, 0, boundsWidth, boundsHeight]);
  }, [delaunay, boundsWidth, boundsHeight]);

  const voronoiCells = data.map((d, i) => {
    const path = voronoi.renderCell(i);
    return (
      <path
        key={i}
        d={path}
        opacity={0.3}
        stroke="lightgrey" // use transparent for your final chart!
        fill="transparent"
        onMouseOver={() => {
          setHoveredItem(i);
        }}
      />
    );
  });

  const allCircles = data.map((d, i) => {
    return (
      <>
        <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={6} />
        {hoveredItem === i && (
          <circle
            key={i}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r={15}
            fill="transparent"
            stroke="red"
            strokeWidth={3}
          />
        )}
      </>
    );
  });

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
      >
        {/* Y axis */}
        <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />

        {/* X axis, use an additional translation to appear at the bottom */}
        <g transform={`translate(0, ${boundsHeight})`}>
          <AxisBottom
            xScale={xScale}
            pixelsPerTick={40}
            height={boundsHeight}
          />
        </g>

        {allCircles}

        {voronoiCells}
      </g>
    </svg>
  );
};
