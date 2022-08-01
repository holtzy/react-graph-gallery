import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { data } from "../viz/StackedAreaChartBasic/data";
import { StackedAreaChart } from "../viz/StackedAreaChartBasic/StackedAreaChart";
import Link from "next/link";
import { ParallaxSection } from "../component/ParallaxSection";
import { StackedAreaChartBasicDemo } from "../viz/StackedAreaChartBasic/StackedAreaChartBasicDemo";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";

const graphDescription = (
  <p>
    A{" "}
    <a href="https://www.data-to-viz.com/graph/area.html">stacked area chart</a>{" "}
    is an evolution of an <Link href="area-plot">area chart</Link> used to
    display the evolution of several groups in a dataset. This section explains
    how to build it with <code>d3.js</code> and <code>react</code>. It focus on
    stacking, so make sure to read the <Link href="area-plot">area chart</Link>{" "}
    section first.
  </p>
);

const snippet1 = `
const data = [
  {
    x: 1,
    groupA: 38,
    groupB: 19,
  },
  {
    x: 2,
    groupA: 16,
    groupB: 14,
  },
  ...
];
`.trim();

const snippet2 = `
const stackSeries = d3
  .stack()
  .keys(["groupA", "groupB"])
// stackSeries is a function that takes the kind of dataset above and stack the series
`.trim();

const snippet3 = `
const series = stackSeries(data);
`.trim();

export default function Home() {
  return (
    <Layout
      title="Stacked Area charts with React"
      seoDescription="How to build a stacked area chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Stacked Area charts"
        description={graphDescription}
        chartType="stackedArea"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          Most of the time the input dataset is an array where each item is an
          object.
          <br />
          Each object provides information for a step on the X axis. It has a
          value like <code>x</code> that provides the exact position on the X
          axis. It then has several numeric values, one for each group of the
          dataset.
        </p>
        <br />
        <p>Here is a minimal example:</p>
        <CodeBlock code={snippet1} />
        <p>
          Note: if your data is in <code>.csv</code> format, you can translate
          it thanks to the <code>d3.csv()</code> function as suggested{" "}
          <a href="https://d3-graph-gallery.com/graph/line_basic.html">here</a>.
        </p>
      </AccordionSection>

      <AccordionSection title={"Data wrangling"} startOpen={true}>
        <p>
          The trickiest part of a stacked area chart is probably the{" "}
          <b>stacking</b> step.
          <br />
          Series are displayed one on top of each other and you have to compute
          their positions on the Y axis. Fortunately <code>d3.js</code> is here
          to the rescue with a <code>d3.stack()</code> function.
        </p>
        <h3>&rarr; Build a stack generator</h3>
        <p>
          <code>d3.stack()</code> constructs a stack generator. Basically, it is
          a function that outputs a function.
        </p>
        <CodeBlock code={snippet2} />
        <h3>&rarr; Use the generator</h3>
        <p>
          Now that this stack generator is available, we just have to run it on
          our dataset to get the stacked values
        </p>
        <CodeBlock code={snippet3} />
        <h3>&rarr; Output</h3>
        <p>
          The output has kind of an usual shape and it's important to understand
          how it's formatted. It's an array with the same length than the
          initial dataset. Once more, each item is linked to a positon on the x
          axis.
        </p>
        <p>
          Each item is an array of length 2, associated with a specific series.
          This is a mess to explain.
        </p>
      </AccordionSection>

      <AccordionSection
        title={"Most basic stacked area chart"}
        startOpen={true}
      >
        <p>
          Once the data is properly stacked it becomes easy to map on it and add
          an area for each series, following the same idea than for a usual area
          chart. Here is a minimal code example wrapping the whole process.
        </p>
        <ChartOrSandbox
          vizName={"StackedAreaChartBasic"}
          VizComponent={StackedAreaChartBasicDemo}
          height={400}
          maxWidth={600}
          caption="basic stacked area chart with react and d3.js"
        />
      </AccordionSection>

      <DatavizInspirationParallaxLink chartId="stackedArea" />

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />

      <Contact />
    </Layout>
  );
}
