import * as d3 from "d3";

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

  return (
    <svg width={width} height={height}>
      {allCircles}
    </svg>
  );
};
