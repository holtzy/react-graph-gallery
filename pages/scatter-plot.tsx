import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { ScatterplotBasicDemo } from "../viz/ScatterplotBasic/ScatterplotBasicDemo";
import { ScatterplotClimateCrisisDemo } from "../viz/ScatterplotClimateCrisis/ScatterplotClimateCrisisDemo";
import { AxisBasicDemo } from "../viz/AxisBasic/AxisBasicDemo";
import { ScatterplotHoverHighlightDemo } from "../viz/ScatterplotHoverHighlight/ScatterplotHoverHighlightDemo";

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

      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset used to build a scatterplot is usually an array of object.
        For each object, at least 2 properties providing a value for the x and y
        axis are needed. It usually also have properties that describe the data
        point.
      </p>
      <CodeBlock code={snippet1} />
      <p>
        <u>Note</u>: this section is based on the{" "}
        <a href="https://www.data-to-viz.com/story/ThreeNum.html">gapminder</a>{" "}
        dataset that provides some info like the life expectancy and the
        population for evere country.
      </p>

      {/*
      //
      // Axes
      //
      */}
      <h2 id="Scales and axes">Scales and axes</h2>
      <p>Two options: using d3 or using React</p>

      <ChartOrSandbox
        VizComponent={AxisBasicDemo}
        vizName={"AxisBasicDemo"}
        maxWidth={500}
        height={300}
        caption="How to draw axes using React and d3.js"
      />

      {/*
      //
      // Add markers
      //
      */}
      <h2 id="Add markers">Add markers</h2>
      <p>
        Use <code>scaleLinear</code> for the scales. Tricky part is to build the
        axis: can be done with with d3.js or with React. Deserves its own
        blogpost.
      </p>

      <ChartOrSandbox
        VizComponent={ScatterplotBasicDemo}
        vizName={"ScatterplotBasic"}
        maxWidth={600}
        height={500}
        caption="Most basic scatterplot built with react and d3.js"
      />

      {/*
      //
      // Hover effects
      //
      */}
      <h2 id="Hover effect">Hover effect</h2>
      <p>
        Use <code>scaleLinear</code> for the scales. Tricky part is to build the
        axis: can be done with with d3.js or with React. Deserves its own
        blogpost.
      </p>
      <ChartOrSandbox
        VizComponent={ScatterplotHoverHighlightDemo}
        vizName={"ScatterplotHoverHighlightDemo"}
        maxWidth={600}
        height={500}
        caption="Hover effect"
      />

      <h2 id="real life">Real life application</h2>
      <p>Let's apply the concepts learnt above on a real life example.</p>
      <p>
        I really like this scatterplot originally published on the data wrapper
        blog. It shows a strong correlation between vulnerability to climate
        change and CO2 emissions.
      </p>
      <br />
      <p>
        The chart has several features that are interesting to reproduce on a
        technical point of view:
      </p>
      <ul>
        <li>
          Custom <b>annotation</b>: only a fraction of the country names are
          written
        </li>
        <li>
          Hover effect: hovered country is highlighted with a black stroke.
          After a short delay, countries of other groups are dimmed. Note that
          the effect is triggered once the mouse approaches the marker, no need
          to be perfectly on top.
        </li>
        <li>Tooltip: highly customized and linked to mouse position</li>
      </ul>
      <ChartOrSandbox
        VizComponent={ScatterplotClimateCrisisDemo}
        vizName={"ScatterplotClimateCrisis"}
        maxWidth={700}
        height={900}
        caption={
          <span>
            Reproduction of a chart originally published by{" "}
            <a href="https://blog.datawrapper.de/climate-risk-readiness-responsibility/">
              Data Wrapper
            </a>{" "}
            using react and d3.js.
          </span>
        }
      />

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
