import * as d3 from 'd3';
import { FeatureCollection } from 'geojson';
import { Circle } from './Circle';

const BUBBLE_MIN_SIZE = 4;
const BUBBLE_MAX_SIZE = 40;
const COLOR = '#cb1dd1';

type MapProps = {
  width: number;
  height: number;
  geoData: FeatureCollection;
  numData: {
    city: string;
    coordinates: [number, number];
    year: number;
    value: number;
  }[];
};

export const Map = ({ width, height, geoData, numData }: MapProps) => {
  // TODO: the centering is innacurate and I do not know why
  const parisCoordinates = [2.3488, 48.85341] as [number, number];
  const projection = d3.geoMercator().scale(width).center(parisCoordinates);

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
    .map((city, i) => {
      // translate GPS coordinate in 2d coordinates on my chart:
      const [x, y] = projection(city.coordinates);

      // Draw a circle
      return (
        <Circle
          key={city.city}
          r={sizeScale(city.value)}
          cx={x}
          cy={y}
          color={COLOR}
        />
      );
    });

  return (
    <div>
      <svg width={width} height={height}>
        {allSvgPaths}
        {allShapes}{' '}
        <rect
          x={0}
          width={width}
          y={0}
          height={height}
          color={COLOR}
          stroke="black"
          fill="none"
        />
      </svg>
    </div>
  );
};
