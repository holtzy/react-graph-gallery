import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { LineChartBasicDemo } from "../viz/LineChartBasic/LineChartBasicDemo";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "component/ResponsiveExplanationSection";
import { LineChartDatasetTransitionDemo } from "viz/LineChartDatasetTransition/LineChartDatasetTransitionDemo";

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
        Note: if your data is in <code>.csv</code> format, you can translate it
        thanks to the <code>d3.csv()</code> function as suggested{" "}
        <a href="https://d3-graph-gallery.com/graph/line_basic.html">here</a>.
      </p>
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>Histogram</code> component that will
        be stored in a <code>Histogram.tsx</code> file. This component requires
        3 props to render: a <code>width</code>, a <code>height</code>, and some{" "}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the
        histogram.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>Histogram</code> component:
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
      // The d3.line() function
      //
      */}
      <h2 id="d3.line()">The d3.line() function</h2>
      <p>Explain how the d3.line() function works</p>
      {/*
      //
      // Basic line chart
      //
      */}
      <h2 id="basic">Most basic line chart</h2>
      <p>
        There is nothing really tricky when it comes to build a basic barplot
        with react, all is pretty close to the{" "}
        <a href="https://d3-graph-gallery.com/graph/line_basic.html">
          d3-only examples
        </a>
        .
      </p>
      <p>
        First of all you probably want to add some margins around the dimensions
        provided in the component properties as described{" "}
        <Link href="/build-axis-with-react">here</Link>.
      </p>
      <p>
        Both the X and Y axis are using a numeric scale thanks to the{" "}
        <code>scaleLinear()</code> function here. Note that a usual struggle is
        to deal with the date format but this is described in the timeseries
        section.
      </p>
      <ChartOrSandbox
        vizName={"LineChartBasic"}
        VizComponent={LineChartBasicDemo}
        height={400}
        maxWidth={600}
        caption="most basic line chart with react and d3.js"
      />
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
      <p>How to switch between dataset</p>
      <ChartOrSandbox
        vizName={"LineChartDatasetTransition"}
        VizComponent={LineChartDatasetTransitionDemo}
        height={400}
        maxWidth={600}
        caption="Click on the buttons to trigger a smooth transition between the 2 line charts."
      />
      {/*
      //
      // Application
      //
      */}
      <h2 id="application">Application</h2>
      <p>Application on a real dataset</p>
      <ChartOrSandbox
        vizName={"LineChartBasic"}
        VizComponent={LineChartBasicDemo}
        height={400}
        maxWidth={600}
        caption="most basic line chart with react and d3.js"
      />
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
  {x: 3, , y: 34},
  {x: 4, , y: 53},
  {x: 5, , y: 98},
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
