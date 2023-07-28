import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { ResponsiveExplanationSection } from '../component/ResponsiveExplanationSection';
import Link from 'next/link';
import { RadarBasicDemo } from 'viz/RadarBasic/RadarBasicDemo';
import { RadarGridOnlyDemo } from 'viz/RadarGridOnly/RadarGridOnlyDemo';
import { RadarMultipleGroupsDemo } from 'viz/RadarMultipleGroups/RadarMultipleGroupsDemo';
import { ToDoSection } from 'component/UI/ToDoSection';

const graphDescription = (
  <>
    <p>
      A{' '}
      <a href="https://www.data-to-viz.com/caveat/spider.html">
        radar or spider or web chart
      </a>{' '}
      is a two-dimensional chart type designed to plot one or more series of
      values over <b>multiple quantitative variables</b>. Each variable has its{' '}
      <b>own axis</b>, all axes are joined in the <b>center</b> of the figure.
    </p>
    <p>
      This page is a step-by-step guide on how to build your own spider chart
      for the web, using <a href="https://reactjs.org/">React</a> (for
      rendering) and <a href="https://d3-graph-gallery.com/histogram">D3.js</a>{' '}
      (to compute the axis, and shape coordinates).
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and how to
      initialize the <code>Radar</code> component. It then explains how to
      compute axis dynamically, and plot the lines and axis. Once this is done,
      it shows how to deal with scaling and how to add an interactive legend.
      🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Spider chart | React graph gallery"
      seoDescription="A step-by-step guide on how to build your very own spider chart react component from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={'Radar plot'}
        description={graphDescription}
        chartType="radar"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset provides several <b>numeric</b> values for a set of data
        items.
      </p>
      <p>
        The suggested data structure is an array of <code>object</code>, where
        each object is a data item. It can have as many numeric properties as
        needed. It also has a <code>name</code> property that identifies the
        data item.
      </p>
      <br />
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />
      <p>
        Note: this is the same data format as for a{' '}
        <Link href="/correlogram">correlogram</Link> or for a{' '}
        <Link href="parallel-plot">parralel chart</Link>.
      </p>
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>Radar</code> component that will be
        stored in a <code>Radar.tsx</code> file. This component requires 4 props
        to render: a <code>width</code>, a <code>height</code>, some{' '}
        <code>data</code> and an array providing the name of the variables to
        display.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{' '}
        <code>width</code> and <code>height</code> will be used to render an{' '}
        <code>svg</code> element in the DOM, in which we will insert the spider
        chart.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our <code>Radar</code>{' '}
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
      // Scales
      //
      */}
      <h2 id="scales">Scales</h2>
      <p>
        Building a radar chart requires several <b>scales</b> and <b>axes</b>.
        Understanding how those scales work and how to draw the background grid
        using <b>polar coordinates</b> is probably the trickiest part or the
        spider chart creation.
      </p>
      <p>
        D3.js comes with a handful set of{' '}
        <a href="https://github.com/d3/d3-scale">predefined scales</a>.{' '}
        <code>scaleBand</code> and <code>scaleRadial</code> are the ones we are
        going to use here.
      </p>

      <h3>&rarr; X Scale</h3>
      <p>
        We need only 1 X scale. This scale is gonna allocate an <b>angle</b> for
        each variable name of the dataset. The first variable will be directed
        to the top of the figure, the second a few more radians clock-wise and
        so on.
      </p>
      <p>This is how the scale is defined:</p>
      <CodeBlock code={snippetXScale} />
      <h3>&rarr; Y Scales</h3>
      <p>
        Several Y scales are required, one per variable in the dataset. The
        corresponding axes will be drawn from the center of the figure to the
        outer part, with an angle determined by the <code>xScale</code>.
      </p>
      <p>
        The y scales are computed using the <code>scaleRadial()</code> function
        as follow. They are all stored in a <code>yScales</code> object.
      </p>
      <CodeBlock code={snippetYScale} />

      {/*
      //
      // Grid
      //
      */}
      <h2 id="grid">Radar chart background grid</h2>
      <p>
        Once those scales are available, we need to draw the{' '}
        <b>background grid</b> of the spider chart.
      </p>
      <p>
        A bunch of options exist for this. Here I suggest to loop through the{' '}
        <code>axisConfig</code> to draw the axes, and add some concentric
        circles to create a <b>grid</b>.
      </p>
      <p>
        Since the code is a bit long to create this grid, I strongly advise to
        place it in a separate component (<code>RadarGrid</code> here).
      </p>
      <ChartOrSandbox
        VizComponent={RadarGridOnlyDemo}
        vizName={'RadarGridOnly'}
        maxWidth={800}
        height={400}
        caption={
          'Background grid of a spider chart built with react and d3.js. 6 Variables are represented using 6 axes with polar coordinates'
        }
      />
      <p>
        Note that placing the labels requires to translate some <b>polar</b>{' '}
        coordinates to <b>cartesian</b> coordinates. This can be done using the
        following function:
      </p>
      <CodeBlock code={snippetPolarCartesian} />

      {/*
      //
      // 1 group
      //
      */}
      <h2 id="1 group">Radar chart with 1 group</h2>
      <p>Finally! ✨</p>
      <p>
        We can now <code>map</code> through the data array and draw a{' '}
        <b>path</b> per item thanks to the scales computed above.
      </p>
      <p>
        What's tricky here is that we are dealing with <b>polar coordinates</b>.
        We have a set of points that are defined by an <b>angle</b> (x scale)
        and by a distance to the center of the figure (y scale).
      </p>
      <p>
        Fortunately, the <code>lineRadial()</code> function of d3 is here to
        help. We can define a radial line generator using the following
        statement:
      </p>
      <CodeBlock code={snippetRadialLine} />
      <p>
        It works pretty much the same as the classic{' '}
        <Link href="line-chart">line()</Link> function of d3, but expects an
        angle and a distance instead of a <code>x</code> and a <code>y</code>{' '}
        position.
      </p>
      <CodeBlock code={snippetRadialLineUsage} />
      <p>
        Note that in order to close the shape, we need to add the first data
        point again after reaching the last data point, to close the loop.
      </p>
      <ChartOrSandbox
        VizComponent={RadarBasicDemo}
        vizName={'RadarBasic'}
        maxWidth={600}
        height={400}
        caption={
          'A first basic radar chart with only 1 group represented. Made with React and d3.js'
        }
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="radar" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="radar" />

      {/*
      //
      // Several groups
      //
      */}
      <h2 id="several groups">Radar chart with several groups</h2>
      <p>
        The process to get a spider chart with <b>several groups</b> is very
        similar to the previous example.
      </p>
      <p>
        We just need to create a <b>color scale</b> and add a shape for each
        item of the dataset through a loop. Do not try to add too many groups on
        the same figure, it make it totally{' '}
        <a href="https://www.data-to-viz.com/caveat/spider.html">unreadable</a>.
      </p>
      <ChartOrSandbox
        VizComponent={RadarMultipleGroupsDemo}
        vizName={'RadarMultipleGroups'}
        maxWidth={600}
        height={400}
        caption={
          'A radar chart with several groups displayed on the same figure. Made with React and d3.js'
        }
      />
      <ToDoSection text="spider chart with small multiple to make it more readable" />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {var1: 5.1, var2: 3.5, ..., name: 'Mark'},
  {var1: 4.9, var2: 3.0, ..., name: 'Rosa'},
  ...
]
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type DataItem = {
  [variable: string]: number;
} & { name: string };


