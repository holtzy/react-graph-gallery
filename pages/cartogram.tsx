import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import Link from 'next/link';
import { ToDoSection } from 'component/UI/ToDoSection';

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/cartogram.html">cartogram</a>{' '}
      is a map in which the geometry of regions is <b>distorted</b> in order to
      convey the information of an alternate variable.
    </p>
    <p>
      It is possible to build a Cartogram react component thanks to a js library
      called{' '}
      <a href="https://github.com/shawnbot/topogram/pulls" target="_blank">
        topogram
      </a>
      . This page provides step-by-step explanations on how to use the library
      based on a <code>geoJson</code> file with the help of d3.js for
      manipulating such a data source.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a cartogram with React and D3."
      seoDescription="A step-by-step guide to build your very own Cartogram component from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={'Cartogram'}
        description={graphDescription}
        chartType="cartogram"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        Probably uses the same as for a{' '}
        <Link href="choropleth-map">choropleth map</Link> or for a bubble map.
      </p>
      {/*
      //
      // Topogram library
      //
      */}
      <h2 id="topogram">The Topogram library</h2>
      <p>
        As far as I can tell the best way to create a cartogram in JS is the{' '}
        <a href="https://github.com/shawnbot/topogram">topogram library</a>.
      </p>
      <p>
        However it looks like there is no easy way to install it using{' '}
        <code>npm</code>. The easiest way is probably to clone the repo and
        create the build, or to copy the content of the{' '}
        <a
          href="https://github.com/shawnbot/topogram/blob/master/src/cartogram.js"
          target="_blank"
        >
          cartogram.js
        </a>{' '}
        file.
      </p>
      <ToDoSection text="Add example of usage of the topogram lib" />

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

const snippetProjection = `
const projection = d3
  .geoMercator()                              // name of the projection
  .scale(width / 2 / Math.PI)                 // scale: bigger value = more zoom
  .center([2.34, 48.86])                      // coordinate of the center of the map. e.g. 2 and 48 for Paris
  ...other options if needed
`.trim();
