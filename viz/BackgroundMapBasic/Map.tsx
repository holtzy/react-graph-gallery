import * as d3 from 'd3';

type MapProps = {
  width: number;
  height: number;
  data: any;
};

export const Map = ({ width, height, data }: MapProps) => {
  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI)
    .translate([width / 2, height / 2 + 50]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const allSvgPaths = data.features
    .filter((shape) => shape.id !== 'ATA')
    .map((shape) => {
      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape)}
          stroke="black"
          strokeWidth={0.5}
          fill="#cb1dd1"
          fillOpacity={0.7}
        />
      );
    });

  return (
    <div>
      <svg width={width} height={height}>
        {allSvgPaths}
      </svg>
    </div>
  );
};
