import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { DensityChartBasicDemo } from "../viz/DensityChartBasic/DensityChartBasicDemo";
import Link from "next/link";
import { RidgelineBasicDemo } from "../viz/RideglineBasic/RidgelineBasicDemo";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";

const graphDescription = (
  <p>
    This page explains how to build a{" "}
    <a href="https://www.data-to-viz.com/graph/ridgeline.html">
      ridgeline chart
    </a>{" "}
    using
    <code>react</code> and <code>d3.js</code>. It starts by describing how the
    input data must be formatted and reminds how to build a{" "}
    <Link href="/density-plot">density</Link> chart. It then explains how to
    stack those densities to get a ridgeline plot.
  </p>
);

const snippet1 = `
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

export default function Home() {
  return (
    <Layout
      title="Ridgeline chart with React"
      seoDescription="How to build a ridgeline plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Ridgeline chart"
        description={graphDescription}
        chartType="ridgeline"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          To build a ridgeline chart, the input dataset must provide a set of
          numeric values for several groups.
        </p>
        <p>
          The best way to format this kind of information is with an array of
          object, with 1 object per group. For each group, a <code>key</code>{" "}
          property provides the group name, and a <code>values</code> property
          provides the values.
        </p>
        <br />
        <p>Here is a minimal example of the data structure:</p>

        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection
        title={"Computing and plotting a density"}
        startOpen={true}
      >
        <p>
          A ridgeline chart is actually just a set of density plots, stacked one
          on top of each other. It is thus important to start by learning how to
          compute a kernel density, and how to transform it in a svg{" "}
          <code>path</code> rendered with react.{" "}
        </p>
        <p>
          The <Link href="/density-plot">density chart</Link> section of the
          gallery thoroughly explains how to compute this{" "}
          <a href="https://en.wikipedia.org/wiki/Kernel_density_estimation">
            kernel density
          </a>{" "}
          estimation of a set of numeric values.
        </p>
        <p>This is how the result looks like:</p>
        <ChartOrSandbox
          VizComponent={DensityChartBasicDemo}
          vizName={"DensityChartBasic"}
          maxWidth={600}
          height={300}
          caption={
            "A ridgeline chart is a set of densities stacked one on top of each other. This minimal example shows how to compute and plot this density for a single group."
          }
        />
      </AccordionSection>

      <AccordionSection title={"Stacking the densities"} startOpen={true}>
        <h3>&rarr; Two Y scales</h3>
        <p>
          It's important to understand that 2 Y scales are necessary to compute
          a ridgeline chart.
        </p>
        <p>
          The first one is used many times, to compute each density. It's a{" "}
          <code>scaleLinear</code>
          scale.
        </p>
        <p>
          The second is used once to shift each group baseline and create the
          slight overlap. It's a <code>scaleBand</code>: each band of the Y axis
          is dedicated to a group.
        </p>

        <h3>&rarr; Axis</h3>
        <p>
          It's important to display a Y axis to understand what we are looking
          at. In the example below the <code>axisBottom</code> imperative method
          of d3 is used in a <code>useEffect</code> hook, but you can definitely
          create the axis using react like suggested{" "}
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
          height={500}
          caption={
            <span>
              A ridgeline chart showing how various probability related words
              are perceived by humans. (
              <a href="https://www.data-to-viz.com/graph/ridgeline.html">
                more
              </a>
              )
            </span>
          }
        />
      </AccordionSection>

      <ResponsiveExplanationSection chartId="ridgeline" />

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="distribution" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
