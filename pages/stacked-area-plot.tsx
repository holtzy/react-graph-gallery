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

const graphDescription = (
  <p>
    A{" "}
    <a href="https://www.data-to-viz.com/graph/area.html">stacked area chart</a>{" "}
    is an evolution of an <Link href="area-plot">area chart</Link> used to
    display the evolution of several groups in a dataset. This section explains
    how to build it with d3.js and react. It focus on stacking, so make sure to
    read the <Link href="area-plot">area chart</Link> first.
  </p>
);

const snippet1 = `
const data = [
  {
    a: 38,
    b: 19,
    c: 9,
  },
  {
    a: 16,
    b: 14,
    c: 96,
  },
  ...
]
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
          The dataset required to build a line chart is usually an array where
          each item is an object providing the <code>x</code> and the{" "}
          <code>x</code> values of the data point.
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

      <AccordionSection title={"Most basic area chart"} startOpen={true}>
        <p>
          There is nothing really tricky when it comes to build a basic barplot
          with react, all is pretty close to the{" "}
          <a href="https://d3-graph-gallery.com/graph/area_basic.html">
            d3-only examples
          </a>
          .
        </p>
        <p>
          First of all you probably want to add some margins around the
          dimensions provided in the component properties as described{" "}
          <Link href="/build-axis-with-react">here</Link>.
        </p>
        <p>
          Both the X and Y axis are using a numeric scale thanks to the{" "}
          <code>scaleLinear()</code> function here. Note that a usual struggle
          is to deal with the date format but this is described in the
          timeseries section.
        </p>
        <ChartOrSandbox
          vizName={"StackedAreaChartBasic"}
          height={400}
          render={(dim) => (
            <StackedAreaChart
              data={data}
              width={dim.width}
              height={dim.height}
            />
          )}
        />
      </AccordionSection>

      <div className="full-bleed">
        <ParallaxSection
          height={200}
          imgLink="https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true"
          opacity={0.3}
        >
          <div className="flex justify-center items-center h-full">
            <p>Barplot inspiration</p>
          </div>
        </ParallaxSection>
      </div>

      <AccordionSection title={"Multiple groups"} startOpen={true}>
        <p>Todo, same thing but with several groups</p>
      </AccordionSection>

      <br />
      <br />
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />

      <Contact />
    </Layout>
  );
}
