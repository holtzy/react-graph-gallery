import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { StreamGraphBasicDemo } from "../viz/StreamGraphBasic/StreamGraphBasicDemo";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";

const graphDescription = (
  <p>
    A{" "}
    <a href="https://www.data-to-viz.com/graph/streamgraph.html">streamgraph</a>{" "}
    is a variation of the more common{" "}
    <Link href="stacked-area-plot">stacked area chart</Link>. This section
    explains how to stack and smooth the data with <code>d3.js</code>, and
    render the shapes with <code>react</code>. It starts from the basic and goes
    until necessary customization like tooltips, hover effect, legend and
    annotation, always with editable sandboxes.
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
  .keys(groups)
  .order(d3.stackOrderNone)
  .offset(d3.stackOffsetSilhouette);
const series = stackSeries(data);
`.trim();

export default function Home() {
  return (
    <Layout
      title="Streamchart with React"
      seoDescription="How to build a stream chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Streamcharts"
        description={graphDescription}
        chartType="stream"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          Most of the time the input dataset is an array where each item is an
          object.
        </p>
        <p>
          Each object provides information for a step on the X axis. It has a
          value like <code>x</code> that provides the exact position on the X
          axis. It then has several numeric values, one for each group of the
          dataset.
        </p>
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
          Building a stream chart requires to stack the data. Series are
          displayed one on top of each other and you have to compute their
          positions on the Y axis.
        </p>
        <p>
          Fortunately, <code>D3.js</code> has a handy <code>stack()</code>{" "}
          function that does exactly that. The process is deeply explained in
          the <Link href="stacked-area-plot">stacked area chart</Link> section
          of the gallery.
        </p>
        <p>
          The only variation required here is to use the
          <code>d3.stackOffsetSilhouette</code> offset option. Instead of
          stacking everything above the 0 baseline, it will put groups on both
          part of it.
        </p>
        <p>
          Computing the position of the chart series should look something like:
        </p>
        <CodeBlock code={snippet2} />
      </AccordionSection>

      <AccordionSection title={"Most basic streamgraph"} startOpen={true}>
        <p>
          Once more, the process to render the shape is very close to the{" "}
          <Link href="stacked-area-plot">stacked area chart</Link>. A few
          variations are required though.
        </p>
        <h3>&rarr; Smoothing</h3>
        <p>
          We need to smooth the area shape to get the good-looking organic flow.
          Once more d3 is here to the rescue with a{" "}
          <a href="https://github.com/d3/d3-shape#curves">curve</a> function
          that does all the work for us.
        </p>
        <h3>&rarr; Axis</h3>
        <p>
          <Link href="build-axis-with-react">Usual axes</Link> do not work for
          streamgraphs. The Y axis would make no sense since shapes are on both
          side of the 0 baseline. It is commonly{" "}
          <a href="https://www.dataviz-inspiration.com/stream">removed</a>. The
          X axis would feel lost alone at the very bottom of the chart.
        </p>
        <p>
          Here I suggest to replace the X axis with vertical ablines. The Y axis
          is removed and we will see later how
        </p>
        <ChartOrSandbox
          vizName={"StreamGraphBasic"}
          VizComponent={StreamGraphBasicDemo}
          height={400}
          maxWidth={600}
          caption="Most basic streamgraph with react and d3.js"
        />
      </AccordionSection>

      <ResponsiveExplanationSection chartId="stream" />

      <DatavizInspirationParallaxLink chartId="stackedArea" />

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />

      <Contact />
    </Layout>
  );
}
