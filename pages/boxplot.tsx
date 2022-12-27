import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { BoxDemoVerticalDemo } from "../viz/BoxDemoVertical/BoxDemoVerticalDemo";
import { BoxplotBasicDemo } from "../viz/BoxplotBasic/BoxplotBasicDemo";
import DatavizInspirationParallaxLink from "component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "component/ResponsiveExplanationSection";
import { Accordion } from "component/UI/Accordion";
import { AxisBasicDemo } from "viz/AxisBasic/AxisBasicDemo";
import { GraphLinkImage } from "component/UI/GraphLinkImage";
import { ImageGrid } from "component/UI/ImageGrid";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/boxplot.html">boxplot</a>{" "}
      summarizes the distribution of a numeric variable, often for several
      groups of a dataset. This page is a step-by-step guide on how to build a
      reusable boxplot component for the web using{" "}
      <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/boxplot">D3.js</a>.
    </p>
    <p>
      It starts by describing how to format the <b>dataset</b> and how to
      initialize the <b>boxplot component</b>. It then explains how to create a{" "}
      <code>Box</code> component that displays a single box. Finally, it shows
      how to render the boxplot and suggests a few variations. 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Boxplot with React"
      seoDescription="How to build a boxplot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title={
          <h1>
            Boxplot{" "}
            <span className="text-gray-600 font-light hidden sm:inline">
              with React and d3.js
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="boxplot"
      />

      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data 💾</h2>
      <p>
        The dataset used to build a boxplot is usually an array of objects. For
        each object, a <code>name</code> property provides the group name, and a{" "}
        <code>value</code> property provides the numeric value. It looks like
        this:
      </p>
      <CodeBlock code={snippet1} />

      {/*
      //
      // Summary statistics
      //
      */}
      <h2 id="Summary stats">Summary statistics 🔨</h2>
      <p>
        A boxplot is based on{" "}
        <a href="https://www.data-to-viz.com/caveat/boxplot.html">
          summary statistics
        </a>
        . For a set of values it displays:
      </p>
      <ul>
        <li>
          the <b>median</b>: central line of the box
        </li>
        <li>
          the first and third <b>quartiles</b>: upper and lower lines of the box
        </li>
        <li>
          the <b>min</b> and <b>max</b> values excluding outliers
        </li>
      </ul>
      <p>
        Let's build a util function called <code>getSummaryStats</code> that
        computes this from an array of numeric values:
      </p>
      <CodeBlock code={snippet4} />
      <p>
        This function is going to be handy. Now we want to draw a box
        representing those values.
      </p>

      {/*
      //
      // Box component
      //
      */}
      <h2 id="box component">A reusable box component 📦</h2>
      <p>
        With the output of the <code>getSummaryStats()</code> function above we
        need to draw a box in SVG. Let's create a <code>VerticalBox</code>{" "}
        component that does this for us.
      </p>
      <p>
        There is nothing fancy here. A <code>rect</code> is used for the main
        box. Some <code>line</code> are used for the rest.
      </p>
      <CodeBlock code={snippet2} />
      <p>This component can be called using the following statement:</p>
      <CodeBlock code={snippet3} />
      <p>Bringing this result:</p>
      <ChartOrSandbox
        vizName={"BoxDemoVertical"}
        VizComponent={BoxDemoVerticalDemo}
        maxWidth={110}
        height={300}
        caption={
          <p>
            The <code>VerticalBox</code> component allows to draw a vertical box
            displaying the summary statistics of a set of numeric values
          </p>
        }
      />

      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>Boxplot</code> component that will be
        stored in a <code>Boxplot.tsx</code> file. This component requires 3
        props to render: a <code>width</code>, a <code>height</code>, and some{" "}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the
        histogram.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>Histogram</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG <code>circle</code>, but it's React that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>

      {/*
      //
      // Axes
      //
      */}
      <h2 id="scales and axes">Scales and axes</h2>
      <h3>&rarr; Scales</h3>
      <p>
        Building a boxplot requires transforming a <b>dimension</b> (e.g. a
        numeric variable or a group name) in a <b>position in pixels</b>. This
        is done using a fundamental dataviz concept called <b>scale</b>.
      </p>
      <p>
        D3.js comes with a handful set of{" "}
        <a href="https://github.com/d3/d3-scale">predefined scales</a>.
      </p>
      <ul>
        <li>
          <code>scaleLinear</code> is what we need for the Y axis. It transforms
          a numeric value in a position
        </li>
        <CodeBlock code={snippet5} />
        <li>
          <code>scaleBand</code> is what we need for the X axis. It transforms a
          categoric variable (the group <code>name</code> here) in a position
        </li>
        <CodeBlock code={snippetXScale} />
      </ul>
      <p>
        To dig more into d3 scales, visit this{" "}
        <a href="https://d3-graph-gallery.com/graph/custom_axis.html">
          dedicated page
        </a>
        . It's a crucial concept that will be used everywhere in this website.
      </p>

      <h3>&rarr; Axes</h3>
      <p>
        Axes are rather complicated elements. They are composed of the main{" "}
        <b>segment</b>, several <b>ticks</b> that each have a <b>label</b>, and
        are often decorated with a <b>title</b>.
      </p>
      <p>
        Here I suggest creating the axes from scratch and storing them in 2
        react components called <code>AxisBottom</code> and{" "}
        <code>AxisLeft</code>. Those components expect a d3 scale as input and
        do all the SVG drawings for us.
      </p>
      <ChartOrSandbox
        VizComponent={AxisBasicDemo}
        vizName={"AxisBasic"}
        maxWidth={500}
        height={300}
        caption={
          <p>
            Compute scales to map numeric values to a 2d canvas. Use custom
            react components to render axes with react from this scales.
          </p>
        }
      />
      <p>
        The code for the Y axis component is provided below. The following
        examples will show how straightforward it is to tweak them to reach
        other <b>chart styles</b>.
      </p>
      <Accordion startOpen={false} title="code for the Y axis react component">
        <CodeBlock code={snippet3} />
      </Accordion>
      <p>
        The X axis implementation is very similar. Check the code of the chart
        below to read it.
      </p>

      {/*
      //
      // First boxplot
      //
      */}
      <h2 id="first boxplot">Basic boxplot with React</h2>
      <p>
        We now have all the ingredients to cook the final recipe. We have
        everything to compute the summary statistics for each group of the
        dataset, and <b>plot</b> the result with several boxes. We also know how
        to compute <b>scales</b> and add some <b>axes</b> to the chart.
      </p>
      <p>
        So it is just a matter of <b>looping</b> through all the groups of the
        dataset and drawing a box for each.
      </p>
      <p>Here is the final result:</p>
      <ChartOrSandbox
        vizName={"BoxplotBasic"}
        VizComponent={BoxplotBasicDemo}
        maxWidth={600}
        caption={
          <p>
            Most basic boxplot built with d3.js and React. D3 is used to compute
            summary statistics and scales. React is used for rendering.
          </p>
        }
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="boxplot" />

      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="boxplot" />

      {/*
      //
      // Variations
      //
      */}
      <h2 id="variation">Boxplot variations</h2>
      <p>
        Even if powerful to summarize the distribution of a numeric variable,
        the boxplot{" "}
        <a href="https://www.data-to-viz.com/caveat/boxplot.html">has flaws</a>.
      </p>
      <p>
        It indeed <b>hides the underlying distribution</b>. For instance, a low
        sample size or a bi-modal distribution is impossible to detect by
        reading the boxes only.
      </p>
      <p>
        <b>Jittering</b> is a good workaround. Add all individual data points
        with low size, low opacity, and some random shift to the right or the
        left (jitter). The underlying distribution becomes instantly available.
      </p>
      <p>
        Note that another good alternative is the{" "}
        <Link href="/violin-plot">violin plot</Link>, especially for a high
        sample size.
      </p>

      <ImageGrid>
        <GraphLinkImage
          link={"/example/boxplot-jitter"}
          title={"Boxplot with jitter"}
          description={
            <p>Add individual data points using jitter on top of the boxplot</p>
          }
          img={"boxplot-jitter.png"}
          alt="Picture of a boxplot with jitter built using react and d3.js"
        />
      </ImageGrid>

      {/*
      <AccordionSection
        title={"Variation: violin to boxplot transition"}
        startOpen={false}
      >
        <p>
          The react graph gallery has a{" "}
          <Link href="/shape-morphism-for-dataviz-with-react">
            dedicated blog post
          </Link>{" "}
          on shape morphism that showcases a boxplot to violin plot transition.
          Here is the final result, but you should probably read it to
          understand how it works!
        </p>
        <br />
        <ChartOrSandbox
          vizName={"BoxplotToViolinTransition"}
          VizComponent={BoxplotToViolinTransitionDemo}
          maxWidth={600}
          height={300}
          caption="How to smoothly transition between a boxplot and a violin plot. Math by d3.js, rendering using react, animation using react-spring and interpolation using flubber."
        />
      </AccordionSection> */}

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippet1 = `
const data = [
  { name: "A", value: 10.7577 },
  { name: "A", value: 19.9273 },
  { name: "B", value: 13.8917 },
  { name: "B", value: 0.5102 },
  { name: "C", value: 10.5524 },
  ...
]
`.trim();

