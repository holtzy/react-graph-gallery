import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { BubblePlotBasicDemo } from "../viz/BubblePlotBasic/BubblePlotBasicDemo";
import { BubblePlotLegendDemo } from "../viz/BubblePlotLegend/BubblePlotLegendDemo";
import { BubblePlotTooltipDemo } from "../viz/BubblePlotTooltip/BubblePlotTooltipDemo";
import { ImageGrid } from "component/UI/ImageGrid";
import { GraphLinkImage } from "component/UI/GraphLinkImage";
import { ScatterplotClimateCrisisDemo } from "viz/ScatterplotClimateCrisis/ScatterplotClimateCrisisDemo";
import { BubbleLegendDemo } from "viz/BubbleLegend/BubbleLegendDemo";
import { Accordion } from "component/UI/Accordion";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/bubble.html">bubble plot</a>{" "}
      is an extension of a <Link href="scatter-plot">scatterplot</Link>, where
      each circle has its size proportional to a numeric value. This page is a
      step-by-step guide on how to build your own bubble chart for the web,
      using <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/histogram">D3.js</a>.
    </p>
    <p>
      This page focuses on the implentation of features that are{" "}
      <b>different of the scatterplot</b> that has its{" "}
      <Link href="scatter-plot">own dedicated section</Link>. It describes how
      the <b>dataset</b> differs, how the <b>circle size</b> can be mapped to a
      numeric value and how to explicit it using a <b>legend</b>. Last but not
      least it explains how to add <b>interactivity</b>: hover effect, tooltip
      and dataset transition. 🙇‍♂️.
    </p>
  </>
);

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
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{" "}
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
        used to color the bubbles like the <code>continent</code> on the example
        below.
      </p>
      <CodeBlock code={snippetData} />
      <p>
        <u>Note</u>: this section is based on the{" "}
        <a href="https://www.data-to-viz.com/story/ThreeNum.html">gapminder</a>{" "}
        dataset that provides some info like the life expectancy and the
        population for every country.
      </p>
      {/*
      //
      // Scatterplot
      //
      */}
      <h2 id="scatter plot">Scatter plot</h2>
      <p>
        The dataset used to build a scatterplot is usually an{" "}
        <b>array of objects</b>.
      </p>
      <ImageGrid>
        <GraphLinkImage
          link={"scatter-plot#scales%20and%20axes"}
          title={"Scales and axes"}
          description={
            <p>How to map your data in a 2d space, and how to draw the axes</p>
          }
          img={"axis-basic-demo.png"}
          alt="Picture of an empty chart area with X and Y axes"
        />
        <GraphLinkImage
          link={"scatter-plot#circles"}
          title={"Basic scatter plot"}
          description={<p>Add circles to get a basic scatter plot</p>}
          img={"scatterplot-most-basic.png"}
          alt="Most basic scatterplot made with react and d3"
        />
        <GraphLinkImage
          link={"scatter-plot#tooltip"}
          title={"Add tooltip"}
          description={
            <p>
              Get more details about each datapoint by adding a tooltip on hover
            </p>
          }
          img={"scatterplot-tooltip.png"}
          alt="Scatterplot with tooltip made with react and d3"
        />
      </ImageGrid>
      <div className="mt-20">
        <blockquote>
          <b>Note</b>: This page considers you're already familiar with the
          process to build a <Link href="scatter-plot">scatterplot</Link>. Start
          there for some basic examples!
        </blockquote>
      </div>
      {/*
      //
      // Basic bubble chart
      //
      */}
      <h2 id="bubble">Bubble chart: control the circle sizes</h2>
      <p>
        A few additional steps are required to move from a{" "}
        <Link href="scatter-plot">scatterplot</Link> to a bubble chart.
      </p>
      <ul>
        <li>
          One more <code>linearScale</code> is needed to control the circle
          size. The <code>range</code> is an arbitrary array where you define
          the min and max sizes you want to display. Don't forget you can use a
          log scale if you have extreme values in the dataset.
        </li>
        <li>
          Optionally, a fourth scale can be added for the color using a{" "}
          <code>scaleOrdinal</code>.
        </li>
        <li>
          A bubble chart often have circle overlaps. It's strongly advised to
          use transparency and to sort the data: draw the big bubbles below, the
          small ones on top.
        </li>
      </ul>
      <ChartOrSandbox
        VizComponent={BubblePlotBasicDemo}
        vizName={"BubblePlotBasic"}
        maxWidth={600}
        height={500}
        caption="A clean bubble chart built with d3.js in a react context. A color scale is used to represent a categorical variable."
      />
      <p>
        This is starting to look not too bad, but we definitely need a{" "}
        <b>legend</b> here, to understand what the size and color of each circle
        mean.
      </p>
      {/*
      //
      // Legend
      //
      */}
      <h2 id="legend">Adding a legend</h2>
      <p>
        There are{" "}
        <a href="https://d3-graph-gallery.com/graph/custom_legend.html">
          many different ways
        </a>{" "}
        to add a legend to a d3.js graph. What we mainly need here is to make
        sense of the <b>bubble size</b>. I suggest to use a set of <b>nested</b>{" "}
        bubbles, showing a few of the bubble sizes used on the chart with their
        respective values.
      </p>
      <ChartOrSandbox
        VizComponent={BubbleLegendDemo}
        vizName={"BubbleLegend"}
        maxWidth={300}
        height={300}
        caption="A legend to make sense of circle size, based on a d3 scale."
      />
      <p>
        This legend is implemented in a <code>BubbleLegend</code> component that
        expects 2 props:
        <ul>
          <li>
            <code>scale</code>: the size scale that we described{" "}
            <a href="#bubble">above</a>, built with the <code>scaleSqrt</code>{" "}
            function.
          </li>
          <li>
            <code>tickNumber</code>: the number of circles to show on the
            legend.
          </li>
        </ul>
        <p>
          Note that <code>tickNumber</code> is a target. The legend component
          uses the <code>tick()</code> function with this value, which returns a
          smart number of circle to approximate the goal while keeping some
          nice, smart values.
        </p>
        <p>You can check the complete implementation of the legend here:</p>
        <Accordion
          startOpen={false}
          title={
            <span>
              <code>BubbleLegend</code>: a component to build a legend for
              circle sizes
            </span>
          }
        >
          <CodeBlock code={snippetLegend} />
        </Accordion>
      </p>
      <p>
        It's important to note that the component does <b>not</b> expect any
        dimension as prop. The <code>width</code> and <code>height</code> of the
        SVG element that is created will be computed fron the <code>scale</code>{" "}
        that is provided.
      </p>
      <p>
        As a result, you only need to think about the position of the legend on
        your chart. Here is an example adding it at the bottom right of the
        chart.
      </p>
      <ChartOrSandbox
        VizComponent={BubblePlotLegendDemo}
        vizName={"BubblePlotLegend"}
        maxWidth={600}
        height={500}
        caption="Adding a legend to make sense of the bubble size. Legend is hand made, adding svg shapes with React."
      />
      {/*
      //
      // Real life
      //
      */}
      <h2 id="real life">Real-life application</h2>
      <p>Let's apply the concepts learned above to a real-life example.</p>
      <p>
        I like this scatterplot originally published on the data wrapper{" "}
        <a href="https://blog.datawrapper.de/climate-risk-readiness-responsibility/">
          blog
        </a>
        . It shows a strong correlation between vulnerability to climate change
        and CO2 emissions.
      </p>
      <br />
      <p>
        The chart has several features that are interesting to reproduce fom a
        technical point of view:
      </p>
      <ul>
        <li>
          Custom <b>annotation</b>: only a fraction of the country names are
          written
        </li>
        <li>
          Hover effect: the hovered country is highlighted with a black stroke.
          After a short delay, countries of other groups are dimmed. Note that
          the effect is triggered once the mouse approaches the marker, no need
          to be perfectly on top.
        </li>
        <li>Tooltip: highly customized and linked to the mouse position</li>
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
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="correlation" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
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

