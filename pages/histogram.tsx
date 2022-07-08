import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { DensityChartBasicDemo } from "../viz/DensityChartBasic/DensityChartBasicDemo";
import { DensityChartWithAxisDemo } from "../viz/DensityChartWithAxis/DensityChartWithAxisDemo";
import { HistogramWithAxisDemo } from "../viz/HistogramWithAxis/HistogramWithAxisDemo";

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
export const data = [
  75.0,
  104.0,
  369.0,
  300.0,
  92.0
]
`.trim();

const snippet2 = `
function kernelDensityEstimator(kernel, X) {
  return function(V) {
    return X.map(function(x) {
      return [x, d3.mean(V, function(v) { return kernel(x - v); })];
    });
  };
}

function kernelEpanechnikov(k) {
  return function(v) {
    return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
  };
}
`.trim();

const snippet3 = `
const data = [11, 22, 21, 33, 43, 49, 2, 4, 5, 1, 6];
const buckets = [0, 10, 20, 30, 40, 50];
`.trim();

const snippet4 = `
const computeKde = kernelDensityEstimator(kernelEpanechnikov(7), buckets);
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
          The <code>bin()</code> function returns a function that is a bin
          generator. Here is an example of its usage:
        </p>
        <p>Here is how the formulas look like:</p>
        <p>
          <CodeBlock code={snippet2} />
        </p>

        <h3>&rarr; Computing the density</h3>
        <p>
          You don't have to understand each row of this code, but you have to
          understand how to use it.
        </p>
        <p>
          Everything starts with a set of numeric values (the data we want to
          study) and a set of buckets. The more buckets you create, the smoother
          the density will be.
        </p>
        <CodeBlock code={snippet3} />
        <p>
          We can now create a function that computes a density from a dataset,
          given some buckets:
        </p>
        <CodeBlock code={snippet4} />
        <p>And finally compute the density for our dataset:</p>
        <CodeBlock code={snippet5} />
      </AccordionSection>

      <AccordionSection title={"Plotting the bars"} startOpen={true}>
        <p>
          Now that the density coordinates are available, it's just a matter of
          creating the <code>path</code> of a <code>svg</code> shape.
        </p>
        <p>
          Fortunately, d3 comes with the handy <code>d3.line()</code> function
          that allows to go from a set of coordinates to a path easily. In order
          to keep the smoothing, you can use the <code>.curve()</code> attribute
          as described in the code below.
        </p>
        <br />
        <ChartOrSandbox
          VizComponent={DensityChartBasicDemo}
          vizName={"DensityChartBasic"}
          maxWidth={600}
          height={300}
          caption={
            "Most basic density chart made with react and d3.js. Almost there, we we miss the axes here."
          }
        />
      </AccordionSection>

      <AccordionSection title={"Adding axis"} startOpen={true}>
        <p>
          The density chart above is pretty useless since we have no clue on
          what the X axis represents. We need to display the bucket values to
          make the chart insightful.
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
          In the example below, I chosed to use the d3 way to render the X axis
          only:
        </p>
        <br />
        <ChartOrSandbox
          VizComponent={HistogramWithAxisDemo}
          vizName={"HistogramWithAxis"}
          maxWidth={600}
          height={300}
          caption={
            "Adding a X axis with d3 makes the chart much more insightful."
          }
        />
      </AccordionSection>

      <AccordionSection
        title={"Responsive density chart with react"}
        startOpen={true}
      >
        <p>
          The component above is not responsive. It expects 2 props called{" "}
          <code>width</code> and <code>height</code> and will render a density
          chart of those dimensions.
        </p>
        <p>
          Making the density responsive requires to add a <b>wrapper</b>{" "}
          component that gets the dimension of the parent <code>div</code>, and
          listen to a potential dimension change.
        </p>
        <p>
          The process is extensively described in{" "}
          <a href="https://www.react-graph-gallery.com/make-a-graph-responsive">
            this post
          </a>{" "}
          of the gallery. Basically most of the job is made by a hook called{" "}
          <code>useDimensions</code> that targets a specific <code>ref</code>.
          This is a quick summary of how it works:
        </p>
        <CodeBlock code={snippet3} />
        <a href="https://www.react-graph-gallery.com/make-a-graph-responsive">
          Read more about responsiveness
        </a>
        <br />
      </AccordionSection>

      <AccordionSection
        title={"Density chart with multiple groups"}
        startOpen={true}
      >
        <p>Coming soon!</p>
        <br />
      </AccordionSection>

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="distribution" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
