import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { ResponsiveExplanationSection } from '../component/ResponsiveExplanationSection';
import Link from 'next/link';
import { BackgroundMapBasicDemo } from 'viz/BackgroundMapBasic/BackgroundMapBasicDemo';
import { LinkAsButton } from 'component/LinkAsButton';

import { ConnectionMapSingleLinkDemo } from 'viz/ConnectionMapSingleLink/ConnectionMapSingleLinkDemo';
import { ConnectionMapBasicDemo } from 'viz/ConnectionMapBasic/ConnectionMapBasicDemo';
import { ToDoSection } from 'component/UI/ToDoSection';

const graphDescription = (
  <>
    <p>
      A{' '}
      <a
        href="https://www.data-to-viz.com/story/MapConnection.html"
        target="_blank"
      >
        connection map
      </a>{' '}
      is a map where links between geographical positions are represented using{' '}
      <b>lines</b> or <b>arcs</b>. Most of the time,{' '}
      <a href="https://en.wikipedia.org/wiki/Great_circle" target="_blank">
        great circles
      </a>{' '}
      are used.
    </p>
    <p>
      This page explains how to build connection maps for the web using{' '}
      <code>d3.js</code> and <code>react</code>. Several tools can be used to
      display the <Link href="/map">background map</Link> as shown in the
      dedicated section. The path used to show the connection can then be
      computed thanks to the <code>geoPath()</code> function of d3.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a connection map component with React and D3."
      seoDescription="A step-by-step guide to build your very own connection map component from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={'Connection Map'}
        description={graphDescription}
        chartType="connection"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>Two pieces of information are required to build a connection map:</p>
      <h3>&rarr; Geographic information</h3>
      <p>
        The first thing you need is the 2d coordinates of the <b>boundaries</b>{' '}
        of the regions you want to represent. If you are trying to build a world
        map, you need to know where the country boundaries are located 🤷‍♀️.
      </p>
      <p>
        Several formats exist to store such a piece of information. When working
        with d3.js, the expected format is{' '}
        <a href="https://en.wikipedia.org/wiki/GeoJSON" target="_blank">
          geoJSON
        </a>
        . A geoJSON file looks pretty much like this:
      </p>
      <br />
      <CodeBlock code={snippetData} />
      <p>
        It is basically an object, with a <code>features</code> property that is
        of great interest. This prop is an <code>array</code>, each item of the
        array being a shape that we will be able to draw.
      </p>
      <p>
        This format is extensively described in the{' '}
        <Link href="/map">background map</Link> section of the gallery. It
        explains how it is structured, where to find it, how to work with it and
        how to draw its content. Check it out!
      </p>
      <LinkAsButton href={'/map'} isFilled size="sm">
        {'Map section'}
      </LinkAsButton>
      <h3>&rarr; Link details</h3>
      <p>
        We need another piece of information for the links. Usually, it will be
        an <b>array</b> where each item is an <b>object</b>. Each object
        provides the coordinates of a single connection. For instance, it can
        have 4 properties <code>long1</code>, <code>lat1</code>,{' '}
        <code>long2</code> and <code>lat2</code> as follow:
      </p>
      <CodeBlock code={snippetData2} />

      {/*
      //
      // Basic Map
      //
      */}
      <h2 id="background">Basic background map</h2>
      <p>
        The first step is to build the background map. Basically, we need to
        transform the set of spherical coordinates of the geoJson file into a
        set of 2d coordinates and draw them.
      </p>
      <p>
        Fortunately, the <code>d3-geo</code> module of d3.js has everything we
        need for this. It relies on the <code>d3.geoPath()</code> function and
        the whole process is extensively described in the{' '}
        <Link href="/map">background map section</Link> of the gallery.
      </p>
      <LinkAsButton href={'/map'} isFilled size="sm">
        {'Map section'}
      </LinkAsButton>
      <ChartOrSandbox
        VizComponent={BackgroundMapBasicDemo}
        vizName={'BackgroundMapBasic'}
        maxWidth={900}
        height={500}
        caption={
          'First very basic map made with d3.js and React. Check the map section for more code explanation.'
        }
      />
      <p>
        Note: I removed Antartica and chose the most famous yet highly
        criticiced: Mercator.
      </p>
      {/*
      //
      // Drawing a single link
      //
      */}
      <h2 id="first link">Drawing a single link.</h2>
      <p>
        The best way to represent a <b>link</b> between 2 geographical
        coordinates is to use <b>great circles</b>. A great circle is the{' '}
        <b>circular intersection</b> of a sphere and a plane passing through the
        sphere's <b>center point</b>. To put it more simply, a great circle is
        the <b>shortest way</b> to get from one place to another on Earth.
      </p>
      <p>
        Drawing great circle is made possible thanks to the{' '}
        <code>geoPath()</code> function of d3.js. You can check the{' '}
        <a href="https://github.com/d3/d3-geo#paths" target="_blank">
          geoPath official documentation
        </a>{' '}
        for a comprehensive description.
      </p>
      <p>
        Note that <code>geoPath()</code> is also the function used to draw the
        countries on the map above! <code>geoPath()</code> actually knows how to
        deal with <b>any GeoJSON feature</b> or geometry object.
      </p>
      <p>
        To draw the background map we passed a <code>Polygon</code> to it, i.e.
        an array of arrays of positions. This time we will pass a{' '}
        <code>LineString</code>, i.e. an array of positions forming a continuous
        line.
      </p>
      <p>This is how the process looks like for a single link:</p>
      <CodeBlock code={snippetSingleArc} />
      <p>Resulting with a first map with a single connection being drawn:</p>
      <ChartOrSandbox
        VizComponent={ConnectionMapSingleLinkDemo}
        vizName={'ConnectionMapSingleLink'}
        maxWidth={900}
        height={600}
        caption={
          'A first path drawn between Paris and New York using great circles.'
        }
      />

      {/*
      //
      // Drawing several links
      //
      */}
      <h2 id="several links">Drawing several links</h2>
      <p>
        The exact same process can be used to draw <b>several links</b> on a
        map. Instead of calling the <code>geoPathGenerator</code> only once, we
        have to <b>loop</b> through a Json file to draw all the listed
        connections.
      </p>
      <p>
        Here is a first connection map representing about 30 connections between
        some of the main cities on the planet. Click the button below to see the
        code.
      </p>
      <ChartOrSandbox
        VizComponent={ConnectionMapBasicDemo}
        vizName={'ConnectionMapBasic'}
        maxWidth={900}
        height={600}
        caption={
          'A first connection map made with React and d3.js showing connection between cities using great circles.'
        }
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="connection" />

      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="connection" />
      <ToDoSection text="draw with Canvas" />
      <ToDoSection text="application to a real dataset" />
      <ToDoSection text="hover effect: hover over a city to highlight its connections" />

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
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [102.0, 0.5]
      },
      "properties": {
        "prop0": "value0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [102.0, 0.0],
          [103.0, 1.0],
          [104.0, 0.0],
          [105.0, 1.0]
        ]
      },
      "properties": {
        "prop0": "value0",
        "prop1": 0.0
      }
    },
    ...
  ]
}`.trim();

const snippetData2 = `
[
  {
    long1: -58,
    long2: 2,
    lat1: -34,
    lat2: 49,
  },
  {
    long1: -58,
    long2: 145,
    lat1: -34,
    lat2: -38,
  },
  ...
}`.trim();

const snippetSingleArc = `
// Create a geoPath generator based on a projection.
// Same as for a background map
const projection = d3
  .geoMercator()
  .scale(width / 2 / Math.PI - 40)
  .center([10, 35]);

const geoPathGenerator = d3.geoPath().projection(projection);

// Compute the svg path of a link between Paris and NewYork
const connectionSvgPath = geoPathGenerator({
  type: 'LineString',
  coordinates: [
    [2.3522, 48.8566], // start
    [-74.006, 40.7128] // end
  ],
});

// connectionSvgPath is a string that can be used as the d argument of a <path> element
return (
  <div>
    <svg>
      <path
        d={connectionSvgPath}
        stroke="#cb1dd1"
        ...
      />
    </svg>
  </div>
);
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
