import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { RidgelineBasicDemo } from "../viz/RidgelineBasic/RidgelineBasicDemo";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import { DensityChartWithAxisDemo } from "viz/DensityChartWithAxis/DensityChartWithAxisDemo";
import DatavizInspirationParallaxLink from "component/DatavizInspirationParallaxLink";
import GraphGallery from "component/GraphGallery";

const graphDescription = (
  <>
    <p>
      A{" "}
      <a href="https://www.data-to-viz.com/graph/ridgeline.html">
        ridgeline chart
      </a>{" "}
      is a chart type that shows the distribution of a numeric variable for
      several groups, stacked one of top of each other. This page is a
      step-by-step guide on how to build your own histogram for the web, using{" "}
      <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/ridgeline.html">D3.js</a>.
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and how to
      initialize the <b>ridgeline component</b>. It then quickly recalls how to
      compute and draw a <Link href="density-plot">kernel density</Link>, and
      shows how to <b>stack</b> this information for several groups of a
      dataset. 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Ridgeline chart with React"
      seoDescription="How to build a ridgeline plot with React and D3.js. A set of re-usable components coming with explanation and code."
    >
      <TitleAndDescription
        title={
          <h1>
            Ridgeline chart{" "}
            <span className="text-gray-600 font-light hidden sm:inline">
              with React
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="ridgeline"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{" "}
      <p>
        To build a ridgeline chart, the input dataset must provide a set of
        <b>numeric values</b> for several groups.
      </p>
      <p>
        The best way to format this kind of information is with an{" "}
        <b>array of object</b>. Each object represents a group. A
        <code>group</code> property provides the group name, and a{" "}
        <code>values</code> property provides the values.
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
        The goal here is to create a <code>Ridgeline</code> component that will
        be stored in a <code>Ridgeline.tsx</code> file. This component requires
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
        <code>Ridgeline</code> component:
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
      // Density
      //
      */}
      <h2 id="kernel density">Computing and plotting a density</h2>
      <p>
        A ridgeline chart is a set of{" "}
        <Link href="density-plot">density plots</Link>, stacked one on top of
        each other. It is thus important to start by learning how to compute a{" "}
        <Link href="density-plot#kernel%20density">kernel density</Link>, and
        how to transform it in a SVG <code>path</code> rendered with react.
      </p>
      <p>
        The <Link href="/density-plot">density chart</Link> section of the
        gallery thoroughly explains how to compute this{" "}
        <a href="https://en.wikipedia.org/wiki/Kernel_density_estimation">
          density
        </a>{" "}
        estimation for a set of numeric values.
      </p>
      <p>This is how the result looks like:</p>
      <ChartOrSandbox
        VizComponent={DensityChartWithAxisDemo}
        vizName={"DensityChartWithAxis"}
        maxWidth={600}
        height={400}
        caption={
          "A ridgeline chart is a set of densities stacked one on top of each other. This minimal example shows how to compute and plot this density for a single group."
        }
      />
      {/*
      //
      // Stacking
      //
      */}
      <h2 id="stacking">Stacking the densities</h2>
      <h3>&rarr; Two Y scales</h3>
      <p>
        It's important to understand that 2 Y scales are necessary to compute a
        ridgeline chart.
      </p>
      <p>
        The first one is used many times, to compute each density. It's a{" "}
        <code>scaleLinear</code> scale.
      </p>
      <p>
        The second is used once to shift each group baseline and create the
        slight overlap. It's a <code>scaleBand</code>: each band of the Y axis
        is dedicated to a group.
      </p>
      <p>
        You can read more about{" "}
        <a href="https://d3-graph-gallery.com/graph/custom_axis.html">
          scales and axes
        </a>
        .
      </p>
      <h3>&rarr; Axis</h3>
      <p>
        It's important to display a X axis to understand what we are looking at.
        In the example below the <code>axisBottom</code> imperative method of d3
        is used in a <code>useEffect</code> hook, but you can definitely create
        the axis using react like suggested{" "}
        <Link href="/build-axis-with-react">here</Link>.
      </p>
      <p>
        For the Y axis labels, I suggest to add them using some{" "}
        <code>text</code> svg elements.
      </p>
      <ChartOrSandbox
        VizComponent={RidgelineBasicDemo}
        vizName={"RidgelineBasic"}
        maxWidth={800}
        height={600}
        caption={
          <span>
            A ridgeline chart showing how various probability related words are
            perceived by humans. (
            <a href="https://www.data-to-viz.com/graph/ridgeline.html">more</a>)
          </span>
        }
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="ridgeline" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="ridgeline" />
      {/*
      //
      // Variations
      //
      */}
      <h2 id="variations">Variations</h2>
      <p>
        Ridgeline charts are not the only way to <b>compare the distribution</b>{" "}
        of several groups in a dataset. <Link href="boxplot">Boxplots</Link>,{" "}
        <Link href="violin-plot">violins</Link>,{" "}
        <Link href="histogram">histograms</Link> and{" "}
        <Link href="density-plot">densities</Link> are variations that could
        interst you in order to solve this goal. Check the examples below to get
        the code.{" "}
      </p>{" "}
      <GraphGallery
        images={[
          "boxplot-jitter.png",
          "violinBasic.png",
          "boxplotBasic.png",
          "histogram-small-multiple.png",
          "histogram-with-several-groups.png",
          "densityMultipleGroups.png",
        ]}
      />
      {/*
      //
      // foot
      //
      */}
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
export const data = [
  {
    group: "A",
    values: [0, 0, 2, 2, 2, 0, 0, 1],
  },
  {
    group: "B",
    values: [19, 20, 19, 18, 18],
  }
];
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type RidgelineProps = {
  width: number;
  height: number;
  data: number[];
};

export const Ridgeline = ({ width, height, data }: RidgelineProps) => {

  // read the data
  // build the scales
  // compute kernel densities for each group
  // build all shapes

  return (
    <div>
      <svg width={width} height={height}>
        // render all the shapes
      </svg>
    </div>
  );
};
`.trim();
