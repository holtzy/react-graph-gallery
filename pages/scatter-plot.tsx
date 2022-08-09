import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { data } from "../data/correlation-2-num-variables-gapminder";
import { TakeHome } from "../component/TakeHome";
import Link from "next/link";
import { BoxplotToViolinTransition } from "../viz/BoxplotToViolinTransition/BoxplotToViolinTransition";
import { ScatterplotBasic } from "../viz/ScatterplotBasic/Scatterplot";
import { ScatterplotBasicDemo } from "../viz/ScatterplotBasic/ScatterplotBasicDemo";

const graphDescription = (
  <p>
    A <a href="https://www.data-to-viz.com/graph/scatter.html">scatterplot</a>{" "}
    displays the correlation between 2 numeric variables. This page first
    provides a basic scatterplot example that is pretty close from the{" "}
    <a href="https://www.d3-graph-gallery.com/graph/scatter_basic.html">
      d3.js version
    </a>
    , except that circle elements are rendered using react. Then it describes
    how to implement the tricky parts: axis, tooltip, zoom and more.
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
      title="Scatterplot with React"
      seoDescription="How to build a violin plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Scatterplot"
        description={graphDescription}
        chartType="scatter"
      />

      <AccordionSection title={"The data"} startOpen={true}>
        <p>
          The dataset used to build a scatterplot is usually an array of object.
          For each object, at least 2 properties providing a value for the x and
          y axis are needed. It usually also have properties that describe the
          data point.
        </p>
        <CodeBlock code={snippet1} />
        <p>
          <u>Note</u>: this section is based on the{" "}
          <a href="https://www.data-to-viz.com/story/ThreeNum.html">
            gapminder
          </a>{" "}
          dataset that provides some info like the life expectancy and the
          population for evere country.
        </p>
      </AccordionSection>

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

      <AccordionSection title={"Hover effect"} startOpen={true}>
        <p>TODO</p>
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
