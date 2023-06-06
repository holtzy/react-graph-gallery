import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { AreaChartBasicDemo } from "../viz/AreaChartBasic/AreaChartBasicDemo";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { LinkAsButton } from "component/LinkAsButton";

const graphDescription = (
  <>
    <p>
      An <a href="https://www.data-to-viz.com/graph/area.html">area chart</a>{" "}
      displays the evolution of one numeric variables. It is like a{" "}
      <Link href="/line-chart">line chart</Link>, but with the area below the
      line being filled.
    </p>
    <p>
      This section describes how to build area charts on the web with{" "}
      <code>d3.js</code> and <code>react</code>. It starts very basic and then
      explains how to add more complex features like <b>brushing</b>, adding{" "}
      <b>hover effects</b> and more.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Area charts with React"
      seoDescription="How to build an area chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Area charts"
        description={graphDescription}
        chartType="area"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset required to build a line chart is usually an <b>array</b>{" "}
        where each item is an object providing the <code>x</code> and the{" "}
        <code>y</code> values of the data point.
      </p>
      <br />
      <p>Here is a minimal example:</p>
      <CodeBlock code={snippetData} />
      <p>
        <u>Note</u>: if your data is in <code>.csv</code> format, you can
        translate it thanks to the <code>d3.csv()</code> function as suggested{" "}
        <a href="https://d3-graph-gallery.com/graph/line_basic.html">here</a>.
      </p>
      <p>
        <u>Note</u>: a line chart is often made to represent <b>time</b>. If
        your <code>x</code> property is a <b>date</b>, please visit the{" "}
        <Link href="/timeseries">timeseries</Link> section.
      </p>
      <LinkAsButton href="/timeseries" size="sm" isFilled>
        Timeseries section
      </LinkAsButton>
      {/*
      //
      // Basic
      //
      */}
      <h2 id="first example">First basic example</h2>{" "}
      <p>
        An <b>area chart</b> can be built using almost the same process as for a{" "}
        <a href="line-chart">line chart</a>. Component <b>skeleton</b>,{" "}
        <b>scales</b>, and <b>axes</b> are exactly the same. See the dedicated
        section for thorough explanations.
      </p>
      <LinkAsButton href="/line-chart" size="sm" isFilled>
        Line Chart section
      </LinkAsButton>
      <p>
        <br />
      </p>
      <p>
        The only difference is the use of <code>d3.area()</code> instead of{" "}
        <code>d3.line()</code>. Both functions are used to transform a blob of
        data into a <code>string</code> that can be used as the <code>d</code>{" "}
        argument of a <code>path</code> SVG shape.
      </p>
      <p>
        But <code>d3.area()</code> is invoked slightly differently:
      </p>
      <CodeBlock code={snippetArea} />
      <p>
        Both a <code>y0</code> and a <code>y1</code> arguments are used. They
        provide both the <b>bottom</b> and the <b>top</b> position of the shape
        for each x position.
      </p>
      <p>
        The output <code>areaPath</code> can now be passed to a{" "}
        <code>path</code> resulting in the following area chart:
      </p>
      <ChartOrSandbox
        vizName={"AreaChartBasic"}
        VizComponent={AreaChartBasicDemo}
        height={400}
        maxWidth={600}
        caption={
          <p>
            A very basic area chart made using react and the <code>area()</code>{" "}
            function of d3.js
          </p>
        }
      />
      <DatavizInspirationParallaxLink chartId="area" />
      <br />
      <br />
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {x:1, y: 90},
  {x: 2, y: 12},
  {x: 3, y: 34},
  {x: 4, y: 53},
  {x: 5, y: 98},
]
`.trim();

const snippetArea = `
// create a shape generator.
// areaBuilder will be a function that takes data as input and returns a SVG path
const areaBuilder = d3
  .area()
  .x(d => xScale(d.x))
  .y1(d => yScale(d.y))
  .y0(yScale(0));

// call the function with the dataset
const areaPath = areaBuilder(data);
`.trim();
