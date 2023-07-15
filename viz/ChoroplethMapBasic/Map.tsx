import * as d3 from 'd3';
import { FeatureCollection } from 'geojson';

type MapProps = {
  width: number;
  height: number;
  geoData: FeatureCollection;
  numData: { code: string; value: number }[];
};

export const Map = ({ width, height, geoData, numData }: MapProps) => {
  var colorScale = d3
    .scaleThreshold<number, string>()
    .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
    .range(d3.schemeBlues[7]);

  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI - 20)
    .center([10, 55]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const allSvgPaths = geoData.features
    .filter((shape) => shape.id !== 'ATA')
    .map((shape) => {
      const regionData = numData.find((region) => region.code === shape.id);

      const color = regionData ? colorScale(regionData?.value) : 'lightgrey';

      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape)}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill={color}
          fillOpacity={1}
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
