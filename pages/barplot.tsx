import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { data } from "../viz/BarplotBasic/data";
import { Treemap } from "../viz/Treemap2Levels/Treemap";
import { data as data2levels } from "../viz/Treemap2Levels/data";
import { Barplot } from "../viz/BarplotBasic/Barplot";
import Link from "next/link";
import { ParallaxSection } from "../component/ParallaxSection";
import { BarplotBasicDemo } from "../viz/BarplotBasic/BarplotBasicDemo";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";

const graphDescription = (
  <p>
    A <a href="https://www.data-to-viz.com/graph/barplot.html">barplot</a>{" "}
    displays a numeric value for several groups of a dataset using rectangles.
    This section describes how to build barplots on the web in a react context.
    It starts very basic and then explain how to add more complex features like
    windowing, dark mode and more.
  </p>
);

const snippet1 = `
const data = [
  {name:"Mark", value: 90},
  {name:"Robert", value: 12},
  {name:"Emily", value: 34},
  {name:"Marion", value: 53},
  {name:"Nicolas", value: 98},
]
`.trim();

const snippet2 = `
// data is something like [12, 4, 7, 9, ....]
const binBuilder = d3
  .bin()
  .domain([min, max])
  .thresholds(yScale.ticks(14)) // how many bins we want?
  .value((d) => d); // accessor function, just return the value since we're dealing with an array of number
const bins = binBuilder(data);
`.trim();

const snippet3 = `
const areaBuilder = d3
  .area()
  .x0((d) => wScale(-d.length))
  .x1((d) => wScale(d.length))
  .y((d) => yScale(d.x0))
  .curve(d3.curveBumpY);
const area = areaBuilder(bins);
`.trim();

export default function Home() {
  return (
    <Layout
      title="Barplot with React"
      seoDescription="How to build a barplot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Barplot"
        description={graphDescription}
        chartType="barplot"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          The dataset required to build a barplot is usually an array where each
          item is an object providing the <code>name</code> and the{" "}
          <code>value</code> of the group.
        </p>
        <br />
        <p>Here is a minimal example</p>
        <CodeBlock code={snippet1} />
        <p>
          Note: if your data is in <code>.csv</code> formart, you can translate
          it thanks to the <code>d3.csv()</code> function as suggested{" "}
          <a href="https://d3-graph-gallery.com/graph/barplot_horizontal.html">
            here
          </a>
          .
        </p>
      </AccordionSection>

      <AccordionSection title={"Most basic barplot"} startOpen={true}>
        <p>
          There is nothing really tricky when it comes to build a basic barplot
          with react, all is pretty close to the{" "}
          <a href="https://d3-graph-gallery.com/barplot">d3-only examples</a>.
        </p>
        <p>
          First of all you probably want to add some margins around the
          dimensions provided in the component properties as described{" "}
          <Link href="/build-axis-with-react">here</Link>.
        </p>
        <p>
          Then, since we're building a horizontal barchart here the Y axis is
          showing groups. It means we can build it using the handy{" "}
          <code>d3.scaleBand()</code> function. Don't forget to pass a{" "}
          <code>padding</code> to it to have some space between bars. Note that
          it makes sense to wrap the axis creation in a <code>useMemo</code>{" "}
          hook. You don't want to recompute this axis if only the{" "}
          <code>width</code> changes (like if the window is resized for
          instance)
        </p>
        <ChartOrSandbox
          vizName={"BarplotBasic"}
          VizComponent={BarplotBasicDemo}
          height={400}
          maxWidth={600}
          caption="Most basic barplot built with d3.js for scales, and react for rendering"
        />
      </AccordionSection>

      <DatavizInspirationParallaxLink chartId="barplot" />

      <AccordionSection title={"Vertical barplot"} startOpen={true}>
        <p>
          The vertical option is less common since it makes is much harder to
          read the labels. But if you really need it, it is just a matter of
          swaping the X and Y axes of the previous example. Here is a working
          version.
        </p>
      </AccordionSection>

      <br />
      <br />
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="partOfAWhole" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
