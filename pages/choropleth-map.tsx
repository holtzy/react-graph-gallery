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

const graphDescription = (
  <>
    <p>
      A{' '}
      <a href="https://www.data-to-viz.com/graph/choropleth.html">
        choropleth map
      </a>{' '}
      displays divided geographical areas or regions that are coloured in
      relation to a numeric variable. It enables the study of how a variable
      evolves across a geographical area.
    </p>
    <p>
      Once you understood how to draw a <Link href="/map">map background</Link>{' '}
      from a geoJson file, it is just a matter of <b>coloring</b> each region
      with the appropriate color. On top of this, it is advised to add a{' '}
      <b>color legend</b> and some interactivity (<b>hover effect</b> and{' '}
      <b>tooltip</b>).
    </p>
    <p>
      This webpage is a tutorial coming with explanation and code sandboxes. It
      explains how to build interactive choropleth map with <b>React</b> and{' '}
      <b>D3.js</b>.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Building Choropleth Maps with React and D3.js: A Step-by-Step Tutorial"
      seoDescription="Learn how to create interactive choropleth maps using React and D3.js in this comprehensive tutorial. Follow along as we provide clear explanations and code sandboxes to guide you through each concept, empowering you to build visually appealing and data-driven maps."
    >
      <TitleAndDescription
        title={'Choropleth Map'}
        description={graphDescription}
        chartType="choropleth"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>Two pieces of information are required to build a choropleth map:</p>
      <h3>&rarr; Geographic information</h3>
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
        each region of the geoJson file. This information will be translated
        into a color on the choropleth map.
      </p>
      <CodeBlock code={snippetData2} />
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
      <h2 id="canvas">Better performance with Canvas</h2>
      <p>
        <code>canvas</code> is recommended for dynamic or interactive data
        visualizations to improve <b>performance</b>. Indeed, drawing in SVG
        requires to add many elements to the DOM, which can slow down your
        application, especially if you try to <b>animate transition</b> between
        states.
      </p>
      <p>
        Canvas rendering is typically faster than SVG, but requires more effort
        to implement styling and interaction.
      </p>
      <p>
        Fortunatelly, the <code>geoPath()</code> function has everything we need
        to easily draw our shapes in canvas. If a <code>context</code> is passed
        to it, it understands that we are dealing with canvas and does not
        output SVG path like above.
      </p>
      <p>Check the example below to see how to draw with canvas:</p>
      <ChartOrSandbox
        VizComponent={BackgroundMapCanvasDemo}
        vizName={'BackgroundMapCanvas'}
        maxWidth={900}
        height={600}
        caption={
          'A simple map based on a geoJson file, render using react in a canvas element.'
        }
      />
      <p>
        <b>Performance</b> in dataviz using React is a <b>big</b> topic. It's
        impossible to go in depth here! I will publish a dedicated blog post on
        the topic soon, with a special focus on canvas. Please{' '}
        <Link href="subscribe">subscribe</Link> to the newsletter if you want to
        be notified.
      </p>
      <LinkAsButton isFilled size="sm" href="/subscribe">
        Subscribe
      </LinkAsButton>
      <p>
        <br /> <br />
      </p>
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="map" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="map" />
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
