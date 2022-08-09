import React, { useState } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { HistogramWithAxisDemo } from "../viz/HistogramWithAxis/HistogramWithAxisDemo";
import { HistogramBasicDemo } from "../viz/HistogramBasic/HistogramBasicDemo";
import { HistogramSeveralGroupsDemo } from "../viz/HistogramSeveralGroups/HistogramSeveralGroupsDemo";
import { HistogramSeveralGroupsSplitPanelDemo } from "../viz/HistogramSeveralGroupsSplitPanel/HistogramSeveralGroupsSplitPanelDemo";
import { ParallaxSection } from "../component/ParallaxSection";
import { LinkAsButton } from "../component/LinkAsButton";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";

const graphDescription = (
  <p>
    This page explains how to build a{" "}
    <a href="https://www.data-to-viz.com/graph/histogram.html">histogram</a>{" "}
    using
    <code>react</code> and <code>d3.js</code>. It starts by describing how the
    input data must be formatted, and then explains how to compute the buckets
    composing the histogram. Last but not least, it shows how to plot the result
    and suggests some variations.
  </p>
);

const snippet1 = `
const data = [1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 9]
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

const snippet5 = `
const density = computeKde(data);
`.trim();

const snippet6 = `
[
  [0, 0.03],
  [10, 0.02],
  [20, 0.01],
  [30, 0.00],
  [40, 0.00],
  [50, 0.00]
]
`.trim();

export default function Home() {
  const [chart, setChart] = useState(0);

  return (
    <Layout
      title="Histogram with React"
      seoDescription="How to build a histogram with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="histogram"
        description={graphDescription}
        chartType="histogram"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>Building a histogram only requires a set of numeric values.</p>
        <p>
          As a result, the dataset is pretty simple: it is simply an{" "}
          <code>array</code> of <code>number</code>.
        </p>
        <br />
        <p>Here is a minimal example of the data structure:</p>
        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection
        title={"Computing the histogram buckets"}
        startOpen={true}
      >
        <h3>&rarr; Definition</h3>
        <p>
          To build a histogram we have to split the data values in a set of
          buckets. For each bucket, we will count the number of items in it.
        </p>
        <p>
          This process is called <b>binning</b>. Binning groups discrete samples
          into a smaller number of consecutive, non-overlapping intervals.
        </p>
        <p>
          Fortunately, d3.js has a handy <code>bin()</code> function for this
          task. (See the <a href="https://github.com/d3/d3-array#bin">doc</a>.)
        </p>

        <h3>&rarr; The bin generator</h3>
        <p>
          The <code>bin()</code> function returns a <b>function</b> that is a
          bin generator. Example:
        </p>
        <CodeBlock code={snippet2} />
        <p>
          3 arguments are passed to the <code>bin()</code> function:
        </p>
        <ul>
          <li>
            <code>value</code> is the accessor function. For each item of the
            array we will pass to the <code>bucketGenerator</code>, this is how
            to get the numeric value of interest.
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
          <code>x1</code> being the lower (inclusive) and upper (exclusive)
          bounds of the bin.
        </p>
        <CodeBlock code={snippet4} />
        <p>Let's transform those buckets in bars.</p>
      </AccordionSection>

      <AccordionSection title={"Plotting the bars"} startOpen={true}>
        <p>
          Now that the bucket information is available, we have to{" "}
          <code>map</code> through it and draw a rectangle per bucket.
        </p>
        <p>
          There is nothing unusual here. The <code>xScale</code> and{" "}
          <code>yScale</code> are computed using the <code>scaleLinear()</code>{" "}
          function of d3. It's important to wrap this in a <code>useMemo</code>{" "}
          hook to avoid recomputing unnecessarily.
        </p>
        <br />
        <ChartOrSandbox
          VizComponent={HistogramBasicDemo}
          vizName={"HistogramBasic"}
          maxWidth={600}
          height={300}
          caption={
            "Values of the dataset as distributed into bins. Bins are represented as rectangles."
          }
        />
      </AccordionSection>

      <AccordionSection title={"Adding axis"} startOpen={true}>
        <p>
          The last step to get a decent chart is to draw some axis. Otherwise
          the bucket bounds are not available removing all insight of the chart.
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
      </AccordionSection>

      <ResponsiveExplanationSection chartId="histogram" />

      <AccordionSection title={"Histogram variations"} startOpen={true}>
        <p>
          Once you've understood how to build a basic histogram with d3 and
          react, it opens an infinite world of customization. Here are a few
          examples: adding several groups, splitting the window to show groups
          separately and more.
        </p>
        <p>Click on the overview to see details and code.</p>
        <br />
        <div className="flex gap-4">
          <div className="cursor-pointer shadow-md">
            <img
              src="/chartView/histMultiGroup.png"
              style={{ height: 70 }}
              onClick={() => setChart(0)}
            />
          </div>
          <div className="cursor-pointer shadow-md">
            <img
              src="/chartView/histMultiGroupSplit.png"
              style={{ height: 70 }}
              onClick={() => setChart(1)}
            />
          </div>
        </div>

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
        )}
        {chart === 1 && (
          <ChartOrSandbox
            VizComponent={HistogramSeveralGroupsSplitPanelDemo}
            vizName={"HistogramSeveralGroupsSplitPanel"}
            maxWidth={900}
            height={300}
            caption={
              "Using small multiples to compare the distribution of several groups in a dataset."
            }
          />
        )}
        <br />
      </AccordionSection>

      <DatavizInspirationParallaxLink chartId="histogram" />

      <AccordionSection title={"Dataset transition"} startOpen={true}>
        <p>
          The last step needed for a powerful histogram react component is a
          proper way to transition between various dataset. When the{" "}
          <code>data</code> prop updates, we need a stunning way to transition
          to the new values.
        </p>
        <p>
          As a result, the dataset is pretty simple: it is simply an{" "}
          <code>array</code> of <code>number</code>.
        </p>
        <br />
        <p>Here is a minimal example of the data structure:</p>
        <CodeBlock code={snippet1} />
      </AccordionSection>

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="distribution" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
