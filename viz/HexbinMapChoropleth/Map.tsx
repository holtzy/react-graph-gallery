import * as d3 from 'd3';
import { FeatureCollection, Geometry } from 'geojson';

// List of additional properties that are specific to my geoJson file
type FeatureProps = {
  google_name: string;
  iso3166_2: string;
};

type MapProps = {
  width: number;
  height: number;
  geoData: FeatureCollection<Geometry, FeatureProps>;
  numData: { code: string; value: number }[];
};

export const Map = ({ width, height, geoData, numData }: MapProps) => {
  var colorScale = d3
    .scaleLinear<string, string, never>()
    .domain([3, 20])
    .range(['white', '#cb1dd1']);

  const projection = d3.geoMercator().scale(530).translate([1400, 660]);

  const geoPathGenerator = d3.geoPath().projection(projection);

  const allSvgPaths = geoData.features.map((shape) => {
    const regionData = numData.find(
      (region) => region.code === shape.properties.google_name
    );
    const color = regionData ? colorScale(regionData?.value) : 'lightgrey';

    const centroid = geoPathGenerator.centroid(shape);

    return (
      <>
        <path
          key={shape.id}
          d={geoPathGenerator(shape)}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill={color}
          fillOpacity={1}
        />
        <text
          x={centroid[0]}
          y={centroid[1]}
          fill="grey"
          fontSize={12}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {shape.properties.iso3166_2}
        </text>
      </>
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
