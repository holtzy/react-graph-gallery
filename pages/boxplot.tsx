import React, { useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { data as violinData } from "../data/distribution-multi-groups-random";
import Link from "next/link";
import { BoxplotToViolinTransition } from "../viz/BoxplotToViolinTransition/BoxplotToViolinTransition";
import { Boxplot } from "../viz/BoxplotBasic/Boxplot";
import { VerticalBox } from "../viz/BoxDemoVertical/VerticalBox";
import { BoxDemoVerticalDemo } from "../viz/BoxDemoVertical/BoxDemoVerticalDemo";
import { BoxplotBasicDemo } from "../viz/BoxplotBasic/BoxplotBasicDemo";
import { BoxplotToViolinTransitionDemo } from "../viz/BoxplotToViolinTransition/BoxplotToViolinTransitionDemo";
import { BoxplotJitterDemo } from "../viz/BoxplotJitter/BoxplotJitterDemo";

const graphDescription = (
  <p>
    A <a href="https://www.data-to-viz.com/graph/boxplot.html">boxplot</a>{" "}
    summarizes the distribution of a numeric variable, often for several groups
    of a dataset. This page describes how to build it with react, with a bit of
    help from d3.js.
  </p>
);

const snippet1 = `
const data = [
  { name: "A", value: 10.7577 },
  { name: "A", value: 19.9273 },
  { name: "B", value: 13.8917 },
  { name: "B", value: 0.5102 },
  { name: "C", value: 10.5524 },
  ...
]
`.trim();

const snippet2 = `
const VerticalBox = ({
  min,
  q1,
  median,
  q3,
  max,
  width,
  stroke,
  fill,
}) => {
  return (
    <>
      <line
        x1={width / 2}
        x2={width / 2}
        y1={min}
        y2={max}
        stroke={stroke}
        width={STROKE_WIDTH}
      />
      <rect
        x={0}
        y={q3}
        width={width}
        height={q1 - q3}
        stroke={stroke}
        fill={fill}
      />
      <line
        x1={0}
        x2={width}
        y1={median}
        y2={median}
        stroke={stroke}
        width={STROKE_WIDTH}
      />
    </>
  );
};
`.trim();

const snippet3 = `
<svg width={200} height={300}>
  <VerticalBox
    width={100}
    min={280}
    q1={200}
    median={100}
    q3={80}
    max={10}
    stroke="black"
    fill={"#ead4f5"}
  />
</svg>
`.trim();

const snippet4 = `
export const getSummaryStats = (data: number[]) => {
  const sortedData = data.sort(function(a, b){return a - b});

  const q1 = d3.quantile(sortedData, .25)
  const median = d3.quantile(sortedData, .5)
  const q3 = d3.quantile(sortedData, .75)

  if(!q3 || !q1 || !median){
      return
  }

  const interQuantileRange = q3 - q1
  const min = q1 - 1.5 * interQuantileRange
  const max = q3 + 1.5 * interQuantileRange

  return {min, q1, median, q3, max}
}
`.trim();

export default function Home() {
  return (
    <Layout
      title="Boxplot with React"
      seoDescription="How to build a boxplot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Boxplot"
        description={graphDescription}
        chartType="boxplot"
      />

      <AccordionSection title={"The data 💾"} startOpen={true}>
        <p>
          The dataset used to build a boxplot is usually an array of object. For
          each object, a <code>name</code> property provides the group name, and
          a <code>value</code> property provides the numeric value. It basically
          looks like this:
        </p>
        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection title={"Summary statistics 🔨"} startOpen={true}>
        <p>
          A boxplot is based on summary statistics. For a set of values, it's
          going to display the median, first and third quartiles, min and max
          values excluding outliers.
        </p>
        <p>
          Let's build a util function that computes this from an array of
          numeric values:
        </p>
        <CodeBlock code={snippet4} />
      </AccordionSection>

      <AccordionSection title={"A reusable box component 📦"} startOpen={true}>
        <p>
          With the output of the <code>getSummaryStats()</code> function above
          we need to build a box with svg and react.
        </p>
        <p>
          Here is a component that builds the svg shape based on the summary
          statistics.
        </p>
        <CodeBlock code={snippet2} />
        <p>
          There is nothing really fancy here! We're just drawing a box using a{" "}
          <code>rect</code> and a 2 <code>line</code>. We can call this
          component with the following statement:
        </p>
        <CodeBlock code={snippet3} />
        <p>Bringing this result:</p>
        <ChartOrSandbox
          vizName={"BoxDemoVertical"}
          VizComponent={BoxDemoVerticalDemo}
          maxWidth={110}
          height={300}
          caption="A box rendered in svg thanks to react"
        />
      </AccordionSection>

      <AccordionSection title={"Basic boxplot with React 🏁"} startOpen={true}>
        <p>
          Now we just have to apply the same idea for each group of the dataset.
          We also need to add some axes to the chart as described in this{" "}
          <Link href="/build-axis-with-react">dedicated post</Link>.
        </p>
        <p>
          It leads us to this most basic boxplot built with react and d3.js 🎉:
        </p>
        <ChartOrSandbox
          vizName={"BoxplotBasic"}
          VizComponent={BoxplotBasicDemo}
          maxWidth={600}
          caption="Most basic boxplot made with d3.js and react"
        />
      </AccordionSection>

      <AccordionSection
        title={"Variation: violin to boxplot transition"}
        startOpen={false}
      >
        <p>
          The react graph gallery has a{" "}
          <Link href="/shape-morphism-for-dataviz-with-react">
            dedicated blog post
          </Link>{" "}
          on shape morphism that showcases a boxplot to violin plot transition.
          Here is the final result, but you should probably read it to
          understand how it works!
        </p>
        <br />
        <ChartOrSandbox
          vizName={"BoxplotToViolinTransition"}
          VizComponent={BoxplotToViolinTransitionDemo}
          maxWidth={600}
          height={300}
          caption="How to smoothly transition between a boxplot and a violin plot. Math by d3.js, rendering using react, animation using react-spring and interpolation using flubber."
        />
      </AccordionSection>

      <AccordionSection
        title={"Variation: boxplot with jitter"}
        startOpen={true}
      >
        <p>
          Even if powerful to summarize the distribution of a numeric variable,
          the boxplot{" "}
          <a href="https://www.data-to-viz.com/caveat/boxplot.html">
            has flaws
          </a>
          .
        </p>
        <p>
          It basically <b>hides the underlying distribution</b>. For instance, a
          low sample size or a bi-modal distribution are impossible to detect
          reading the boxes only.
        </p>
        <p>
          <b>Jittering</b> is a good workaround. Add all individual data points
          with low size, low opacity, and some random shift to the right or to
          the left (jitter). The underlying distribution becomes instantly
          available.
        </p>
        <p>
          Note that another good alternative is the{" "}
          <Link href="/violin-plot">violin plot</Link>, especially for high
          sample size.
        </p>
        <ChartOrSandbox
          vizName={"BoxplotJitter"}
          VizComponent={BoxplotJitterDemo}
          maxWidth={600}
          height={450}
          caption={
            <span>
              Showing individual data points using jittering on top of your
              boxplot adds trust. Reader now knows you're not{" "}
              <a href="https://www.data-to-viz.com/caveat/boxplot.html">
                hiding
              </a>{" "}
              anything.
            </span>
          }
        />
      </AccordionSection>

      <br />
      <br />
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="distribution" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
