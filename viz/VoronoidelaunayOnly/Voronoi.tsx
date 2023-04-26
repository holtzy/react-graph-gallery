import { useMemo } from "react";
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

  const allCircles = data.map((d, i) => {
    return <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={4} />;
  });

  const delaunay = useMemo(() => {
    const formattedData = data.map((d) => [xScale(d.x), yScale(d.y)]);
    return Delaunay.from(formattedData);
  }, []);

  const delaunayPath = delaunay.render();

  const allDelaunayShapes = (
    <path d={delaunayPath} stroke="grey" fill="transparent" opacity={0.8} />
  );

  return (
    <svg width={width} height={height}>
      {allCircles}
      {allDelaunayShapes}
    </svg>
  );
};
