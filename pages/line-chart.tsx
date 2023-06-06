import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { LineChartBasicDemo } from "../viz/LineChartBasic/LineChartBasicDemo";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "component/ResponsiveExplanationSection";
import { LineChartDatasetTransitionDemo } from "viz/LineChartDatasetTransition/LineChartDatasetTransitionDemo";
import { Accordion } from "component/UI/Accordion";
import { ImageGrid } from "component/UI/ImageGrid";
import { GraphLinkImage } from "component/UI/GraphLinkImage";
import { LinkAsButton } from "component/LinkAsButton";
import { ToDoSection } from "component/UI/ToDoSection";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/line.html">line chart</a> or
      line graph displays the evolution of one or several numeric variables.
      This page is a step-by-step guide on how to build your own line chart
      component for the web, using <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/line">D3.js</a>.
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and how to
      initialize the <b>react component</b>. It then explains how to compute the
      scales, and axes. Once this is done, it shows how to render the lines and
      suggests a few variations. 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Line chart | The React Graph Gallery"
      seoDescription="How to build a line chart with React and D3.js. A set of re-usable components coming with editable code and explanations."
    >
      <TitleAndDescription
        title="Line chart"
        description={graphDescription}
        chartType="line"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{" "}
      <p>
        The dataset required to build a line chart is usually an array where
        each item is an object providing the <code>x</code> and the{" "}
        <code>y</code> values of the data point.
      </p>
      <br />
      <p>Here is a minimal example:</p>
      <CodeBlock code={snippetData} />
      <p>
        <u>Note</u>: if your data is in <code>.csv</code> format, you can
        translate it thanks to the <code>d3.csv()</code> function as suggested{" "}
        <a href="https://d3-graph-gallery.com/graph/line_basic.html">here</a>.
      </p>
      <p>
        <u>Note</u>: a line chart is often made to represent <b>time</b>. If
        your <code>x</code> property is a <b>date</b>, please visit the{" "}
        <Link href="/timeseries">timeseries</Link> section.
      </p>
      <LinkAsButton href="/timeseries" size="sm" isFilled>
        Timeseries section
      </LinkAsButton>
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>LineChart</code> component that will
        be stored in a <code>LineChart.tsx</code> file. This component requires
        3 props to render: a <code>width</code>, a <code>height</code>, and some{" "}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the
        LineChart.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>LineChart</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG <code>path</code>, but it's React that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>
      {/*
      //
      // Scales and Axes
      //
      */}
      <h2 id="scales & axes">Scales and Axes</h2>
      <p>
        Like for many charts, everything starts with <b>scales</b>. A scale is a{" "}
        <b>function</b> that transform the value of a data point in a position
        in <b>pixel</b>.
      </p>
      <p>
        Two scales are required here. One for the X axis, and one for the Y
        axis. They are both <b>linear</b> scales.
      </p>
      <p>
        This concept of scale is thoroughly described in other chart type pages
        like for the <Link href="/scatter-plot">scatterplot</Link> so I won't
        repeat it here. Also, dealing with the <code>Date</code> format shoud
        drive you to the <Link href="/timeseries">timeseries section</Link>.
      </p>
      <div className="flex">
        <LinkAsButton href="/scatter-plot" size="sm">
          Scatterplot
        </LinkAsButton>
        <LinkAsButton href="/timeseries" size="sm" isFilled>
          Timeseries
        </LinkAsButton>
      </div>
      {/*
      //
      // The d3.line() function
      //
      */}
      <h2 id="d3.line()">
        The <code>d3.line()</code> function
      </h2>
      <p>
        From the dataset described above, we want to draw a line in SVG. In the
        DOM this is done using a <code>path</code> element that has a{" "}
        <code>d</code> attribute.
      </p>
      <p>
        Fortunately, d3.js offers the <code>d3.line()</code> function that helps
        us doing this. <code>d3.line()</code> is a function that returns a
        function. It can be invoked this way:
      </p>
      <CodeBlock code={snippetLineBuilder} />
      <p>
        Here 2 <b>accessor functions</b> are provided. An accessor function
        tells to d3 how to find the position in pixel of a datapoint based on an
        item of the initial dataset.
      </p>
      <p>
        <code>lineBuilder</code> is now a function that expects a dataset as
        input and returns a SVG <code>path</code> from it.{" "}
      </p>{" "}
      <CodeBlock code={snippetLinePath} />
      <p>
        {" "}
        This path can easily be plotted as shown in the following section. 🎉
      </p>
      {/*
      //
      // Basic line chart
      //
      */}
      <h2 id="basic">Most basic line chart</h2>
      <p>
        Most of the job is done already. It is just a matter of passing the{" "}
        <code>path</code> computed above to the SVG element. Something like
        this:
      </p>
      <CodeBlock code={snippetRendering} />
      <p>Leading to our first line chart! 🔥</p>
      <ChartOrSandbox
        vizName={"LineChartBasic"}
        VizComponent={LineChartBasicDemo}
        height={500}
        maxWidth={600}
        caption="Most basic line chart made with react (rendering) and d3.js (path computation)"
      />
      <p>
        Note: you can compare this with a{" "}
        <a href="https://d3-graph-gallery.com/graph/line_basic.html">
          d3.js only approach
        </a>
      </p>
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="line" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="line" />
      {/*
      //
      // Transition
      //
      */}
      <h2 id="transition">Transition</h2>
      <p>
        How can we <b>smoothly animate</b> the transition between 2 datasets on
        a line chart? Click on the buttons on top of the chart below to trigger
        an animation between 2 groups of a dataset.
      </p>
      <p>
        This is possible thanks to the{" "}
        <a href="https://react-spring.dev/">react spring</a> library. Basically,
        instead of rendering usual a <code>path</code> element, the library
        provides an <code>animated.path</code> element, that is linked to a{" "}
        <code>useSpring</code> hook.
      </p>
      <p>
        This is what the <code>LineItem</code> component I use looks like:
      </p>
      <Accordion
        startOpen={false}
        title={
          <span>
            <code>LineItem</code>: a component that animates the transition of a{" "}
            <code>path</code>
          </span>
        }
      >
        <CodeBlock code={snippetLine} />
      </Accordion>
      <ChartOrSandbox
        vizName={"LineChartDatasetTransition"}
        VizComponent={LineChartDatasetTransitionDemo}
        height={400}
        maxWidth={600}
        caption="Click on the buttons to trigger a smooth transition between the 2 line charts."
      />
      <p>
        <b>Animation</b> in dataviz using React is a <b>big</b> topic. It's
        impossible to go in-depth here! I will publish a dedicated blog post on
        the topic soon. Please <Link href="subscribe">subscribe</Link> to the
        newsletter if you want to be notified.
      </p>
      {/*
      //
      // Going further
      //
      */}
      <h2 id="variation">Variations</h2>
      <p>
        You know have the basic understanding on how to build a <b>basic</b>{" "}
        line chart component with React and d3.js. Below are a few examples
        showing how to build more <b>complex</b> graphs based on those
        principles.
      </p>
      <ImageGrid>
        <GraphLinkImage
          link={"/example/line-chart-synchronized-cursors"}
          title={"Synchronized cursors"}
          description={<p>Add a cursor synchronized on all your charts</p>}
          img={"line-chart-synced-cursor.gif"}
          alt={"line charts with synchronized cursors"}
        />
      </ImageGrid>
      {/*
      //
      // Coming next
      //
      */}
      <h2 id="next">Next</h2>
      <p>
        The{" "}
        <a href="https://www.react-graph-gallery.com">react graph gallery</a> is
        under heavy development. Here is a list of things that will be added
        soon.
      </p>
      <ToDoSection text="How to add a tooltip" />
      <ToDoSection text="Multi groups line charts aka Spaghetti chart" />
      <ToDoSection text="Sync with a bar chart" />
      <ToDoSection text="Dual Y Axis" />
      <ToDoSection text="Inline legend with Reppel" />
      <p>
        <br />
      </p>{" "}
      <p>Subscribe to the gallery to know when it is ready!</p>
      <LinkAsButton isFilled size="sm" href="Subscribe">
        Subscribe
      </LinkAsButton>
      <p>
        <br />
      </p>{" "}
      {/* <ChartOrSandbox
        vizName={"LineChartDatasetTransition"}
        VizComponent={LineChartPageViewsDemo}
        height={400}
        maxWidth={600}
        caption="Click on the buttons to trigger a smooth transition between the 2 line charts."
      /> */}
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {x:1, y: 90},
  {x: 2, y: 12},
  {x: 3, y: 34},
  {x: 4, y: 53},
  {x: 5, y: 98},
]
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type LineChartProps = {
  width: number;
  height: number;
  data: {x: number, y: number}[];
};

export const LineChart = ({ width, height, data }: LineChartProps) => {

  // read the data
  // build the scales and axes
  // build the lines

  return (
    <div>
      <svg width={width} height={height}>
        // render axes
        // render all the <path>
      </svg>
    </div>
  );
};
`.trim();

const snippetLineBuilder = `
const lineBuilder = d3
  .line()
  .x((d) => xScale(d.x))
  .y((d) => yScale(d.y));
`.trim();

const snippetLinePath = `
const linePath = lineBuilder(data);

// console.log(linePath)
// 'M31.02,26.99 L63.02,59.9 L287.1,194.4 L319,178.2'
`.trim();

const snippetRendering = `
<svg width={width} height={height}>
  <g ...some translation >
    <path
      d={linePath}
      stroke="#9a6fb0"
      fill="none"
      strokeWidth={2}
    />
  </g>
</svg>
`.trim();

const snippetLine = `
type LineItemProps = {
  path: string;
  color: string;
};

const LineItem = ({ path, color }: LineItemProps) => {
  const springProps = useSpring({
    to: {
      path,
      color,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <animated.path
      d={springProps.path}
      fill={"none"}
      stroke={color}
      strokeWidth={2}
    />
  );
};`.trim();
