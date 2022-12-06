import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { HistogramWithAxisDemo } from "../viz/HistogramWithAxis/HistogramWithAxisDemo";
import { HistogramBasicDemo } from "../viz/HistogramBasic/HistogramBasicDemo";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import { Caption } from "../component/UI/Caption";
import { HistogramDatasetTransitionDemo } from "../viz/HistogramDatasetTransition/HistogramDatasetTransitionDemo";

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
              with React and d3.js
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
      // Binning
      //
      */}
      <h2 id="binning">Computing the histogram buckets</h2>
      <h3>&rarr; Definition</h3>
      <p>
        To build a histogram we have to split the data values in a set of{" "}
        <b>buckets</b>. For each bucket, we will count the number of items in
        it.
      </p>
      <p>
        This process is called <b>binning</b>. Binning groups discrete samples
        into a smaller number of consecutive, non-overlapping intervals.
      </p>
      <div className="flex flex-col items-center mt-8 mb-12">
        <img src="/img/binning-process.png" style={{ maxWidth: 700 }} />
        <Caption>
          Binning is the process of dividing the range of values in a dataset
          into intervals, and then counting the number of values that fall into
          each interval
        </Caption>
      </div>
      <h3>&rarr; The bin generator</h3>
      <p>
        Fortunately, d3.js has a handy <code>bin()</code> function for this
        task. (See the <a href="https://github.com/d3/d3-array#bin">doc</a>.)
      </p>
      <p>
        The <code>bin()</code> function returns a <b>function</b> that is a bin
        generator. Example:
      </p>
      <CodeBlock code={snippet2} />
      <p>
        3 arguments are passed to the <code>bin()</code> function:
      </p>
      <ul>
        <li>
          <code>value</code> is the accessor function. For each item of the
          array we will pass to the <code>bucketGenerator</code>, this is how to
          get the numeric value of interest.
        </li>
        <li>
          <code>domain</code> is the lower and upper bounds of the histogram.
        </li>
        <li>
          <code>thresholds</code> is an array with the limits of each bucket.
          Note that it can be easily computed from a usual{" "}
          <code>scaleLinear</code>.
        </li>
      </ul>
      <h3>&rarr; Bucket format</h3>
      <p>The bucketGenerator can be applied to our dummy dataset:</p>
      <CodeBlock code={snippet3} />
      <p>
        The result is an array of arrays. Each item represents a bucket. Each
        bucket is composed by all the values assigned to this bucket. Its{" "}
        <code>length</code> is the bucket size, i.e. the future bar height.
      </p>
      <p>
        Each bin has two additional attributes: <code>x0</code> and{" "}
        <code>x1</code> being the lower (inclusive) and upper (exclusive) bounds
        of the bin.
      </p>
      <CodeBlock code={snippet4} />
      <p>Let's transform those buckets in bars.</p>
      {/*
      //
      // Scales
      //
      */}
      <h2 id="Scales">Scales</h2>
      <p>
        The data wrangling part is done, but we're not ready to draw our bars
        yet 😢.
      </p>
      <p>
        Building a histogram requires to transform <b>dimensions</b> (the number
        of item per bucket and the bucket limits) in <b>positions in pixels</b>.
        This is done using a fundamental dataviz concept called <b>scale</b>.
      </p>
      <p>
        D3.js comes with a handful set of{" "}
        <a href="https://github.com/d3/d3-scale">predefined scales</a>.{" "}
        <code>scaleLinear</code> is what we need for the X and Y axis.
      </p>
      <h3>&rarr; X Scale</h3>
      <p>
        The X scale is displayed <b>horizontally</b>. It covers the{" "}
        <code>width</code> of the <code>svg</code> container, and its domain
        goes from the <code>min</code> to the <code>max</code> of the dataset.
      </p>
      <CodeBlock code={snippetXScale} />
      <h3>&rarr; Y Scale</h3>
      <p>
        The Y scale is displayed <b>vertically</b>. It shows how many items are
        available in each bin. To compute it you need to find the bucket with
        the highest number of items. Something like:
      </p>
      <CodeBlock code={snippetYScale} />
      {/*
      //
      // Bars
      //
      */}
      <h2 id="bars">Drawing the bars</h2>
      <p>Finally! ✨</p>
      <p>
        We can now <code>map</code> through the bucket object and draw a{" "}
        <b>rectangle</b> per bucket thanks to the scales computed above.
      </p>
      <p>Code looks like this:</p>
      <CodeBlock code={snippetRects} />
      <p>
        Remember that the <code>x</code> and <code>y</code> attributes of the
        svg <code>rect</code> element provide the x and y position of the top
        left corner of the rectangle (see{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect">
          doc
        </a>
        ). This is why the rectangle <code>height</code> is computed by
        substracting <code>yScale(bucket.length)</code> to the total{" "}
        <code>height</code>.
      </p>
      <br />
      <ChartOrSandbox
        VizComponent={HistogramBasicDemo}
        vizName={"HistogramBasic"}
        maxWidth={600}
        height={300}
        caption={
          "Values of the dataset as distributed into bins. Bins are represented as rectangles. Data wrangling is made with d3.js, rendering with react."
        }
      />
      {/*
      //
      // Axes
      //
      */}
      <h2 id="axes">Axes</h2>
      <p>
        The last step to get a decent chart is to add 2 <b>axes</b>. Otherwise
        the bucket bounds are not available, removing all potential insight of
        the chart.
      </p>
      <p>
        There are 2 main strategies to add axis to a react chart made with
        d3.js. This process is extensively described{" "}
        <a href="https://www.react-graph-gallery.com/build-axis-with-react">
          here
        </a>
        .
      </p>
      <p>
        In the example below, I chosed to use the d3 way to render both axis.
        Note also that a real dataset is used this time, showing the
        distribution of Air BnB prices on the french riviera.
      </p>
      <br />
      <ChartOrSandbox
        VizComponent={HistogramWithAxisDemo}
        vizName={"HistogramWithAxis"}
        maxWidth={900}
        height={300}
        caption={
          "Adding a X axis with d3 makes the chart much more insightful."
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
        it opens an infinite world of customization. Here are a few examples:
        adding several groups, splitting the window to show groups separately
        and more.
      </p>
      <p>Click on the overview to see details and code.</p>
      <br />
      <div className="flex gap-4">
        <div className="cursor-pointer shadow-md">
          <img
            src="/chartView/histMultiGroup.png"
            style={{ height: 70 }}
            // onClick={() => setChart(0)}
          />
        </div>
        <div className="cursor-pointer shadow-md">
          <img
            src="/chartView/histMultiGroupSplit.png"
            style={{ height: 70 }}
            // onClick={() => setChart(1)}
          />
        </div>
      </div>
      {/*
        {chart === 0 && (
          <ChartOrSandbox
            VizComponent={HistogramSeveralGroupsDemo}
            vizName={"HistogramSeveralGroups"}
            maxWidth={900}
            height={300}
            caption={
              "Histogram with several groups represented. A slight transparency is used to show places where bars overlap."
            }
          />
        )} */}
      {/* {chart === 1 && (
          <ChartOrSandbox
            VizComponent={HistogramSeveralGroupsSplitPanelDemo}
            vizName={"HistogramSeveralGroupsSplitPanel"}
            maxWidth={900}
            height={300}
            caption={
              "Using small multiples to compare the distribution of several groups in a dataset."
            }
          /> )} */}
      <br />
      {/*
      //
      // Dataset transition
      //
      */}
      <h2 id="transition">Dataset transition</h2>
      <p>
        The last step needed for a powerful histogram react component is a
        proper way to transition between various dataset. When the{" "}
        <code>data</code> prop updates, we need a stunning way to transition to
        the new values.
      </p>
      <p>
        As a result, the dataset is pretty simple: it is simply an{" "}
        <code>array</code> of <code>number</code>.
      </p>
      <br />
      <p>Here is a minimal example of the data structure:</p>

      <ChartOrSandbox
        VizComponent={HistogramDatasetTransitionDemo}
        vizName={"HistogramDatasetTransition"}
        maxWidth={900}
        height={300}
        caption={
          "Adding a X axis with d3 makes the chart much more insightful."
        }
      />

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
