import { useMemo, useState } from "react";
import * as d3 from "d3";
import { Delaunay } from "d3";

type VoronoiProps = {
  width: number;
  height: number;
  data: { x: number; y: number }[];
};

export const Voronoi = ({ width, height, data }: VoronoiProps) => {
  const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([0, height]);

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
    return delaunay.voronoi([0, 0, width, height]);
  }, [delaunay, width, height]);

  const voronoiCells = data.map((d, i) => {
    const path = voronoi.renderCell(i);
    return (
      <path
        key={i}
        d={path}
        stroke="grey"
        fill="transparent"
        opacity={0.1}
        onMouseOver={() => {
          setHoveredItem(i);
        }}
      />
    );
  });

  const allCircles = data.map((d, i) => {
    return (
      <>
        <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={4} />
        {hoveredItem === i && (
          <circle
            key={i}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r={10}
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
      {allCircles}
      {voronoiCells}
    </svg>
  );
};
