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
import { ChoroplethMapBasicDemo } from 'viz/ChoroplethMapBasic/ChoroplethMapBasicDemo';
import { ContinuousColorLegendDemo } from 'viz/ContinuousColorLegend/ContinuousColorLegendDemo';

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
        The first thing you need to build a choropleth map is the 2d coordinates
        of the <b>boundaries</b> of the regions you want to represent. If you
        are trying to build a world map, you need to know where the country
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
        into a <b>color</b> on the choropleth map.
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
      // Color
      //
      */}
      <h2 id="color">Adding color</h2>
      <p>
        Now, we need to color each region of the map according to its value to
        make it a choropleth.
      </p>
      <p>
        The first step is to create a color scale, which is made for so many
        chart types of this gallery. To put it in a nutshell, the process looks
        as follow:
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
        VizComponent={ChoroplethMapBasicDemo}
        vizName={'ChoroplethMapBasic'}
        maxWidth={900}
        height={600}
        caption={
          'Add a color scale to color each country and get your first choropleth map.'
        }
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="choropleth" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="choropleth" />
      {/*
      //
      // Legend
      //
      */}
      <h2 id="legend">Color legend</h2>
      <p>
        A choropleth map uses a <b>color scale</b> to encode a numeric value
        into a color. As a result, it is very much advised to add a color{' '}
        <b>legend</b> to explicit how this color scale works.
      </p>
      <p>
        Let's consider a variable that goes from <code>0</code> to{' '}
        <code>100</code>. We want to encode <code>0</code> in{' '}
        <b>
          <span style={{ color: '#69b3a2' }}>blue</span>
        </b>{' '}
        and <code>100</code> in{' '}
        <b>
          <span style={{ color: 'purple' }}>purple</span>
        </b>
        . The color scale is built thanks to the <code>scaleLinear()</code>{' '}
        function of d3 as described <a href="#scales">above</a>.
      </p>
      <ChartOrSandbox
        VizComponent={ContinuousColorLegendDemo}
        vizName={'ContinuousColorLegend'}
        maxWidth={300}
        height={100}
        caption={'A color legend built with react, canvas and d3.'}
      />{' '}
      <p>
        The trick here is to create a <code>canvas</code> element of the desired{' '}
        <code>width</code> and <code>height</code>. Then, loop from left to
        right and add one rectangle for each pixel with the corresponding color
        using the same color scale as the one used on the chart. It's important
        to do it in <code>canvas</code>: you don't want to add 300 elements in
        your DOM if your legend is 300px wide.
      </p>
      <p>
        Once the <code>canvas</code> element is instantiated with a{' '}
        <a href="https://reactjs.org/docs/hooks-reference.html#useref">ref</a>,
        you can draw the color scale thanks to a{' '}
        <a href="https://reactjs.org/docs/hooks-reference.html#useeffect">
          useEffect
        </a>{' '}
        like this:
      </p>
      <CodeBlock code={snippetLegend} />
      <p>
        Then you probably want to add some <b>ticks</b> on top of the color
        graduation to make it insightful.
      </p>
      <p>
        {' '}
        Fortunately, the d3 <code>linearScale</code> comes with a handy{' '}
        <code>tick()</code> function. Basically, calling{' '}
        <code>xScale.ticks(4)</code> will create an array with approximately 4
        items, each providing everything you need to draw a{' '}
        <b>smartly located tick</b>.
      </p>
      <p>
        Color Legend is a big topic. There is much more to say about it and I'll
        post a complete blog post on the topic soon.{' '}
        <Link href="/subscribe">Subscribe</Link> to the gallery if interested!
      </p>
      <ToDoSection text="Hover effect section" />
      <ToDoSection text="Talk more about color scale. Hover effect linked with color scale" />
      <ToDoSection text="Canvas version. Add tooltip." />
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

const snippetProjection = `
const projection = d3
  .geoMercator()                              // name of the projection
  .scale(width / 2 / Math.PI)                 // scale: bigger value = more zoom
  .center([2.34, 48.86])                      // coordinate of the center of the map. e.g. 2 and 48 for Paris
  ...other options if needed
`.trim();

const snippetLegend = `
useEffect(() => {
  const canvas = canvasRef.current;
  const context = canvas?.getContext("2d");

  if (!context) {
    return;
  }

  // Loop on every pixels
  for (let i = 0; i < width; ++i) {
    context.fillStyle = colorScale((max * i) / width); // max is the last value of the domain of the color scale
    context.fillRect(i, 0, 1, height);
  }
}, [width, height, colorScale]);
`.trim();
