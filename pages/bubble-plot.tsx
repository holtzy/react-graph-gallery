import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { BubblePlotBasicDemo } from "../viz/BubblePlotBasic/BubblePlotBasicDemo";
import { BubblePlotLegendDemo } from "../viz/BubblePlotLegend/BubblePlotLegendDemo";
import { ImageGrid } from "component/UI/ImageGrid";
import { GraphLinkImage } from "component/UI/GraphLinkImage";
import { ScatterplotClimateCrisisDemo } from "viz/ScatterplotClimateCrisis/ScatterplotClimateCrisisDemo";
import { BubbleLegendDemo } from "viz/BubbleLegend/BubbleLegendDemo";
import { Accordion } from "component/UI/Accordion";
import { BubblePlotDatasetTransitionDemo } from "viz/BubblePlotDatasetTransition/BubblePlotDatasetTransitionDemo";
import { SubscribeForm } from "component/SubscribeForm";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/bubble.html">bubble plot</a>{" "}
      is an extension of a <Link href="/scatter-plot">scatterplot</Link>, where
      each circle has its size proportional to a numeric value. This page is a
      step-by-step guide on how to build your own bubble chart for the web,
      using <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/histogram">D3.js</a>.
    </p>
    <p>
      This page focuses on the implentation of features that are{" "}
      <b>different of the scatterplot</b> that has its{" "}
      <Link href="/scatter-plot">own dedicated section</Link>. It describes how
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
        Note that you can add more properties to the object. For instance, a{" "}
        <code>name</code> can be displayed in the tooltip, and a{" "}
        <code>group</code> can be used to color the bubbles.
      </p>
      <CodeBlock code={snippetData} />
      <p>
        <u>Note</u>: this post is mainly based on the{" "}
        <a href="https://www.data-to-viz.com/story/ThreeNum.html">gapminder</a>{" "}
        dataset that provides some info like the life expectancy and the
        population for every country.
      </p>
      {/*
      //
      // Scatterplot
      //
      */}
      <h2 id="scatter plot">Extending the scatter plot</h2>
      <p>
        A bubble chart is just an extension of a{" "}
        <Link href="/scatter-plot">scatter plot</Link>. The only difference is
        that a third numeric variable is represented, mapped to the{" "}
        <b>circle size</b>.
      </p>
      <p>
        As a result, please start by visiting the dedicated scatter plot{" "}
        <Link href="/scatter-plot">page</Link> that explains how to draw{" "}
        <Link href="/scatter-plot#scales%20and%20axes">axes</Link>,{" "}
        <Link href="/scatter-plot#circles">circles</Link>, and show how to add
        basic interactions like{" "}
        <Link href="/scatter-plot#hover%20effect">hover effects</Link> and{" "}
        <Link href="/scatter-plot#tooltip">tooltips</Link>.
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
        <GraphLinkImage
          link={"scatter-plot#hover%20effect"}
          title={"Add a hover effect"}
          description={<p>Highlight a specific group on hover</p>}
          img={"scatterplot-hover-effect.png"}
          alt="Scatterplot with hover effect made with react and d3"
        />
        <GraphLinkImage
          link={"scatter-plot#hover%20effect"}
          title={"Real life use-case"}
          description={
            <p>
              Reproduction of a data wrapper chart representing countries CO2
              data
            </p>
          }
          img={"scatterplot-co2.png"}
          alt="Real life example of a scatterplot made with react and d3"
        />
      </ImageGrid>
      <p className="mt-4">
        Once you understood those fundamental concepts, you're ready to browse
        the following examples to build a bubble chart.
      </p>
      {/*
      //
      // Basic bubble chart
      //
      */}
      <h2 id="bubble">Control the circle sizes to make bubbles</h2>
      <p>
        We need to make the circle size <b>proportional</b> to a numeric value.
        Note that it is the <b>area</b> that must be proportional,{" "}
        <a href="https://www.data-to-viz.com/caveat/radius_or_area.html">
          not the radius
        </a>
        .
      </p>
      <p>
        To do so, d3.js offers a <code>scaleSqrt()</code> function that
        constructs a new continuous <b>power scale</b>. That's the
        transformation we need. Building the scale looks like this:
      </p>
      <CodeBlock code={snippetSizeScale} />
      <p>
        This scale provides the radius that we must used for each circle based
        on its numeric value. We can use it in the <code>r</code> attribute of
        each <code>circle</code>
        like this:
      </p>
      <CodeBlock code={snippetSizeScaleUse} />
      <p>
        Note that a bubble chart often has <b>circle overlaps</b>. It's strongly
        advised to use <b>transparency</b> and to <b>sort</b> the data: draw the
        big bubbles below, the small ones on top.
      </p>
      <ChartOrSandbox
        VizComponent={BubblePlotBasicDemo}
        vizName={"BubblePlotBasic"}
        maxWidth={600}
        height={500}
        caption="A clean bubble chart built with d3.js in a react context. A color scale is used to represent a categorical variable."
      />
      <div className="my-10">
        <blockquote>
          <b>Note</b>: The above example uses the <b>d3.js imperative style</b>{" "}
          to build the axes. This can also be done building your own axis
          component like{" "}
          <Link href="/scatter-plot#scales%20and%20axes">here</Link>. I'll write
          more about this in the near <Link href="/subscribe">future</Link>.
        </blockquote>
      </div>
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
        expects 2 props:{" "}
      </p>
      <ul>
        <li>
          <code>scale</code>: the size scale that we described{" "}
          <a href="#bubble">above</a>, built with the <code>scaleSqrt</code>{" "}
          function.
        </li>
        <li>
          <code>tickNumber</code>: the number of circles to show on the legend.
        </li>
      </ul>
      <p>
        Note that <code>tickNumber</code> is a target. The legend component uses
        the <code>tick()</code> function with this value, which returns a smart
        number of circle to approximate the goal while keeping some nice, smart
        values.
      </p>
      <p>You can check the complete implementation of the legend here:</p>
      <Accordion
        startOpen={false}
        title={
          <span>
            <code>BubbleLegend</code>: a component to build a legend for circle
            sizes
          </span>
        }
      >
        <CodeBlock code={snippetLegend} />
      </Accordion>
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
      // Data transition
      //
      */}
      <h2 id="transition">Smooth dataset transition</h2>
      <p>
        How can we <b>smoothly animate</b> the transition between 2 datasets on
        a bubble chart? The chart used in this blog post can be drawn for
        several different years. You can use the select button on top to select
        the year, and the bubbles will <b>animate</b> to their new position.
      </p>
      <p>
        This is possible thanks to the{" "}
        <a href="https://react-spring.dev/">react spring</a> library. Basically,
        instead of rendering usual <code>circle</code> elements, the library
        provides a <code>animated.circle</code> element, that is linked to a{" "}
        <code>useSpring</code>
        hook.
      </p>
      <p>
        This is how the <code>Circle</code> component I use looks like:
      </p>
      <Accordion
        startOpen={false}
        title={
          <span>
            <code>Rectangle</code>: a component that animates the transition of
            a <code>rect</code>
          </span>
        }
      >
        <CodeBlock code={snippetCircle} />
      </Accordion>
      <ChartOrSandbox
        VizComponent={BubblePlotDatasetTransitionDemo}
        vizName={"BubblePlotDatasetTransition"}
        maxWidth={600}
        height={500}
        caption="A bubble chart component that smoothly animate change between dataset."
      />
      <p>
        <b>Animation</b> in dataviz using React is a <b>big</b> topic. It's
        impossible to go in depth here! I will publish a dedicated blog post on
        the topic soon. Please subscribe below if you want to be notified.
      </p>
      <div className={"py-7"}>
        <SubscribeForm />
      </div>{" "}
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
    "x": 43.828,
    "y": 31889923,
    "size": 974.5803384
    "name": "Afghanistan",
    "group": "Asia",
  },
  {
    "x": 76.423,
    "y": 3600523,
    "size": 5937.029526
    "name": "Albania",
    "group": "Europe",
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

const snippetSizeScale = `
return d3
  .scaleSqrt()
  .domain([min, max])
  .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);
`.trim();

const snippetSizeScaleUse = `
<circle
  cx={xScale(d.gdpPercap)}
  cy={yScale(d.lifeExp)}
  r={sizeScale(d.pop)}
  ...
  />
`.trim();

const snippetCircle = `
import { useSpring, animated } from "@react-spring/web";

type CircleProps = {
  color: string;
  r: number;
  cx: number;
  cy: number;
};

export const Circle = (props: CircleProps) => {
  const { cx, cy, r, color } = props;

  const springProps = useSpring({
    to: { cx, cy, r },
    config: {
      friction: 30,
    },
    delay: 0,
  });

  return (
    <animated.circle
      cx={springProps.cx}
      cy={springProps.cy}
      r={springProps.r}
      opacity={0.7}
      stroke={color}
      fill={color}
      fillOpacity={0.3}
      strokeWidth={1}
    />
  );
};
`.trim();
