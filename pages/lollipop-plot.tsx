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
import { LollipopBasicDemo } from "../viz/LollipopBasic/LollipopBasicDemo";

const graphDescription = (
  <p>
    A{" "}
    <a href="https://www.data-to-viz.com/graph/lollipop.html">lollipop plot</a>{" "}
    is a variation of the more common <Link href="barplot">barplot</Link>. This
    section describes how to build lollipop charts with d3.js in a react
    context. It starts very basic and then explains how to add more complex
    features like windowing, dark mode and more.
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

export default function Home() {
  return (
    <Layout
      title="Lollipop plot with React"
      seoDescription="How to build a lollipop plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Lollipop plot"
        description={graphDescription}
        chartType="lollipop"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          The dataset required to build a lollipop is usually an array where
          each item is an object providing the <code>name</code> and the{" "}
          <code>value</code> of the group.
        </p>
        <br />
        <p>Here is a minimal example</p>
        <CodeBlock code={snippet1} />
        <p>
          Note: if your data is in <code>.csv</code> format, you can translate
          it thanks to the <code>d3.csv()</code> function as suggested{" "}
          <a href="https://d3-graph-gallery.com/graph/barplot_horizontal.html">
            here
          </a>
          .
        </p>
      </AccordionSection>

      <AccordionSection title={"Most basic lollipop"} startOpen={true}>
        <p>
          There is nothing really tricky when it comes to build a basic barplot
          with react, all is pretty close to the{" "}
          <a href="https://d3-graph-gallery.com/barplot">d3-only examples</a>.
        </p>

        <ChartOrSandbox
          vizName={"LollipopBasic"}
          VizComponent={LollipopBasicDemo}
          height={400}
          maxWidth={600}
          caption="Most basic Lollipop built with d3.js for scales, and react for rendering"
        />
      </AccordionSection>

      <DatavizInspirationParallaxLink chartId="lollipop" />

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
