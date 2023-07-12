import * as d3 from 'd3';
import { FeatureCollection } from 'geojson';

type MapProps = {
  width: number;
  height: number;
  data: FeatureCollection;
  projection: string;
};

export const Map = ({ width, height, data, projection }: MapProps) => {
  let selectedProjection;
  switch (projection) {
    case 'mercator':
      selectedProjection = d3.geoMercator().scale(140).center([2.34, 48.86]);
      break;
    case 'orthographic':
      selectedProjection = d3.geoOrthographic().scale(250).center([0, 20]);
      break;
    case 'conicConformal':
      selectedProjection = d3.geoConicConformal().scale(250).center([0, 20]);
      break;
    case 'naturalEarth':
      selectedProjection = d3.geoNaturalEarth1().scale(170).center([0, 20]);
      break;
  }

  const geoPathGenerator = d3.geoPath().projection(selectedProjection);

  const allSvgPaths = data.features
    .filter((shape) => shape.id !== 'ATA')
    .map((shape) => {
      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape)}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill="grey"
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
