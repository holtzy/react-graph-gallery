import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { ScatterplotBasicDemo } from "../viz/ScatterplotBasic/ScatterplotBasicDemo";
import { ScatterplotClimateCrisisDemo } from "../viz/ScatterplotClimateCrisis/ScatterplotClimateCrisisDemo";
import { AxisBasicDemo } from "../viz/AxisBasic/AxisBasicDemo";
import { ScatterplotHoverHighlightDemo } from "../viz/ScatterplotHoverHighlight/ScatterplotHoverHighlightDemo";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { Accordion } from "../component/UI/Accordion";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/scatter.html">scatterplot</a>{" "}
      displays the relationship between 2 numeric variables. This page is a
      step-by-step guide on how to build your own scatterplot for the web, using{" "}
      <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://www.d3-graph-gallery.com">D3.js</a>.
    </p>
    <p>
      It starts with very basic concepts like <b>data structure</b>,{" "}
      <b>scales</b> and svg circle <b>rendering</b>. It then shows how to add
      interactivity to the chart with <b>hover effects</b> and <b>tooltips</b>.
      At the end of the post, you should be able to build you own
      ready-to-publish scatterplot 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Scatterplot with React"
      seoDescription="How to build a violin plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title={
          <h1>
            Scatterplot{" "}
            <span className="text-gray-100">with React and d3.js</span>
          </h1>
        }
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
        The dataset used to build a scatterplot is usually an{" "}
        <b>array of objects</b>. For each object, at least 2 properties are
        required: <code>x</code> and <code>y</code>. The value of <code>x</code>{" "}
        will control the position of the datapoint on the horizontal axis,{" "}
        <code>y</code> on the vertical one.
      </p>
      <CodeBlock code={snippet1} />
      <p>
        We will see later in this guide that some additional properties can
        become useful. For instance, a third numeric value could be added as a{" "}
        <code>size</code> property, and a categorical property could be used as
        a <code>group</code> to control the <b>color</b>.
      </p>
      <p>
        This tutorial starts by using dummy data for the most simple examples.
        It then uses the famous{" "}
        <a href="https://www.data-to-viz.com/story/ThreeNum.html">gapminder</a>{" "}
        dataset that provides the <b>life expectancy</b> and the{" "}
        <b>population size</b> for every country.
      </p>

      {/*
      //
      // Axes
      //
      */}
      <h2 id="Scales and axes">Scales and axes</h2>
      <p>A chart basically encodes data items into shapes</p>
      <h3>&rarr; Scales</h3>
      <h3>&rarr; Axes</h3>
      <p>
        Axes are complicated elements. They are composed of a main{" "}
        <b>segment</b>, several <b>ticks</b> that each have a <b>label</b>, and
        often are decorated with a <b>title</b>.
      </p>
      <p>
        D3.js offers some powerful{" "}
        <a href="https://d3-graph-gallery.com/graph/custom_axis.html">
          functions
        </a>{" "}
        to draw those axes for you, based on the scales discussed above. For
        instance, one could call <code>axisBottom()</code> in a{" "}
        <code>useEffect</code> hook to imperatively draw the X axis into a
        specific DOM element. But this comes with a number of caveats and is
        thus not the option used in this gallery.
      </p>
      <p>
        Instead, I suggest to create the axes from scratch and store them in 2
        react components called <code>AxisBottom</code> and{" "}
        <code>AxisLeft</code>. Those components expect a d3 scale as input and
        does all the svg drawing for us.
      </p>
      <ChartOrSandbox
        VizComponent={AxisBasicDemo}
        vizName={"AxisBasicDemo"}
        maxWidth={500}
        height={300}
        caption={
          <p>
            Compute scales to map numeric values to a 2d canvas. Use custom
            react components to render axes with react from this scales.
          </p>
        }
      />

      <Accordion startOpen={false} title="X axis react code">
        <CodeBlock code={snippet2} />
      </Accordion>

      <Accordion startOpen={false} title="Y axis react code">
        <CodeBlock code={snippet3} />
      </Accordion>

      {/*
      //
      // Add circles
      //
      */}
      <h2 id="Add markers">Add circles</h2>
      <p>
        We are now pretty close from a first scatterplot. There is just one more
        critical part missing: <b>markers</b>.
      </p>
      <p>
        To add them, we have to <code>map()</code> on the data input and add a
        svg <code>circle</code> for each. That's the code snippet that needs to
        be added:
      </p>
      <CodeBlock code={snippet4} />
      <p>
        <b>That's it!</b> 🎉
      </p>
      <p>
        Calling the <code>allShapes</code> object in the <code>return()</code>{" "}
        statement of the component will add as many circles as needed.
      </p>
      <p>
        Note that styling attributes are written as prop here. In production,
        you should consider adding a <code>class</code> to those circles and
        setting it using css.
      </p>
      <ChartOrSandbox
        VizComponent={ScatterplotBasicDemo}
        vizName={"ScatterplotBasic"}
        maxWidth={500}
        height={500}
        caption="Add a svg circle for each item of the dataset to get a first scatterplot"
      />
      <p>
        That's not the best scatterplot in the world yet, but it's definitely a
        first working version.
      </p>

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="scatter" />

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

      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="scatter" />

      {/*
      //
      // Real life
      //
      */}
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

const snippet1 = `
const data = [
  {
    x: 2,
    y: 4
  },
  {
    x: 8,
    y: 5
  }
]
`.trim();

const snippet2 = `
import { useMemo } from "react";
import { ScaleLinear } from "d3";

type AxisBottomProps = {
  xScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
};

// tick length
const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale, pixelsPerTick }: AxisBottomProps) => {
  const range = xScale.range();

  const ticks = useMemo(() => {
    const width = range[1] - range[0];
    const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [xScale]);

  return (
    <>
      {/* Main horizontal line */}
      <path
        d={["M", range[0], 0, "L", range[1], 0].join(" ")}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={'translate(\${xOffset}, 0)'}>
          <line y2={TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
`.trim();

const snippet3 = `
const data = [
  {
    x: 2,
    y: 4
  },
  {
    x: 8,
    y: 5
  }
]
`.trim();

const snippet4 = `
const allShapes = data.map((d, i) => {
  return (
    <circle
      key={i}
      r={7} // radius
      cx={xScale(d.y)} // position on the X axis
      cy={yScale(d.x)} // on the Y axis
      opacity={1}
      stroke="#cb1dd1"
      fill="#cb1dd1"
      fillOpacity={0.2}
      strokeWidth={1}
    />
  );
});
`.trim();