type RadarProps = {
  width: number;
  height: number;
  data: DataItem[];
  variables: string[]
};

export const Radar = ({ width, height, data, variables }: RadarProps) => {

  // read the data & get a list of groups
  // build X scale
  // build Y scales: 1 per variable
  // build color scales
  // loop through variables to add axes
  // loop through data items and through variables to draw lines

  return (
    <div>
      <svg width={width} height={height}>
        // render all the <lines>
      </svg>
    </div>
  );
};
`.trim();

const snippetXScale = `
const allVariableNames = axisConfig.map((axis) => axis.name);

// The x scale provides an angle for each variable of the dataset
const xScale = d3
  .scaleBand()
  .domain(allVariableNames)
  .range([0, 2 * Math.PI]);
`.trim();

const snippetYScale = `
// Compute the y scales: 1 scale per variable.
// Provides the distance to the center.
let yScales: { [name: string]: YScale } = {};

axisConfig.forEach((axis) => {
  yScales[axis.name] = d3
    .scaleRadial()
    .domain([0, axis.max])
    .range([INNER_RADIUS, outerRadius]);
});

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

const snippetPolarCartesian = `
export const polarToCartesian = (angle: number, distance: number) => {
  const x = distance * Math.cos(angle);
  const y = distance * Math.sin(angle);
  return { x, y };
};
`.trim();

const snippetRadialLine = `
// Create a radial line generator
const lineGenerator = d3.lineRadial();
`.trim();

const snippetRadialLineUsage = `
// Use the radial line generator
const path = lineGenerator([
  [0, 100], // first data point, 0 is its angle, 100 is its distance to the center
  [Math.PI / 2, 50], // second data point = second variable
  [Math.PI, 10],
]);

// Result is a path that you can pass to the d argument of a SVG <path>
// console.log(path)
// M0,-100 L50,-3.06 L1.2246,10

`.trim();
