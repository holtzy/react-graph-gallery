import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { DensityChartBasicDemo } from "../viz/DensityChartBasic/DensityChartBasicDemo";
import { DensityChartWithAxisDemo } from "../viz/DensityChartWithAxis/DensityChartWithAxisDemo";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import Link from "next/link";
import DatavizInspirationParallaxLink from "component/DatavizInspirationParallaxLink";
import { DensitySeveralGroupsDemo } from "viz/DensitySeveralGroups/DensitySeveralGroupsDemo";

const graphDescription = (
  <>
    <p>
      A{" "}
      <a href="https://www.data-to-viz.com/graph/density.html">density plot</a>{" "}
      is a chart type that shows the distribution of a numeric variable. This
      page is a step-by-step guide on how to build your own density plot for the
      web, using <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/density.html">D3.js</a>.
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and how to
      initialize the <b>density component</b>. It then explains how to compute a{" "}
      <b>kernel density</b>. Once this is done, it shows how to render the
      density shape and suggests a few variations. 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Density chart with React"
      seoDescription="How to build a density plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title={
          <h1>
            Density chart{" "}
            <span className="text-gray-600 font-light hidden sm:inline">
              with React and d3.js
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="density"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{" "}
      <p>Building a density chart only requires a set of numeric values.</p>
      <p>
        As a result, the dataset is pretty simple: just an <code>array</code> of{" "}
        <code>number</code>.
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
        The goal here is to create a <code>Density</code> component that will be
        stored in a <code>Density.tsx</code> file. This component requires 3
        props to render: a <code>width</code>, a <code>height</code>, and some{" "}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the
        histogram.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our <code>Density</code>{" "}
        component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG <code>circle</code>, but it's React that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>
      {/*
      //
      // Kernel density
      //
      */}
      <h2 id="kernel density">Kernel density</h2>
      <h3>&rarr; Definition</h3>
      <p>
        <a href="https://en.wikipedia.org/wiki/Kernel_density_estimation">
          Kernel density estimation
        </a>{" "}
        is a method of estimating the <b>probability distribution</b> of a
        random variable based on a random sample.
      </p>
      <p>
        Density is a bit like constructing a{" "}
        <Link href="/histogram">histogram</Link>, but with a smoothing step.
      </p>
      <p>
        With the correct choice of <b>bandwidth</b>, important features of the
        distribution can be seen, while an incorrect choice results in
        undersmoothing or oversmoothing and obscured features.
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
      <blockquote className="mt-2">
        Note that 2 parameters have an impact on the estimate’s smoothness.{" "}
        <code>buckets</code> is the array of tresholds. <code>7</code> is an
        arbitrary bandwidth. I'm not sure how to optimize those values yet.{" "}
      </blockquote>
      <h3>&rarr; Density object format</h3>
      <p>
        The result is an <b>array of arrays</b>. Its length is the same length
        as the number of bucket + 1. In our example it looks like:
      </p>
      <CodeBlock code={snippet6} />
      <p>
        The first item of each array is the <b>lower bound</b> of the bucket. We
        will use it for the X axis. The second item is the <b>value</b> of the
        density in this bucket. It will be used for the Y axis.
      </p>
      {/*
      //
      // First density
      //
      */}
      <h2 id="first density">First density plot</h2>{" "}
      <p>
        Now that the density coordinates are available, it's just a matter of
        creating the <code>path</code> of a <code>svg</code> shape.
      </p>
      <p>
        Fortunately, <a href="https://github.com/d3/d3-shape#lines">d3</a> comes
        with the handy <code>d3.line()</code> function that allows to go from a
        set of coordinates to a path easily. In order to keep the smoothing, you
        can use the <code>.curve()</code> attribute as described in the code
        below:
      </p>
      <CodeBlock code={snippetPath} />
      <p>
        This <code>path</code> is a string that can be passed to the{" "}
        <code>d</code> attribute of a svg element:
      </p>
      <CodeBlock code={snippetDrawing} />
      <p>And that's it, a first density chart is now available:</p>
      <ChartOrSandbox
        VizComponent={DensityChartBasicDemo}
        vizName={"DensityChartBasic"}
        maxWidth={600}
        height={300}
        caption={
          "Most basic density chart made with react and d3.js. Almost there, we just miss the axes here."
        }
      />
      {/*
      //
      // Axis
      //
      */}
      <h2 id="Axis">Axis</h2>{" "}
      <p>
        The density chart above is pretty useless since we have no clue on what
        the X and Y axes represent. We need to display the <b>bucket values</b>{" "}
        of the X axis to make the chart insightful. The Y axis does not matter
        that much, since it just provides the kernel density value of the bucket
        which is not insightful.
      </p>
      <p>
        There are several ways to add axes to charts in React. The process is
        extensively described in this{" "}
        <Link href="/build-axis-with-react">axes dedicated post</Link>. To put
        it in a nutshell, some <b>margins</b> need to be added around the plot
        area, a <code>scaleLinear</code> is built with d3 and a custom{" "}
        <code>AxisBottom</code> component is used to draw the axis from the
        scale.
      </p>
      <p>
        That's the result, a first <b>reusable density plot</b> component:
      </p>
      <ChartOrSandbox
        VizComponent={DensityChartWithAxisDemo}
        vizName={"DensityChartWithAxis"}
        maxWidth={600}
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
      <ResponsiveExplanationSection chartId="density" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="density" />
      {/*
      //
      // Variations: several density on top / small multiples / cursor to change density estimator / data updates / mirror density
      //
      */}
      <h2 id="variations">Variations</h2>
      <p>
        Once you've understood how to build a basic density chart with d3 and
        React, it opens an infinite world of <b>customization</b>.
      </p>
      <p>
        Here is an example showing how to plot several distributions on the same
        figure, allowing to compare several groups.
      </p>
      <ChartOrSandbox
        VizComponent={DensitySeveralGroupsDemo}
        vizName={"DensitySeveralGroups"}
        maxWidth={600}
        height={400}
        caption={
          "Using small multiple to visualize the distribution of several groups in 1 figure, avoiding overlapping."
        }
      />
      <p>
        Note that an alternative could be to use <b>small multiple</b>. See this{" "}
        <Link href="/example/histogram-small-multiple">histogram example</Link>{" "}
        that you should be able to adapt quickly.
      </p>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
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

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type DensityProps = {
  width: number;
  height: number;
  data: number[];
};

export const Density = ({ width, height, data }: DensityProps) => {

  // read the data
  // Compute kernel density
  // build the scales
  // draw the shape

  return (
    <div>
      <svg width={width} height={height}>
        // render the shape
      </svg>
    </div>
  );
};
`.trim();

const snippetPath = `
const lineGenerator = d3
    .line()
    .x((d) => xScale(d[0]))
    .y((d) => yScale(d[1]))
    .curve(d3.curveBasis);

const path = lineGenerator(density);
`.trim();

const snippetDrawing = `
<svg width={width} height={height}>
  <path
    d={path}
    fill="#9a6fb0"
    ...
  />
</svg>
`.trim();
