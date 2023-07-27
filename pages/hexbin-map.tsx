import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { ResponsiveExplanationSection } from '../component/ResponsiveExplanationSection';
import Link from 'next/link';
import { LinkAsButton } from 'component/LinkAsButton';
import { HexbinMapChoroplethDemo } from 'viz/HexbinMapChoropleth/HexbinMapChoropleth';
import { HexbinMapBackgroundDemo } from 'viz/HexbinMapBackground/HexbinMapBackground';

const graphDescription = (
  <>
    <p>
      A{' '}
      <a href="https://www.data-to-viz.com/graph/hexbinmap.html">hexbin map</a>{' '}
      is a visual representation of data that aggregates individual data points
      into <b>hexagonal bins</b> or cells, typically used for spatial analysis.
      It helps to condense large datasets and identify patterns or trends within
      specific geographic regions.
    </p>
    <p>
      <b>Two types of hexbin map exist</b>. The first one is based on a{' '}
      <code>geoJson</code>
      file that provides the <b>hexagon boundaries</b>. It is similar to a{' '}
      <a href="choropleth-map">choropleth map</a>, with hexagons instead of real
      regions. The second is actually a{' '}
      <a href="2d-density-plot">2d density chart</a>, but with GPS locations for
      the x and y coordinates.
    </p>
    <p>
      This page is a long form tutorial explaining how to build hexbin maps
      using <code>react</code> and <code>d3.js</code>. It provides interactive
      examples for both types of hexbin maps with code explanation and should
      get you started for your web app.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a hexbin map component with React and D3."
      seoDescription="A step-by-step guide to build your very own hexbin map component from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={'Hexbin Map'}
        description={graphDescription}
        chartType="hexbin"
      />

      {/*
      //
      // Hexbin map from geoJson
      //
      */}
      <h2 id="hexbin map">Hexbin map from a geoJson file</h2>
      <p>
        Drawing a map using react and d3.js usually relies on a{' '}
        <code>geoJson</code> file. This file format provides information for
        geographical regions. It stores the <b>2d coordinates</b> of shapes.
      </p>
      <p>This is the way it looks:</p>
      <CodeBlock code={snippetData} />
      <p>
        It is basically an object, with a <code>features</code> property that is
        of great interest. This prop is an <code>array</code>, each item of the
        array being a shape that we will be able to draw.
      </p>
      <p>
        In the case of a hexbin map, each shape is an <b>hexagon</b>. But
        drawing it with react and d3.js follows exactly the same principle as
        what's done for a classic background map.
      </p>
      <p>
        I strongly suggest to read the{' '}
        <Link href="/map">background map section</Link> of the gallery that
        provides in-depth explanations.
      </p>
      <LinkAsButton href={'/map'} isFilled size="sm">
        {'Map section'}
      </LinkAsButton>
      <p>
        <br />
        On top of that, here is an example coming with a sandbox to see it in
        action. Note the use of the <code>centroid()</code> function to find the
        baricenter of each US state. Very handy to position the hexagon label
        accurately 🔥.
      </p>
      <ChartOrSandbox
        VizComponent={HexbinMapBackgroundDemo}
        vizName={'HexbinMapBackground'}
        maxWidth={900}
        height={500}
        caption={
          'First very hexbin map made with d3.js and React. Check the map section for more code explanation.'
        }
      />

      {/*
      //
      // Hexbin choropleth map
      //
      */}
      <h2 id="hexbin choropleth">Hexbin choropleth map</h2>
      <p>
        The previous map looks good but does not provide a lot of value. What we
        usually need is to <b>color each region</b> (=hexagon) of the hexbin map
        according to a numeric value.
      </p>
      <p>
        This results in a <b>hexbin choropleth map</b>.
      </p>
      <p>
        The process is very close to what's done for a usual{' '}
        <Link href="/choropleth-map">choropleth map</Link>. So please check the
        related section of the gallery that provides a lot of explanations and
        examples.
      </p>
      <LinkAsButton href={'/choropleth-map'} isFilled size="sm">
        {'Choropleth section'}
      </LinkAsButton>
      <p>
        <br />
        Basically, a <b>second dataset</b> is used to store a numeric value for
        each region. Here, this value provides the mariage rate per 1000 people
        as explained in the{' '}
        <a href="https://www.data-to-viz.com/graph/hexbinmap.html">
          original R post
        </a>
        .
      </p>
      <p>
        Then, a <b>color scale</b> is created. When looping through each region
        of the <code>geoJson</code> file to draw them, the numeric value is
        retrieved and translated into a color thanks to the color scale.
      </p>
      <p>Here is the result:</p>
      <ChartOrSandbox
        VizComponent={HexbinMapChoroplethDemo}
        vizName={'HexbinMapChoropleth'}
        maxWidth={900}
        height={500}
        caption={
          'First very basic map made with d3.js and React. Check the map section for more code explanation.'
        }
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="bubbleMap" />

      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="bubbleMap" />
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="map" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
{
  "type": "FeatureCollection",
  "features": [
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-72.625738, 55.313204], // 7 2d coordinates for the heaxagon angles
              [-69.902864, 54.408434],
              [-69.902864, 52.537442],
              [-72.625738, 51.57081],
              [-75.348611, 52.537442],
              [-75.348611, 54.408434],
              [-72.625738, 55.313204],
            ],
          ],
        },
        properties: {
          iso3166_2: 'ME',
          google_name: 'Maine',
        },
      },
      ...next hexagon
  ]
}`.trim();

const snippetData2 = `
[
  {
    "name": "Antigua and Barbuda",
    "code": "ATG",
    "pop": 83039
  },
  {
    "name": "Algeria",
    "code": "DZA",
    "pop": 32854159
  },
  ...
]
}`.trim();

const snippetLegend = `
type BubbleLegendProps = {
  scale: d3.ScaleLinear<number, number, never>;
  tickNumber: number;
};

