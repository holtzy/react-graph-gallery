import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { ResponsiveExplanationSection } from '../component/ResponsiveExplanationSection';
import { GraphLinkImage } from '../component/UI/GraphLinkImage';
import { ImageGrid } from '../component/UI/ImageGrid';
import Link from 'next/link';
import { BackgroundMapBasicDemo } from 'viz/BackgroundMapBasic/BackgroundMapBasicDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import { CodeSandbox } from 'component/CodeSandbox';
import { BackgroundMapProjectionDemo } from 'viz/BackgroundMapProjection/BackgroundMapProjectionDemo';
import { ToDoSection } from 'component/UI/ToDoSection';

const graphDescription = (
  <>
    <p>
      This section is dedicated to{' '}
      <a href="https://www.data-to-viz.com/graph/map.html">background maps</a>.
      It is the fundation required to build more interesting{' '}
      <b>dataviz-related maps</b>
      like <Link href="bubble-map">bubble maps</Link>,{' '}
      <Link href="choropleth-map">choropleth maps</Link> and more.
    </p>
    <p>
      The interactive sandboxes and explanation below explain how to read a{' '}
      <code>geoJson</code> file and draw its content using <code>React</code>.
      It also show how useful the{' '}
      <a href="https://github.com/d3/d3-geo" target="_blank">
        d3-geo module
      </a>{' '}
      can be to deal with this format, notably to control the various existing
      projections.
    </p>
    <p>
      Last but not least, this document also briefly explains how{' '}
      <code>Leaflet</code> can be used in a React environment to display
      interactive maps.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a histogram with React and D3."
      seoDescription="A step-by-step guide to build your very own histogram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={'Background Map'}
        description={graphDescription}
        chartType="map"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The first thing you need to build a map is the 2d coordinates of the{' '}
        <b>boundaries</b> of the regions you want to represent. If you are
        trying to build a world map, you need to know where the country
        boundaries are located 🤷‍♀️.
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
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />
      <p>
        It is basically an object, with a <code>features</code> property that is
        of great interest. This prop is an <code>array</code>, each item of the
        array being a shape that we will be able to draw.
      </p>
      <p>
        Each item has a <b>geometry</b> property that can be of type{' '}
        <code>Point</code>, <code>LineString</code>, <code>Polygon</code> and
        more. On top of that, the <code>coordinates</code> prop provides a list
        of the 2d coordinates to follow to draw the shape.
      </p>
      <p>🧐</p>
      <p>
        The first thing you need to do to build your map is to <b>find</b> the
        appropriate geoJson file on the web! Note that many other formats (like
        <code>shapeFiles</code>) exist. You can find some converters online to
        get the geoJson translation.
      </p>
      {/*
      //
      // D3-geo
      //
      */}
      <h2 id="d3-geo">D3-geo</h2>
      <p>
        A geoJson file provides coordinates on a <b>sphere</b>. But we want to
        display information on a <b>screen</b> which is a 2d space.
      </p>
      <p>
        As a result we need to use a{' '}
        <a href="https://en.wikipedia.org/wiki/Map_projection">projection</a> to
        transform the initial coordinates in a SVG or canvas path.
      </p>
      <p>
        This is a <b>very tricky job</b>. Fortunately, d3 has everything we need
        in its <b>d3-geo</b> module 💙. You can install this module in your
        react project as follow:
      </p>
      <CodeBlock code={snippetInstall} />
      <p>
        All the map examples of this gallery rely on this <code>d3-geo</code>{' '}
        module. I strongly encourage you to take a look at the{' '}
        <a href="https://github.com/d3/d3-geo">official documentation</a>. The
        examples provided here are based on it, trying to make it easier to
        understand.
      </p>
      <LinkAsButton isFilled size="sm" href="https://github.com/d3/d3-geo">
        d3-geo doc
      </LinkAsButton>
      <h3>&rarr; Note on Typescript</h3>
      <p>
        If you are working in a typescript environment (you should!), you
        probably wonder how to type the geoJson dataset properly.
      </p>
      <p>
        Fortunately, the{' '}
        <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
          DefinitelyTyped
        </a>{' '}
        repo has everything we need as always. You can load all the types we
        need using:
      </p>
      <CodeBlock code={snippetInstallTypes} />
      <p>
        Once this is done, you can type the geoJson data as a{' '}
        <code>FeatureCollection</code>:
      </p>
      <CodeBlock code={snippetDataType} />
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>Map</code> component that will be
        stored in a <code>Map.tsx</code> file. This component requires 3 props
        to render: a <code>width</code>, a <code>height</code>, and some{' '}
        <code>geoJson</code> data.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{' '}
        <code>width</code> and <code>height</code> will be used to render an{' '}
        <code>svg</code> element in the DOM, in which we will insert the map.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our <code>Map</code>{' '}
        component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG <code>path</code>, but it's React that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{' '}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>
      {/*
      //
      // First Map
      //
      */}
      <h2 id="first map">First Map</h2>
      <p>
        Most of the magick comes from the <code>geoPath()</code> function of d3.
      </p>
      <p>
        We want to draw a shape in SVG for every item of the geoJson input file.
        In the DOM this is done using a <code>path</code> element that has a{' '}
        <code>d</code> attribute.
      </p>
      <p>
        The <code>geoPath()</code> function helps us doing this.{' '}
        <code>geoPath()</code> is a function that returns a function. It can be
        invoked this way:
      </p>
      <CodeBlock code={snippetGeoPath} />
      <p>
        Pretty short. We just invoke the function, providing it with the
        projection of our choice (more on this later).
      </p>
      <p>
        <code>geoPathGenerator</code> is now a function that expects an item of
        the geoJSON dataset as input and returns a SVG <code>path</code> from
        it. It is thus possible to loop through the geoJson file and create a
        <code>path</code> element with the right <code>d</code> attribute for
        each shape:
      </p>{' '}
      <CodeBlock code={snippetPath} />
      <p>
        This leads us to our first simple world map. Shapes are computed with
        d3. Rendering is made with react. 🎉
      </p>
      <ChartOrSandbox
        VizComponent={BackgroundMapBasicDemo}
        vizName={'BackgroundMapBasic'}
        maxWidth={900}
        height={500}
        caption={'First very basic map made with d3.js and React.'}
      />
      <p>
        Note: I removed Antartica and chose the most famous yet highly
        criticiced: Mercator.
      </p>
      {/*
      //
      // Projections
      //
      */}
      <h2 id="projections">Projections</h2>
      <p>
        Projections transform <b>spherical polygonal</b> geometry to{' '}
        <b>planar polygonal</b> geometry. D3 provides implementations of several
        classes of standard projections.
      </p>
      <LinkAsButton
        isFilled
        size="sm"
        href="https://github.com/d3/d3-geo#projections"
      >
        all supported projections
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
        VizComponent={BackgroundMapProjectionDemo}
        vizName={'BackgroundMapProjection'}
        maxWidth={900}
        height={600}
        caption={
          'An interactive playground to check how a few map projections look like on a world map.'
        }
      />
      <ToDoSection text="Make a smooth transition between projections" />
      {/*
      //
      // Make it in Canvas
      //
      */}
      <h2 id="bars">Better performance with Canvas</h2>
      <p>Finally! ✨</p>
      <ChartOrSandbox
        VizComponent={BackgroundMapBasicDemo}
        vizName={'BackgroundMapBasic'}
        maxWidth={600}
        height={600}
        caption={
          'Values of the dataset as distributed into bins. Bins are represented as rectangles. Data wrangling is made with d3.js, rendering with react.'
        }
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="histogram" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="histogram" />
      {/*
      //
      // Variations
      //
      */}
      <h2 id="variations">Variations</h2>
      <p>
        Once you've understood how to build a basic histogram with d3 and react,
        it opens an infinite world of <b>customization</b>. Here are a few
        examples showing how to add{' '}
        <Link href="example/histogram-with-several-groups">several groups</Link>{' '}
        on the same axis or how to use{' '}
        <Link href="example/histogram-small-multiple">small multiple</Link> with
        histograms to compare distributions.
      </p>
      <p>Click on the overview below to get details and code.</p>
      <br />
      <ImageGrid>
        <GraphLinkImage
          link={'example/histogram-with-several-groups'}
          title={'Multiple groups'}
          description={
            <p>
              A histogram with <b>multiple</b> groups displayed on the same
              axis.
            </p>
          }
          img={'histogram-with-several-groups.png'}
          alt="Picture of a histogram with multiple groups built with react and d3.js"
        />
        <GraphLinkImage
          link={'example/histogram-small-multiple'}
          title={'Small multiple'}
          description={
            <p>
              Create one panel per group to show its distribution separately
            </p>
          }
          img={'histogram-small-multiple.png'}
          alt="Picture of a histogram with small multiple built with react and d3.js"
        />
      </ImageGrid>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
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

const snippetYScale = `
const yScale = useMemo(() => {

  const max = Math.max(...buckets.map((bucket) => bucket?.length));

  return d3.scaleLinear()
    .range([height, 0])
    .domain([0, max]);

  }, [data, height]);
`.trim();

const snippetRects = `
const allRects = buckets.map((bucket, i) => {
  return (
    <rect
      key={i}
      fill="#69b3a2"
      stroke="black"
      x={xScale(bucket.x0)}
      width={xScale(bucket.x1) - xScale(bucket.x0)}
      y={yScale(bucket.length)}
      height={height - yScale(bucket.length)}
    />
  );
});
`.trim();

const snippetRectangle = `
import { useSpring, animated } from "@react-spring/web";

type RectangleProps = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export const Rectangle = (props: RectangleProps) => {
  const { x, y, width, height } = props;

  const springProps = useSpring({
    to: { x, y, width, height },
    config: {
      friction: 30,
    },
    delay: x,
  });

  if (y === undefined) {
    return null;
  }

  return (
    <animated.rect
      x={springProps.x}
      y={springProps.y}
      width={springProps.width}
      height={springProps.height}
      opacity={0.7}
      stroke="#9d174d"
      fill="#9d174d"
      fillOpacity={0.3}
      strokeWidth={1}
      rx={1}
    />
  );
};
`.trim();
