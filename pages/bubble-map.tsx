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
import { BackgroundMapProjectionDemo } from 'viz/BackgroundMapProjection/BackgroundMapProjectionDemo';
import { ToDoSection } from 'component/UI/ToDoSection';
import { BackgroundMapCanvasDemo } from 'viz/BackgroundMapCanvas/BackgroundMapCanvasDemo';
import { BubbleMapBasicDemo } from 'viz/BubbleMapBasic/BubbleMapBasicDemo';
import { Accordion } from 'component/UI/Accordion';
import { BubbleLegendDemo } from 'viz/BubbleLegend/BubbleLegendDemo';
import { BubblePlotLegendDemo } from 'viz/BubblePlotLegend/BubblePlotLegendDemo';
import { BubblePlotDatasetTransitionDemo } from 'viz/BubblePlotDatasetTransition/BubblePlotDatasetTransitionDemo';
import { BubbleMapDatasetTransitionDemo } from 'viz/BubbleMapDatasetTransition/BubbleMapDatasetTransitionDemo';

const graphDescription = (
  <>
    <p>
      A{' '}
      <a
        href="https://www.data-to-viz.com/graph/bubblemap.html"
        target="_blank"
      >
        bubble map
      </a>{' '}
      uses <b>circles</b> of different size to represent a numeric value on a
      territory. It displays one bubble per geographic coordinate, or one bubble
      per region.
    </p>
    <p>
      This page explains how to build bubble maps for the web using{' '}
      <code>d3.js</code> and <code>react</code>. Several tools can be used to
      display the <Link href="/map">background map</Link> as shown in the
      dedicated section. Circles are then computed with <code>d3</code> and
      render using SVG or canvas elements with <code>react</code>.
    </p>
    <p>
      Examples start <b>easy</b> and add layers of <b>complexity</b>{' '}
      progressively. You will always find <b>explanations</b> and{' '}
      <b>code sandboxes</b> for each step.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a bubble map component with React and D3."
      seoDescription="A step-by-step guide to build your very own bubble map component from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={'Bubble Map'}
        description={graphDescription}
        chartType="bubbleMap"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>Two pieces of information are required to build a bubble map:</p>
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
      <h3>&rarr; Numeric information</h3>
      <p>
        We need another piece of information that provides a numeric value for
        each region of the geoJson file. This information will encode the{' '}
        <b>size</b>
        of the bubbles.
      </p>
      <p>
        You can include any information in this array. But you need a prop (
        <code>code</code> here) that allows to make the link with the regions of
        the geoJson file.
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
      // Bubble
      //
      */}
      <h2 id="bubbles">Adding the bubbles</h2>
      <p>
        Now, we need to add a <b>bubble</b> on top of each country to represent
        its population.
      </p>
      <p>
        The process is very close to what is described in the{' '}
        <Link href="/bubble-plot">bubble chart</Link> section of the gallery. So
        please take a look there for more in-depth explanations.
      </p>
      <LinkAsButton isFilled size="sm" href="/bubble-plot">
        Bubble chart section
      </LinkAsButton>
      <p>
        <br />
      </p>
      <p>Setting up a projection always follow the same pattern:</p>
      <CodeBlock code={snippetProjection} />
      <p>
        <code>scale</code> and <code>center</code> are in my opinion the 2 most
        useful options that you will have to setup for your projections. But
        once more, take a look at the doc to see every possibilities.
      </p>
      <p>
        Now, here is a little playground to check some of the various offered
        projections.
      </p>
      <ChartOrSandbox
        VizComponent={BubbleMapBasicDemo}
        vizName={'BubbleMapBasic'}
        maxWidth={900}
        height={600}
        caption={
          'Add a color scale to color each country and get your first choropleth map.'
        }
      />
      {/*
      //
      // Legend
      //
      */}
      <h2 id="legend">Adding a legend</h2>
      <p>
        There are{' '}
        <a href="https://d3-graph-gallery.com/graph/custom_legend.html">
          many different ways
        </a>{' '}
        to add a legend to a d3.js graph. What we mainly need here is to make
        sense of the <b>bubble size</b>. I suggest using a set of <b>nested</b>{' '}
        bubbles, showing a few of the bubble sizes used on the chart with their
        respective values.
      </p>
      <ChartOrSandbox
        VizComponent={BubbleLegendDemo}
        vizName={'BubbleLegend'}
        maxWidth={300}
        height={300}
        caption="A legend to make sense of circle size, based on a d3 scale."
      />
      <p>
        This legend is implemented in a <code>BubbleLegend</code> component that
        expects 2 props:{' '}
      </p>
      <ul>
        <li>
          <code>scale</code>: the size scale that we described{' '}
          <a href="#bubble">above</a>, built with the <code>scaleSqrt</code>{' '}
          function.
        </li>
        <li>
          <code>tickNumber</code>: the number of circles to show on the legend.
        </li>
      </ul>
      <p>
        Note that <code>tickNumber</code> is a target. The legend component uses
        the <code>tick()</code> function with this value, which returns a smart
        number of circle to approximate the goal while keeping some nice, smart
        values.
      </p>
      <p>You can check the complete implementation of the legend here:</p>
      <Accordion
        startOpen={false}
        title={
          <span>
            <code>BubbleLegend</code>: a component to build a legend for circle
            sizes
          </span>
        }
      >
        <CodeBlock code={snippetLegend} />
      </Accordion>
      <p>
        It's important to note that the component does <b>not</b> expect any
        dimension as prop. The <code>width</code> and <code>height</code> of the
        SVG element that is created will be computed from the <code>scale</code>{' '}
        that is provided.
      </p>
      <p>
        As a result, you only need to think about the position of the legend on
        your chart. Here is an example of adding it at the bottom right of the
        chart.
      </p>
      <ChartOrSandbox
        VizComponent={BubblePlotLegendDemo}
        vizName={'BubblePlotLegend'}
        maxWidth={600}
        height={500}
        caption="Adding a legend to make sense of the bubble size. Legend is hand made, adding svg shapes with React."
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="map" />
      {/*
      //
      // Data transition
      //
      */}
      <h2 id="transition">Smooth dataset transition</h2>
      <p>
        How can we <b>smoothly animate</b> the transition between 2 datasets on
        a bubble chart? The chart used in this blog post can be drawn for
        several different years. You can use the select button on top to select
        the year, and the bubbles will <b>animate</b> to their new position.
      </p>
      <p>
        This is possible thanks to the{' '}
        <a href="https://react-spring.dev/">react spring</a> library. Basically,
        instead of rendering usual <code>circle</code> elements, the library
        provides an <code>animated.circle</code> element, that is linked to a{' '}
        <code>useSpring</code>
        hook.
      </p>
      <p>
        This is what the <code>Circle</code> component I use looks like:
      </p>
      <Accordion
        startOpen={false}
        title={
          <span>
            <code>Rectangle</code>: a component that animates the transition of
            a <code>rect</code>
          </span>
        }
      >
        <CodeBlock code={snippetCircle} />
      </Accordion>
      <ChartOrSandbox
        VizComponent={BubbleMapDatasetTransitionDemo}
        vizName={'BubbleMapDatasetTransition'}
        maxWidth={822}
        height={600}
        caption="A bubble chart component that smoothly animates changes between datasets."
      />
      <p>
        <b>Animation</b> in dataviz using React is a <b>big</b> topic. It's
        impossible to go in-depth here! I will publish a dedicated blog post on
        the topic soon. Please <Link href="subscribe">subscribe</Link> to the
        newsletter if you want to be notified.
      </p>
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

const snippetProjection = `
const projection = d3
  .geoMercator()                              // name of the projection
  .scale(width / 2 / Math.PI)                 // scale: bigger value = more zoom
  .center([2.34, 48.86])                      // coordinate of the center of the map. e.g. 2 and 48 for Paris
  ...other options if needed
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
