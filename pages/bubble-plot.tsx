import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { ScatterplotBasicDemo } from "../viz/ScatterplotBasic/ScatterplotBasicDemo";
import Link from "next/link";

const graphDescription = (
  <p>
    A <a href="https://www.data-to-viz.com/graph/bubble.html">bubble plot</a> is
    an extension of a scatterplot, where each circle has its size proportional
    to a numeric values. This page describes how to build a bubble chart with
    <code>d3.js</code> in the context of a <code>react</code> application.
  </p>
);

const snippet1 = `
const data = [
  {
    "country": "Afghanistan",
    "continent": "Asia",
    "lifeExp": 43.828,
    "pop": 31889923,
    "gdpPercap": 974.5803384
  },
  {
    "country": "Albania",
    "continent": "Europe",
    "lifeExp": 76.423,
    "pop": 3600523,
    "gdpPercap": 5937.029526
  },
  ...
]
`.trim();

export default function Home() {
  return (
    <Layout
      title="Bubble plot with React"
      seoDescription="How to build a bubble plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Bubble plot"
        description={graphDescription}
        chartType="bubble"
      />

      <AccordionSection title={"The data"} startOpen={true}>
        <p>
          The dataset used to build a bubble plot is usually an array of object
          where each object is a data point. For each object, at least{" "}
          <b>3 properties</b> are required.
        </p>
        <p>
          Two properties are used for the <b>X</b> and <b>Y</b> axis, the third
          one is used for the circle <b>size</b>.
        </p>
        <p>
          Note that you can add even more properties to the object, that can be
          used to color the bubbles like the <code>continent</code> on the
          example below.
        </p>
        <CodeBlock code={snippet1} />
        <p>
          <u>Note</u>: this section is based on the{" "}
          <a href="https://www.data-to-viz.com/story/ThreeNum.html">
            gapminder
          </a>{" "}
          dataset that provides some info like the life expectancy and the
          population for every country.
        </p>
      </AccordionSection>

      <div className="mt-20">
        <blockquote>
          <b>Note</b>: This page considers you're already familiar with the
          process to build a <Link href="scatter-plot">scatterplot</Link>. Start
          there for some basic examples!
        </blockquote>
      </div>

      <AccordionSection title={"Most basic scatterplot"} startOpen={true}>
        <p>
          Use <code>scaleLinear</code> for the scales. Tricky part is to build
          the axis: can be done with with d3.js or with React. Deserves its own
          blogpost.
        </p>

        <ChartOrSandbox
          VizComponent={ScatterplotBasicDemo}
          vizName={"ScatterplotBasic"}
          maxWidth={600}
          height={500}
          caption="Most basic scatterplot built with react and d3.js"
        />
      </AccordionSection>

      <br />
      <br />
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="correlation" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
