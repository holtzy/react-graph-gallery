import { useMemo } from "react";
import * as d3 from "d3";
import { Delaunay } from "d3";

type VoronoiProps = {
  width: number;
  height: number;
  data: { x: number; y: number }[];
};

export const Voronoi = ({ width, height, data }: VoronoiProps) => {
  console.log({ data });

  const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([0, height]);

  const allCircles = data.map((d, i) => {
    return <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={4} />;
  });

  const delaunay = useMemo(() => {
    const formattedData = data.map((d) => [xScale(d.x), yScale(d.y)]);
    return Delaunay.from(formattedData);
  }, []);
  console.log({ delaunay });

  const delaunayPath = delaunay.render();
  console.log({ delaunayPath });

  const allDelaunayPath = (
    <path d={delaunayPath} stroke="grey" fill="transparent" opacity={0.2} />
  );

  const voronoi = useMemo(() => {
    return delaunay.voronoi([0, 0, width, height]);
  }, [data]);
  console.log({ voronoi });

  const voronoiPath = voronoi.render();
  console.log({ voronoiPath });

  const allVoronoiPath = (
    <path d={voronoiPath} stroke="black" fill="transparent" />
  );

  return (
    <svg width={width} height={height}>
      {allCircles}
      {allDelaunayPath}
      {allVoronoiPath}
    </svg>
  );
};