const snippetLegend = `
type BubbleLegendProps = {
  scale: d3.ScaleLinear<number, number, never>;
  tickNumber: number;
};

export const BubbleLegend = ({ scale, tickNumber }: BubbleLegendProps) => {
  const ticks = scale.ticks(tickNumber);
  const maxValue = ticks[ticks.length - 1];

  const diameter = scale(maxValue) * 2; // diameter of the biggest circle

  const dashWidth = diameter / 2 + 10;

  const allCircles = ticks.map((tick, i) => {
    const xCenter = diameter / 2;
    const yCircleTop = diameter - 2 * scale(tick);
    const yCircleCenter = diameter - scale(tick);

    return (
      <g key={i}>
        <circle
          cx={xCenter}
          cy={yCircleCenter}
          r={scale(tick)}
          fill="none"
          stroke="black"
        />
        <line
          x1={xCenter}
          x2={xCenter + dashWidth}
          y1={yCircleTop}
          y2={yCircleTop}
          stroke="black"
          strokeDasharray={"2,2"}
        />
        <text
          x={xCenter + dashWidth + 4}
          y={yCircleTop}
          fontSize={10}
          alignmentBaseline="middle"
        >
          {tick}
        </text>
      </g>
    );
  });

  return (
    <svg width={diameter} height={diameter} overflow="visible">
      {allCircles}
    </svg>
  );
};
`.trim();