const snippet2 = `
const VerticalBox = ({
  min,
  q1,
  median,
  q3,
  max,
  width,
  stroke,
  fill,
}) => {
  return (
    <>
      <line
        x1={width / 2}
        x2={width / 2}
        y1={min}
        y2={max}
        stroke={stroke}
        width={STROKE_WIDTH}
      />
      <rect
        x={0}
        y={q3}
        width={width}
        height={q1 - q3}
        stroke={stroke}
        fill={fill}
      />
      <line
        x1={0}
        x2={width}
        y1={median}
        y2={median}
        stroke={stroke}
        width={STROKE_WIDTH}
      />
    </>
  );
};
`.trim();

const snippet3 = `
<svg width={200} height={300}>
  <VerticalBox
    width={100}
    min={280}
    q1={200}
    median={100}
    q3={80}
    max={10}
    stroke="black"
    fill={"#ead4f5"}
  />
</svg>
`.trim();

const snippet4 = `
export const getSummaryStats = (data: number[]) => {
  const sortedData = data.sort(function(a, b){return a - b});

  const q1 = d3.quantile(sortedData, .25)
  const median = d3.quantile(sortedData, .5)
  const q3 = d3.quantile(sortedData, .75)

  if(!q3 || !q1 || !median){
      return
  }

  const interQuantileRange = q3 - q1
  const min = q1 - 1.5 * interQuantileRange
  const max = q3 + 1.5 * interQuantileRange

  return {min, q1, median, q3, max}
}
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type BoxplotProps = {
  width: number;
  height: number;
  data: { name: string, value: number }[];
};

export const Boxplot = ({ width, height, data }: BoxplotProps) => {

  // read the data
  // compute summary statistics for each group
  // compute scales
  // build the boxes

  return (
    <div>
      <svg width={width} height={height}>
        // render all the boxes
        // draw the axes
      </svg>
    </div>
  );
};
`.trim();

const snippet5 = `
const scale = d3.scaleLinear()
  .domain([0, 10]) // data goes from 0 to 10
  .range([0, 200]); // axis goes from 0 to 200 pixels

scale(0); // 0 -> item with a value of 0 will be at the extreme left of the axis
scale(5); // 100 -> middle of the axis
scale(10); // 200 -> extreme right
`.trim();

const snippetXScale = `
const xScale = useMemo(() => {
  return d3
    .scaleBand()
    .range([0, boundsWidth])
    .domain(allXGroups)
    .padding(0.01);
}, [data, width]);

// xScale("A") -> 0
// xScale.bandwidth() -> 11
`.trim();
