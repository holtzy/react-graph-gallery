import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { data } from "../viz/HeatmapBasic/data";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { Heatmap as HeatmapBasic } from "../viz/HeatmapBasic/Heatmap";
import { HeatmapBasicDemo } from "../viz/HeatmapBasic/HeatmapBasicDemo";
import { HeatmapVaccinationDemo } from "../viz/HeatmapVaccination/HeatmapVaccinationDemo";
import { HeatmapTooltipDemo } from "../viz/HeatmapTooltip/HeatmapHeatmapTooltipDemo";
import { DensityChartBasicDemo } from "../viz/DensityChartBasic/DensityChartBasicDemo";
import { DensityChartWithAxisDemo } from "../viz/DensityChartWithAxis/DensityChartWithAxisDemo";

const graphDescription = (
  <p>
    This page explains how to build a{" "}
    <a href="https://www.data-to-viz.com/graph/density.html">density plot</a>{" "}
    using
    <code>react</code> and <code>d3.js</code>. It starts by describing how the
    input data must be formatted, and then explains how to compute a density
    from it. Last but not least, it shows how to plot the result and suggests
    some variations.
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
      title="Density chart with React"
      seoDescription="How to build a density plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Density chart"
        description={graphDescription}
        chartType="density"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>Building a density chart only requires a set of numeric values.</p>
        <p>
          As a result, the dataset is pretty simple: it is simply an{" "}
          <code>array</code> of <code>number</code>.
        </p>
        <br />
        <p>Here is a minimal example of the data structure:</p>

        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection title={"Kernel density estimation"} startOpen={true}>
        <h3>&rarr; Definition</h3>
        <p>
          <a href="https://en.wikipedia.org/wiki/Kernel_density_estimation">
            Kernel density estimation
          </a>{" "}
          is a method of estimating the probability distribution of a random
          variable based on a random sample.
        </p>
        <p>
          Density is a bit like constructing a histogram, but with a smoothing
          step.
        </p>
        <p>
          With the correct choice of bandwidth, important features of the
          distribution can be seen, while an incorrect choice results in
          undersmoothing or oversmoothing and obscured features
        </p>

        <h3>&rarr; Implementation</h3>
        <p>
          The implementation I'm using here comes from{" "}
          <a href="https://bl.ocks.org/mbostock/4341954">this block</a> by Mike
          Bostock.
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

        <h3>&rarr; Density object format</h3>
        <p>
          The result is an array of arrays. Its length with the same length as
          the number of bucket + 1. In our example it looks like:
        </p>
        <CodeBlock code={snippet6} />
        <p>
          The first item of each array is the lower bound of the bucket. We will
          use it for the X axis. The second item is the value of the density in
          this bucket. It will be used for the Y axis.
        </p>
      </AccordionSection>

      <AccordionSection title={"Plotting this density"} startOpen={true}>
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
          VizComponent={DensityChartWithAxisDemo}
          vizName={"DensityChartWithAxis"}
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
