import * as d3 from 'd3';
import { FeatureCollection } from 'geojson';

type MapProps = {
  width: number;
  height: number;
  data: FeatureCollection;
};

const CONNECTION_DATA = {
  start: [2.3522, 48.8566], // Paris
  end: [-74.006, 40.7128], // New York
};

export const Map = ({ width, height, data }: MapProps) => {
  const projection = d3
    .geoMercator()
    .scale(width / 2 / Math.PI - 40)
    .center([10, 35]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const backgroundMapSvgElements = data.features
    .filter((shape) => shape.id !== 'ATA')
    .map((shape) => {
      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape) ?? undefined}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill="grey"
          fillOpacity={0.7}
        />
      );
    });

  const connectionSvgPath = geoPathGenerator({
    type: 'LineString',
    coordinates: [CONNECTION_DATA.start, CONNECTION_DATA.end],
  });

  return (
    <div>
      <svg width={width} height={height}>
        {backgroundMapSvgElements}
        <path
          d={connectionSvgPath ?? undefined}
          stroke="#cb1dd1"
          strokeWidth={3}
          fill="none"
        />
      </svg>
    </div>
  );
};
