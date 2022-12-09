import React from "react";
import { Layout } from "../../component/Layout";
import TitleAndDescription from "../../component/TitleAndDescription";
import ChartFamilySection from "../../component/ChartFamilySection";
import { CodeBlock } from "../../component/UI/CodeBlock";
import { ChartOrSandbox } from "../../component/ChartOrSandbox";
import { HistogramSeveralGroupsDemo } from "../../viz/HistogramSeveralGroups/HistogramSeveralGroupsDemo";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/histogram.html">histogram</a>{" "}
      is a chart type that shows the distribution of a numeric variable. This
      page is a step-by-step guide on how to build your own histogram for the
      web, using <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/histogram">D3.js</a>.
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and how to
      initialize the <b>histogram component</b>. It then explains how to compute
      the buckets composing the histogram. Once this is done, it shows how to
      render the bars and suggests a few variations. 🙇‍♂️.
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
        title={
          <h1>
            Histogram{" "}
            <span className="text-gray-600 font-light hidden sm:inline">
              with several groups
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="histogram"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        Building a histogram only requires a set of <b>numeric values</b>.
      </p>
      <p>
        As a result, the dataset is pretty simple: it is simply an{" "}
        <code>array</code> of <code>number</code>.
      </p>
      <br />
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />
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
        <code>width</code> and <code>height</code> will be used to rendering a{" "}
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
        will be used to prepare the svg <code>circle</code>, but it's react that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>

      {/*
      //
      // Variations
      //
      */}
      <h2 id="variations">Variations</h2>
      <p>
        Once you've understood how to build a basic histogram with d3 and react,
        it opens an infinite world of customization. Here are a few examples:
        adding several groups, splitting the window to show groups separately
        and more.
      </p>
      <p>Click on the overview to see details and code.</p>
      <ChartOrSandbox
        VizComponent={HistogramSeveralGroupsDemo}
        vizName={"HistogramSeveralGroups"}
        maxWidth={500}
        height={400}
        caption={
          "Histogram with several groups represented. A slight transparency is used to show places where bars overlap."
        }
      />

      <br />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 9]
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type HistogramProps = {
  width: number;
  height: number;
  data: number[];
};

export const Histogram = ({ width, height, data }: HistogramProps) => {

  // read the data
  // build buckets from the dataset
  // build the scales
  // build the rectangles

  return (
    <div>
      <svg width={width} height={height}>
        // render all the <rect>
      </svg>
    </div>
  );
};
`.trim();

const snippet2 = `
const bucketGenerator = d3
  .bin()
  .value((d) => d)
  .domain([0, 10])
  .thresholds([0, 2, 4, 6, 8, 10]);
`.trim();

const snippet3 = `
bucketGenerator(data)
`.trim();

const snippet4 = `
[
  [x0: 0, x1: 2],
  [2, 2, 2, 3, x0: 2, x1: 4],
  [4, 5, x0: 4, x1: 6],
  [6, 6, 6, x0: 6, x1: 8],
  [x0: 8, x1: 10],
  [x0: 10, x1: 10],
]
`.trim();

const snippetXScale = `
const xScale = d3
  .scaleLinear()
  .domain([0, 10])
  .range([0, width]);

// xScale(0) -> 0 (the left hand side position of the first bin)
// xScale(10) -> width (the right hand side position of the last bin)
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
