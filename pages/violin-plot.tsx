import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { ViolinBasicDemo } from "../viz/ViolinBasic/ViolinBasicDemo";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { Caption } from "component/UI/Caption";
import { ViolinShapeVerticalDemo } from "viz/ViolinShapeVertical/ViolinShapeVerticalDemo";
import { Accordion } from "component/UI/Accordion";
import { AxisBasicDemo } from "viz/AxisBasic/AxisBasicDemo";
import { ResponsiveExplanationSection } from "component/ResponsiveExplanationSection";
import { BoxplotViolinMirrorDemo } from "viz/BoxplotViolinMirror/BoxplotViolinMirrorDemo";
import { ViolinBucketSizeEffectDemo } from "viz/ViolinBucketSizeEffect/ViolinBucketSizeEffectDemo";
import { SubscribeForm } from "component/SubscribeForm";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/violin.html">violin chart</a>{" "}
      displays the distribution of a numeric variable, often for several groups
      of a dataset. This page is a step-by-step guide on how to build your own
      violin component for the web, using{" "}
      <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/boxplot">D3.js</a>.
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and how to
      initialize the <b>violin component</b>. D3.js is then used to split the
      data in buckets thanks to the <code>bin()</code> function. It then adds
      smoothing to it with <code>curve()</code>. React is finally used to render
      the violin using a SVG <code>path</code>.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Violin plot with React"
      seoDescription="How to build a violin plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Violin plot"
        description={graphDescription}
        chartType="violin"
      />
      {/* <h2>🚀 Quick start</h2>
      <p>
        A violin chart allows to visualize the distribution of one or several
        groups. Here, groups are spread on the X axis, when the Y axis
        represents the numeric value.
      </p>
      <br />
      <p>
        If you're in a hurry and don't want to read the explanations and
        additional example below, just click on the <code>show code</code>{" "}
        button to get the full reproducible example!
      </p>
      <ChartOrSandbox
        vizName={"ViolinBasic"}
        VizComponent={ViolinBasicDemo}
        maxWidth={600}
        height={400}
        caption={
          "A violin plot built with React and d3.js. Click on the button below to get an interactive sandbox with reproducible code."
        }
      /> */}
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data 💾</h2>
      <p>
        The dataset used to build a violin chart is usually an{" "}
        <b>array of object</b>. For each object, a <code>name</code> property
        provides the group name, and a <code>value</code> property provides the
        numeric value. It basically looks like this:
      </p>
      <CodeBlock code={snippet1} />
      <p>
        <u>Note</u>: violin plots are useful for big datasets. If you have less
        than ~100 data points, you probably better have to build a{" "}
        <Link href="/boxplot">boxplot</Link> and add{" "}
        <Link href="/example/boxplot-jitter">individual points</Link> on top.
      </p>
      {/*
      //
      // Binning
      //
      */}
      <h2 id="binning">Computing the distribution buckets</h2>
      <p>
        Each violin shape is actually almost the same thing as a{" "}
        <Link href="/histogram">histogram</Link>. To build it we first have to
        <b>bin</b> the numeric values of a group, which means creating{" "}
        <b>buckets</b>,<b>assigning</b> values to them and <b>counting</b> the
        number of elements per bin:
      </p>
      <div className="flex flex-col items-center mt-8 mb-12">
        <img
          src="/img/binning-process.png"
          style={{ maxWidth: 700 }}
          alt="schema explaining how histogram buckets are created from the original dataset"
        />
        <Caption>
          Binning is the process of dividing the range of values in a dataset
          into intervals, and then counting the number of values that fall into
          each interval.
        </Caption>
      </div>
      <p>
        I've summarized the process to get those bins in the{" "}
        <Link href="/histogram/#binning">histogram binning section</Link>. I
        strongly advise to take a look before reading the rest of this blog
        post.
      </p>
      <p>
        To put it in a nutshell, the <code>bin()</code> function is used to
        create a <code>binGenerator</code>. When data is passed to it, the
        result is an array where each item represents a bin:
      </p>
      <CodeBlock code={snippetBins} />
      <p>
        Each array item is composed of all the values assigned to this bin. Its
        <code>length</code> is the bucket size, i.e. the future violin width.
        Each bin has two additional attributes: <code>x0</code> and{" "}
        <code>x1</code> being the lower (inclusive) and upper (exclusive) bounds
        of the bin.
      </p>
      {/*
      //
      // Violin component
      //
      */}
      <h2 id="violin component">A reusable violin component 📦</h2>
      <p>
        The process to build a violin shape with d3.js is described in depth in
        the{" "}
        <a href="https://www.d3-graph-gallery.com/violin">d3 graph gallery</a>.
        Here is a summary and a reusable component:
      </p>
      <h3>
        &rarr; build the svg path with <code>d3.area()</code> and{" "}
        <code>curve()</code>
      </h3>
      <p>
        The bins object computed above is all we need to draw an histogram since
        the <code>length</code>
        of each bin is the actual size of the bar. This is possible thanks to
        the <code>area()</code> function that can be called as follow. Last but
        not leas the <code>curve()</code> call adds some smoothing to the shape,
        transforming the histogram in a smooth density:
      </p>
      <CodeBlock code={snippet3} />
      <h3>&rarr; render the path with react</h3>
      <p>
        The code above provide a <code>string</code> that is a SVG{" "}
        <code>path</code>. We can thus render it with react:
      </p>
      <CodeBlock code={snippetDraw} />
      <h3>&rarr; reusable component</h3>
      <p>
        You can wrap this logic in a component to get something reusable, that
        we will call for all groups of a dataset:
      </p>
      <ChartOrSandbox
        vizName={"ViolinShapeVertical"}
        VizComponent={ViolinShapeVerticalDemo}
        maxWidth={200}
        height={400}
        caption={
          <p>
            Demo of a <code>VerticalViolin</code> component allowing to draw a
            violin shape to represent the distribution of numeric values
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
        The goal here is to create a <code>Violin</code> component that will be
        stored in a <code>Violin.tsx</code> file. This component requires 3
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
        To put it in a nutshell, that's the skeleton of our <code>Violin</code>{" "}
        component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      {/*
      //
      // Axes
      //
      */}
      <h2 id="scales and axes">Scales and axes</h2>
      <h3>&rarr; Scales</h3>
      <p>
        Building a boxplot requires to transform a <b>dimension</b> (e.g. a
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
        do all the svg drawing for us.
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
        The code for those Y axis components is provided below. The following
        examples will show how straightforward it is to tweak them to reach
        other <b>chart styles</b>.
      </p>
      <Accordion startOpen={false} title="code for the Y axis react component">
        <CodeBlock code={snippetYAxis} />
      </Accordion>
      <p>See the code of the graph below for the X axis implementation.</p>
      {/*
      //
      // First Violin plot
      //
      */}
      <h2 id="first violin plot">First violin plot</h2>
      <p>
        There is nothing special to notice concerning the rendering. Each violin
        svg path built is passed to a svg <code>path</code> element in its{" "}
        <code>d</code> attribute.
      </p>
      <p>
        Note that in the example below I'm using d3 to render the axes, not
        react. This will be discussed more in depth in a blogpost.
      </p>
      <ChartOrSandbox
        vizName={"ViolinBasic"}
        VizComponent={ViolinBasicDemo}
        maxWidth={600}
        height={400}
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="violin" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="violin" />
      {/*
      //
      // Bucket Size
      //
      */}
      <h2 id="bucket size">Effect of the bucket size</h2>
      <p>
        It's important to understand that under the hood, a violin shape is
        nothing else than a smoothed <Link href="/histogram">histogram</Link>.
        You can use the sentence below the following chart to switch from one to
        the other and understand the tight connection.
      </p>
      <p>
        As a result the violin plot suffers the same{" "}
        <a href="https://www.data-to-viz.com/graph/histogram.html">flaw</a> as
        the histogram: its shape highly depends on the <b>number of buckets</b>{" "}
        used for the computation. Use the slider to see the impact of the target
        bucket number on the violin shape.
      </p>
      <ChartOrSandbox
        vizName={"ViolinBucketSizeEffect"}
        VizComponent={ViolinBucketSizeEffectDemo}
        maxWidth={600}
        height={600}
        caption="Interactive violin plot: try to toggle smoothing and change the number of buckets in use."
      />
      <p>
        <u>Note</u>: the requested number of buckets is a <b>target</b>. The{" "}
        <code>bin()</code> function of d3 will create smart buckets{" "}
        <b>around</b> this value.
      </p>
      {/*
      //
      // Boxplot comparison
      //
      */}
      <h2 id="variation">Comparison with a boxplot</h2>
      <p>
        The <b>boxplot</b> is an alternative to represent the exact same kind of
        dataset. You can visit the <Link href="/boxplot">boxplot section</Link>{" "}
        of the gallery or play with the interactive example below to understand
        how those 2 options behave on the same dataset.
      </p>

      <p>
        Use the slider to <b>switch</b> from the violin to the box. Play with
        the sentence below the chart to toggle smoothing on the violin.
      </p>
      <ChartOrSandbox
        vizName={"BoxplotViolinMirror"}
        VizComponent={BoxplotViolinMirrorDemo}
        maxWidth={600}
        height={600}
        caption="Compare how violins and boxplots look like for the same dataset."
      />
      {/*
      //
      // Animation
      //
      */}
      <h2 id="animation">Animation</h2>
      <p>
        <b>Animating</b> the transition between 2 datasets, or from/to another
        chart type is hard, because the violin plot is based on <b>SVG path</b>.
        It is doable though and I'm working on a specific post that will be
        released soon.
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="/chart/violinBoxplotTransition.gif"
          style={{ maxWidth: 500 }}
          alt="schema explaining how histogram buckets are created from the original dataset"
        />
        <Caption>
          Using shape morphism to transition between a boxplot and a violin
          plot. Blog post coming soon!
        </Caption>
      </div>
      <p className={"py-7"}>
        If you're interested in this topic, feel free to subscribe below to be
        informed when this post is available!
      </p>
      <div>
        <SubscribeForm />
      </div>

      {/* <ChartOrSandbox
        vizName={"BoxplotToViolinTransition"}
        VizComponent={BoxplotToViolinTransitionDemo}
        maxWidth={600}
        height={500}
        caption="How to smoothly transition between a boxplot and a violin plot. Math by d3.js, rendering using react, animation using react-spring and interpolation using flubber."
      />
       */}

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

const snippetBins = `
[
  [x0: 0, x1: 2],
  [2, 2, 2, 3, x0: 2, x1: 4],
  [4, 5, x0: 4, x1: 6],
  [6, 6, 6, x0: 6, x1: 8],
  [x0: 8, x1: 10],
  [x0: 10, x1: 10],
]
`.trim();

const snippetDraw = `
return (
  <path
    d={areaPath}
    opacity={1}
    stroke="#9a6fb0"
    fill="#9a6fb0"
    ...
  />
);
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type ViolinProps = {
  width: number;
  height: number;
  data: { group: string, value: number }[];
};

export const Violin = ({ width, height, data }: ViolinProps) => {

  // read the data
  // create Y Scale
  // For each group
    // create a violin shape
    // translate it to the x group position

  return (
    <div>
      <svg width={width} height={height}>
        // render all the violins
        // add axes
      </svg>
    </div>
  );
};
`.trim();

const snippet5 = `
const scale = d3.scaleLinear()
  .domain([0, 10]) // data goes from 0 to 10
  .range([0, 200]); // axis goes from 0 to 200

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

const snippetYAxis = `
import { useMemo } from "react";
import { ScaleLinear } from "d3";

type AxisLeftProps = {
  yScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
  width: number;
};

const TICK_LENGTH = 10;

export const AxisLeft = ({ yScale, pixelsPerTick, width }: AxisLeftProps) => {
  const range = yScale.range();

  const ticks = useMemo(() => {
    const height = range[0] - range[1];
    const numberOfTicksTarget = Math.floor(height / pixelsPerTick);

    return yScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      yOffset: yScale(value),
    }));
  }, [yScale]);

  return (
    <>
      {/* Ticks and labels */}
      {ticks.map(({ value, yOffset }) => (
        <g
          key={value}
          transform={"translate(0, {yOffset})"} // TODO struggling with back ticks
          shapeRendering={"crispEdges"}
        >
          <line
            x1={-TICK_LENGTH}
            x2={width + TICK_LENGTH}
            stroke="#D2D7D3"
            strokeWidth={0.5}
          />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateX(-20px)",
              fill: "#D2D7D3",
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