export const BubbleLegend = ({ scale, tickNumber }: BubbleLegendProps) => {
  const ticks = scale.ticks(tickNumber);
  const maxValue = ticks[ticks.length - 1];

  const diameter = scale(maxValue) * 2; // diameter of the biggest circle

  const dashWidth = diameter / 2 + 10;

  const allCircles = ticks.map((tick, i) => {
    const xCenter = diameter / 2;
    const yCircleTop = diameter - 2 * scale(tick);
    const yCircleCenter = diameter - scale(tick);

    return (
      <g key={i}>
        <circle
          cx={xCenter}
          cy={yCircleCenter}
          r={scale(tick)}
          fill="none"
          stroke="black"
        />
        <line
          x1={xCenter}
          x2={xCenter + dashWidth}
          y1={yCircleTop}
          y2={yCircleTop}
          stroke="black"
          strokeDasharray={"2,2"}
        />
        <text
          x={xCenter + dashWidth + 4}
          y={yCircleTop}
          fontSize={10}
          alignmentBaseline="middle"
        >
          {tick}
        </text>
      </g>
    );
  });

  return (
    <svg width={diameter} height={diameter} overflow="visible">
      {allCircles}
    </svg>
  );
};
`.trim();

const snippetInstall = `
npm install d3-geo
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type MapProps = {
  width: number;
  height: number;
  data: GeoJsonData;
};

export const Map = ({ width, height, data }: MapProps) => {

  // read the data
  // create a geoPath generator with the proper projection
  // build the paths

  return (
    <div>
      <svg width={width} height={height}>
        // render all the <path>s
      </svg>
    </div>
  );
};
`.trim();

const snippetGeoPath = `
const geoPathGenerator = d3.geoPath().projection(projection);
`.trim();

const snippetPath = `
const allSvgPaths = data.features
  .map((shape) => {
    return (
      <path
        key={shape.id}
        d={geoPathGenerator(shape)}
        stroke="black"
        fill="#cb1dd1"
      />
    );
});
`.trim();

const snippetInstallTypes = `
npm install --save @types/geojson
`.trim();

const snippetDataType = `
type MapProps = {
  width: number;
  height: number;
  data: FeatureCollection;
};`.trim();

const snippetScale = `
const sizeScale = d3
  .scaleSqrt()
  .domain([min, max])
  .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);
`.trim();

const snippetCircle = `
import { useSpring, animated } from "@react-spring/web";

type CircleProps = {
  color: string;
  r: number;
  cx: number;
  cy: number;
};

export const Circle = (props: CircleProps) => {
  const { cx, cy, r, color } = props;

  const springProps = useSpring({
    to: { cx, cy, r },
    config: {
      friction: 30,
    },
    delay: 0,
  });

  return (
    <animated.circle
      cx={springProps.cx}
      cy={springProps.cy}
      r={springProps.r}
      opacity={0.7}
      stroke={color}
      fill={color}
      fillOpacity={0.3}
      strokeWidth={1}
    />
  );
};
`.trim();
