import * as d3 from 'd3';
import { FeatureCollection } from 'geojson';

const BUBBLE_MIN_SIZE = 4;
const BUBBLE_MAX_SIZE = 40;
const COLOR = '#cb1dd1';

type MapProps = {
  width: number;
  height: number;
  geoData: FeatureCollection;
  numData: { code: string; value: number }[];
};

export const Map = ({ width, height, geoData, numData }: MapProps) => {
  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI - 20)
    .center([10, 55]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const allSvgPaths = geoData.features
    .filter((shape) => shape.id !== 'ATA')
    .map((shape) => {
      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape)}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill={'lightGrey'}
          fillOpacity={1}
        />
      );
    });

  // Bubble Size scale uses scaleSqrt to have the area proportional to the value
  const [min, max] = d3.extent(numData.map((d) => d.value)) as [number, number];
  const sizeScale = d3
    .scaleSqrt()
    .domain([min, max])
    .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);

  const allShapes = numData
    .sort((a, b) => b.value - a.value)
    .map((region, i) => {
      // Find the corresponding geoData information
      const regionGeoData = geoData.features.find(
        (geoRegion) => geoRegion.id === region.code
      );
      if (!regionGeoData) {
        return;
      }

      // Find the centroid of the region
      const centroid = geoPathGenerator.centroid(regionGeoData);

      // Draw a circle
      return (
        <circle
          key={i}
          r={sizeScale(region.value)}
          cx={centroid[0]}
          cy={centroid[1]}
          opacity={1}
          stroke={COLOR}
          fill={COLOR}
          fillOpacity={0.2}
          strokeWidth={1}
        />
      );
    });

  return (
    <div>
      <svg width={width} height={height}>
        {allSvgPaths}
        {allShapes}
      </svg>
    </div>
  );
};
