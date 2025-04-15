import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import Link from 'next/link';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { StreamGraphBasicDemo } from '../viz/StreamGraphBasic/StreamGraphBasicDemo';
import { ResponsiveExplanationSection } from '../component/ResponsiveExplanationSection';
import { StreamGraphPageViewsDemo } from 'viz/StreamGraphPageViews/StreamGraphPageViewsDemo';
import { Accordion } from 'component/UI/AccordionGrey';
import { LinkAsButton } from 'component/LinkAsButton';
import { StreamGraphHoverEffectDemo } from 'viz/StreamGraphHoverEffect/StreamGraphHoverEffectDemo';
import { StreamGraphShapeTransitionDemo } from 'viz/StreamGraphShapeTransition/StreamGraphShapeTransitionDemo';
import { ToDoSection } from 'component/UI/ToDoSection';
import { ChartWithLink } from '@/component/ChartWithLink';
import { BarplotStreamgraphHoverEffectDemo } from '@/viz/BarplotStreamgraphHoverEffect/BarplotStreamgraphHoverEffectDemo';

const graphDescription = (
  <>
    <p>
      A{' '}
      <a href="https://www.data-to-viz.com/graph/streamgraph.html">
        streamgraph
      </a>{' '}
      is a variation of the more common{' '}
      <Link href="stacked-area-plot">stacked area chart</Link>. It rounds edges
      and displays areas around the central axis which gives a nice impression
      of flow.
    </p>
    <p>
      This section explains how to <b>stack</b> and <b>smooth</b> the data with{' '}
      <code>d3.js</code>, and render the shapes with <code>react</code>. It
      starts from the basic and goes until necessary customization like{' '}
      <b>tooltips</b>, <b>hover effect</b>, legend and <b>annotation</b>.
      Examples always come with editable sandboxes.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Streamchart with React"
      seoDescription="How to build a stream chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Streamchart"
        description={graphDescription}
        chartType="stream"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{' '}
      <p>
        Most of the time the input dataset is an <b>array</b> where each item is
        an <b>object</b>.
      </p>
      <p>
        Each object provides information for a step on the X axis. It has a
        value like <code>x</code> or <code>date</code> that provides the exact
        position on the X axis. Then it has several numeric values, one for{' '}
        <b>each group</b> of the dataset.
      </p>
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
        The goal here is to create a <code>StreamGraph</code> component that
        will be stored in a <code>StreamGraph.tsx</code> file. This component
        requires 3 props to render: a <code>width</code>, a <code>height</code>,
        and some <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{' '}
        <code>width</code> and <code>height</code> will be used to render an{' '}
        <code>svg</code> element in the DOM, in which we will insert the graph.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{' '}
        <code>StreamGraph</code> component:
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
      <h2 id="Stacking">Stacking series</h2>
      <p>
        Building a stream chart requires to <b>stack</b> the data. Series are
        displayed one on top of each other and you have to compute their
        positions on the Y axis.
      </p>
      <p>
        Fortunately, <code>D3.js</code> has a handy <code>stack()</code>{' '}
        function that does exactly that. The process is deeply explained in the{' '}
        <Link href="stacked-area-plot">stacked area chart</Link> section of the
        gallery.
      </p>
      <LinkAsButton href="stacked-area-plot" isFilled size="sm">
        {'Stacking explanation'}
      </LinkAsButton>
      <p className="mt-10">
        The only variation required here is to use the{' '}
        <code>d3.stackOffsetSilhouette</code> offset option. Instead of stacking
        everything <b>above</b> the 0 baseline, it will put groups on both parts
        of it.
      </p>
      <p>
        Computing the position of the chart series should look something like:
      </p>
      <CodeBlock code={snippet2} />
      {/*
      //
      // First streamgraph
      //
      */}
      <h2 id="basic example">Basic streamgraph example</h2>{' '}
      <p>
        Once more, the process to render the shape is very close to the{' '}
        <Link href="stacked-area-plot">stacked area chart</Link>. A few
        variations are required though.
      </p>
      <h3>&rarr; Smoothing</h3>
      <p>
        We need to smooth the area shape to get the good-looking organic flow.
        Once more d3 is here to the rescue with a{' '}
        <a href="https://github.com/d3/d3-shape#curves">curve</a> function that
        does all the work for us.
      </p>
      <p>
        This is how to call the <code>curve</code> function and the end of the{' '}
        <code>area</code> function call:
      </p>
      <CodeBlock code={snippetCurve} />
      <h3>&rarr; Axis</h3>
      <p>
        <Link href="build-axis-with-react">Usual axes</Link> do not work for
        streamgraphs. The Y axis would make no sense since shapes are on both
        side of the 0 baseline. It is commonly{' '}
        <a href="https://www.dataviz-inspiration.com/stream">removed</a>. The X
        axis would feel lost alone at the very bottom of the chart.
      </p>
      <p>
        Here I suggest to replace the X axis with <b>vertical ablines</b> and
        remove the Y axis completely.
      </p>
      <ChartOrSandbox
        vizName={'StreamGraphBasic'}
        VizComponent={StreamGraphBasicDemo}
        height={400}
        maxWidth={600}
        caption="Most basic streamgraph with react and d3.js"
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="stream" />
      {/*
      //
      // Hover effect
      //
      */}
      <h2 id="hover effect">Hover effect</h2>
      <p>
        It is pretty hard to follow the evolution of a <b>specific group</b> on
        a streamgraph.
      </p>
      <p>
        It is common to add an hover effect to the figure: hovering over a group
        will <b>highlight</b> it, making it easier to follow its evolution. Try
        it on the graph below:
      </p>
      <ChartOrSandbox
        vizName={'StreamGraphHoverEffect'}
        VizComponent={StreamGraphHoverEffectDemo}
        height={400}
        maxWidth={600}
        caption="StreamGraph with hover effect that highlights a specific series"
      />
      <p>There are various strategies to implement such an hover effect.</p>
      <p>
        Here, I suggest to do everything in <b>css</b> using{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">
          pseudo classes
        </a>
        , and targetting svg elements only. Basically, everything in the svg
        container will be <b>dimmed</b> (lower <b>opacity</b> and{' '}
        <b>saturation</b>) when the mouse goes over the chart. But the specific
        shape that is hovered over will keep its full opacity thanks to a more{' '}
        <b>specific</b> css selector.
      </p>
      <p>
        Another common challenge is to connect the streamgraph with another UI
        element. Here is an example connecting it with a barplot:
      </p>
      <ChartWithLink
        VizComponent={BarplotStreamgraphHoverEffectDemo}
        maxWidth={900}
        height={400}
        caption={
          'A barplot and a streamgraph side by side, connected by an hover effect.'
        }
        link="/example/barplot-hover-effect"
      />
      <p>
        There are several strategies to implement hover effect. If you're not
        exactly sure what you're doing, I highly recommend reading the{' '}
        <Link href="/course/hover-effect/introduction">hover effect</Link>{' '}
        section of the gallery first.
      </p>
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="stream" />
      {/*
      //
      // Transition
      //
      */}
      <h2 id="transition">Streamgraph algorithm with transition</h2>
      <p>
        Our streamgraph is renderer using a set of <code>path</code>. The{' '}
        <code>d</code> attribute of those paths provides the boundary{' '}
        <b>coordinates</b> of those paths.
      </p>
      <p>
        When a prop of the <code>StreamGraph</code> component updates, we might
        want to update the paths to represent the latest state of our
        application. It can be an update of the <b>dataset</b>, or an update of
        the function used to <b>stack</b> the data or <b>smooth</b> the area as
        below.
      </p>
      <p>
        It is possible to smoothly animate this transition thanks to{' '}
        <code>react-spring</code>.
      </p>
      <ChartOrSandbox
        vizName={'StreamGraphShapeTransition'}
        VizComponent={StreamGraphShapeTransitionDemo}
        height={600}
        maxWidth={600}
        caption="Try d3.js various options to offset the data and smooth shapes. See a smooth transition between options."
      />
      <p>
        The animation suggested above is a bit tricky to implement. Indeed, we
        need to transition from paths that <b>do not have the same number</b> of
        edges. It is possible thanks to a library called <code>flubber</code>{' '}
        but definitely deserves its own blogpost.
      </p>
      <p>I'll publish a full blogpost on the topic soon!</p>
      <LinkAsButton href={'/subscribe'} isFilled size="sm">
        {'Get notified'}
      </LinkAsButton>
      <ToDoSection text="find why flubber does some weird interpolation in some cases" />
      {/*
      //
      // Application
      //
      */}
      <h2 id="application">Application</h2>{' '}
      <p>
        The following chart is a real-life application of a <b>streamgraph</b>.
        It shows the evolution if the <b>number of page-views</b> for 5 tech
        websites in the last 7 years. My goal was to assess if the rise of{' '}
        <a href="https://openai.com/blog/chatgpt">chat-GPT</a> had an impact on
        it.
      </p>
      <p>
        This <b>interactive</b> chart has several interesting features:
      </p>
      <ul>
        <li>
          <b>slider</b>: you can control the displayed time-frame thanks to a
          slider.
        </li>
        <li>
          <b>inline legend</b>: label of each series are written inline. A
          background proportional to their value provides additional insight.
        </li>
        <li>
          <b>hover effect</b>: legend will be updated with precise values at the
          hovered timestamp.
        </li>
      </ul>
      <ChartOrSandbox
        vizName={'StreamGraphPageViews'}
        VizComponent={StreamGraphPageViewsDemo}
        height={600}
        maxWidth={900}
        caption="A customized streamgraph built with React and D3.js. It has inline legends, slider to control timeframe, hover effect and more."
      />
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

const snippet2 = `
const stackSeries = d3
  .stack()
  .keys(groups)
  .order(d3.stackOrderNone)
  .offset(d3.stackOffsetSilhouette);
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

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type WideDataItem = {
  date: string;
} & { [key: string]: number }

type StreamGraphProps = {
  width: number;
  height: number;
  data: WideDataItem[];
};

export const StreamGraph = ({ width, height, data }: StreamGraphProps) => {

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

const snippetCurve = `
const areaBuilder = d3
  .area()
  .x(d => xScale(x))
  .y1(d => yScale(d[1]))
  .y0(d => yScale(d[0]))
  .curve(curveCatmullRom);
`.trim();
