import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import Link from 'next/link';
import { StackedAreaChartBasicDemo } from '../viz/StackedAreaChartBasic/StackedAreaChartBasicDemo';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { Accordion } from 'component/UI/AccordionGrey';
import { ToDoSection } from 'component/UI/ToDoSection';
import { LinkAsButton } from 'component/LinkAsButton';
import { ResponsiveExplanationSection } from 'component/ResponsiveExplanationSection';
import { StreamGraphShapeTransitionDemo } from 'viz/StreamGraphShapeTransition/StreamGraphShapeTransitionDemo';

const graphDescription = (
  <p>
    A{' '}
    <a href="https://www.data-to-viz.com/graph/area.html">stacked area chart</a>{' '}
    is an evolution of an <Link href="area-plot">area chart</Link> used to
    display the evolution of several groups in a dataset. This section explains
    how to build it with <code>d3.js</code> and <code>react</code>. It focus on
    stacking, so make sure to read the <Link href="area-plot">area chart</Link>{' '}
    section first.
  </p>
);

export default function Home() {
  return (
    <Layout
      title="Stacked Area charts with React"
      seoDescription="How to build a stacked area chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Stacked Area charts"
        description={graphDescription}
        chartType="stackedArea"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        Most of the time the input dataset is an <b>array</b> where each item is
        an <b>object</b>.
        <br />
        Each object provides information for a step on the X axis. It has a
        value like <code>x</code> that provides the exact position on the X
        axis. It then has <b>several</b> numeric values, one for each group of
        the dataset.
      </p>
      <br />
      <p>Here is a minimal example:</p>
      <CodeBlock code={snippetData} />
      <h3>&rarr; Wide and Long formats</h3>
      <p>
        The format described above is often called the <b>wide</b> format.
        Another common format is the <b>long</b> format, where each object in
        the array provides information for 1 group only. (The array becomes way{' '}
        <i>longer</i> 🙃)
      </p>
      <p>
        If your dataset is formatted using the long format, you can transform it
        using the <code>pivotWider</code> function below:
      </p>
      <Accordion startOpen={false} title={<span>Pivot function</span>}>
        <CodeBlock code={snippetPivot} />
      </Accordion>
      <h3>
        &rarr; <code>.csv</code> data
      </h3>
      <p>
        If your data is in <code>.csv</code> format, you can translate it thanks
        to the <code>csvParse()</code> function of d3. I'll write a blogpost
        soon on how to deal with the csv format.{' '}
        <Link href="/subscribe">Subscribe</Link> to the project to know when it
        is ready!
      </p>
      <ToDoSection text="Add some more hints on how to type those data objects" />

      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>StackedAreaGraph</code> component
        that will be stored in a <code>StackedAreaGraph.tsx</code> file. This
        component requires 3 props to render: a <code>width</code>, a{' '}
        <code>height</code>, and some <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{' '}
        <code>width</code> and <code>height</code> will be used to render an{' '}
        <code>svg</code> element in the DOM, in which we will insert the stacked
        area graph.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{' '}
        <code>StackedAreaGraph</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG <code>circle</code>, but it's React that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{' '}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>

      {/*
      //
      // Stacking
      //
      */}
      <h2 id="stacking">Stacking</h2>
      <p>
        The trickiest part of a stacked area chart creation is probably the{' '}
        <b>stacking</b> step.
      </p>
      <p>
        <br />
        Series are displayed one on top of each other and you have to compute
        their positions on the Y axis. Fortunately <code>d3.js</code> is here to
        the rescue with a <code>d3.stack()</code> function. This is what you
        need to do to stack your data:
      </p>
      <h3>&rarr; Build a stack generator</h3>
      <p>
        <code>d3.stack()</code> returns a <b>stack generator</b> that we call{' '}
        <code>stackSeries</code> here. <code>d3.stack()</code> is a function
        that returns a function.
      </p>
      <p>
        <code>.keys()</code> is used to pass the list of groups that we want to
        stack on top of each other. Those keys are the ones used in the input
        dataset described in the <Link href="#data">data section</Link>.
      </p>
      <CodeBlock code={snippetStack} />
      <h3>&rarr; Use the generator</h3>
      <p>
        Now that this stack generator is available, we just have to run it on
        our dataset to get the stacked values
      </p>
      <CodeBlock code={snippet3} />
      <p>
        That's it. <code>series</code> contains the <b>stacked values</b> that
        we can transform in <b>coordinates</b> for the shapes we need to draw.
      </p>
      <h3>&rarr; Output</h3>
      <p>
        The output has kind of an usual shape and it's important to understand
        how it's formatted since shapes will be drawn from it.
      </p>
      <p>
        Our generated stacked <code>series</code> object is an array. It has{' '}
        <b>1 item per group</b> in the dataset. <br />
        For each group, there are 3 things:
      </p>
      <ul>
        <li>
          a <code>key</code> prop that provides the group key
        </li>
        <li>
          a <code>index</code> prop that provides its index 🤷
        </li>
        <li>
          Several arrays of length 2. Each array describes the position of the
          group for a <b>timestamp</b>. First item in the array provides the{' '}
          <b>bottom</b>
          position, second item provides the <b>top</b>.
        </li>
      </ul>
      <CodeBlock code={snippetStackedData} />
      {/*
      //
      // Basic
      //
      */}
      <h2 id="basic">Basic stacked area chart</h2>
      <p>
        The <code>series</code> object described above has all the information
        we need to draw a stacked area chart. We can <b>loop</b> through it and
        draw a <code>path</code> for each group, one by one.
      </p>
      <p>
        Note that for each group the <code>area()</code> function of d3 is
        invoked. The usage of this function is deeply described in the{' '}
        <Link href="/area-plot">area section</Link> of the gallery.
      </p>
      <LinkAsButton size="sm" isFilled href="/area-plot">
        Area chart section
      </LinkAsButton>
      <p>
        <br />
      </p>
      <p>Here is a minimal code example wrapping the whole process.</p>
      <ChartOrSandbox
        vizName={'StackedAreaChartBasic'}
        VizComponent={StackedAreaChartBasicDemo}
        height={400}
        maxWidth={600}
        caption="basic stacked area chart with react and d3.js"
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="stackedArea" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="stackedArea" />
      {/*
      //
      // Link with stream graph
      //
      */}
      <h2 id="Offset & curve">Offset and Curve types</h2>
      <p>
        Stacked area charts can easily be customized to use other <b>offset</b>{' '}
        and <b>smoothing</b> algorithm. This process can be used to create{' '}
        <Link href="/streamchart">streamgraphs</Link> which are a{' '}
        <b>varation</b> of the stacked area graph.
      </p>
      <p>
        The <b>offset type</b> controls how the data are stacked. You can read
        about the offset options available in the{' '}
        <a href="https://github.com/d3/d3-shape#stack-offsets">
          official documentation
        </a>{' '}
        or play with the little example below.
      </p>
      <p>
        The <b>curve type</b> controls how the <b>smoothing</b> of each shape is
        made. There are a{' '}
        <a href="https://github.com/d3/d3-shape#curves">myriad of options</a>{' '}
        described in the official documentation.
      </p>
      <ChartOrSandbox
        vizName={'StreamGraphShapeTransition'}
        VizComponent={StreamGraphShapeTransitionDemo}
        height={400}
        maxWidth={600}
        caption="Try d3.js various options to offset the data and smooth shapes. See a smooth transition between options."
      />
      <p>
        The animation uses <code>react-spring</code> to run. I'll publish a full
        blogpost on the topic soon!
      </p>
      <LinkAsButton href={'/subscribe'} isFilled size="sm">
        {'Get notified'}
      </LinkAsButton>
      <p>
        <br />
      </p>
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {
    x: 1,
    groupA: 38,
    groupB: 19,
  },
  {
    x: 2,
    groupA: 16,
    groupB: 14,
  },
  ...
];
`.trim();

const snippetStack = `
const stackSeries = d3
  .stack()
  .keys(["groupA", "groupB"])

// stackSeries is now a function that takes the kind of
// dataset above and stack the series
`.trim();

const snippet3 = `
const series = stackSeries(data);
`.trim();

const snippetPivot = `
type LongDataItem = {
  date: string;
  group: string;
  value: number;
};

type WideDataItem = {
  date: string;
} & { [key: string]: number }

const pivotWider = (data: LongDataItem[]) => {
  const result: WideDataItem[] = [];

  data.forEach((item) => {
      const existingEntry = result.find((entry) => entry.date === item.date);

      if (existingEntry) {
          existingEntry[item.group] = item.value;
      } else {
          const newEntry = { date: item.date };
          newEntry[item.group] = item.value;
          result.push(newEntry);
      }
  });

  return result;
}
`.trim();

const snippetStackedData = `
[
  // First group of the dataset: at the very bottom of the stack
  [
    [0, 38, data: {…}], // First timestamp of the dataset: shape goes from 0 to 38 on the Y axis
    [0, 16, data: {…}], // Second timestamp: shape goes from 0 to 16
    ...                 // 1 entry per timestamp
    key: 'groupA',      // group name
    index: 0            // index
  ],

   // Second group of the dataset on top of the first one
  [[38, 57, data: {…}], ..., key: 'groupB', index: 1],

  //Third group
  [[57, 72, data: {…}], ..., key: 'groupC', index: 2],
  ...
]
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type WideDataItem = {
  date: string;
} & { [key: string]: number }

type StackedAreaGraphProps = {
  width: number;
  height: number;
  data: WideDataItem[];
};

export const StackedAreaGraph = ({ width, height, data }: StackedAreaGraphProps) => {

  // read the data
  // find the list of groups to display
  // stack the data
  // build the shapes

  return (
    <div>
      <svg width={width} height={height}>
        // render all the shapes
      </svg>
    </div>
  );
};
`.trim();
