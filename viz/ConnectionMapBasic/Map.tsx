import * as d3 from 'd3';
import { FeatureCollection } from 'geojson';

type MapProps = {
  width: number;
  height: number;
  data: FeatureCollection;
  connectionData: {
    long1: number;
    long2: number;
    lat1: number;
    lat2: number;
  }[];
};

const CONNECTION_DATA = {
  start: [2.3522, 48.8566], // Paris
  end: [-74.006, 40.7128], // New York
};

export const Map = ({ width, height, data, connectionData }: MapProps) => {
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

  const connectionSvgElements = connectionData.map((connection, i) => {
    const path = geoPathGenerator({
      type: 'LineString',
      coordinates: [
        [connection.long1, connection.lat1],
        [connection.long2, connection.lat2],
      ],
    });

    return (
      <path
        key={i}
        d={path ?? undefined}
        stroke="#cb1dd1"
        strokeWidth={2}
        fill="none"
      />
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {backgroundMapSvgElements}
        {connectionSvgElements}
      </svg>
    </div>
  );
};
