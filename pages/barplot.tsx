import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { BarplotBasicDemo } from "../viz/BarplotBasic/BarplotBasicDemo";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import { BarplotDatasetTransitionDemo } from "../viz/BarplotDatasetTransition/BarplotDatasetTransitionDemo";
import { BarplotStackedBasicDemo } from "../viz/BarplotStackedBasic/BarplotStackedBasicDemo";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/barplot.html">barplot</a>{" "}
      displays a numeric value for several groups of a dataset using rectangles.
      This page is a step-by-step guide on how to build your own barplot for the
      web, using <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/barplot.html">D3.js</a>.
    </p>
    <p>
      It starts with very basic concepts like <b>data structure</b>,{" "}
      <b>scales</b> and svg rectangle <b>rendering</b>. It then shows how to add
      interactivity to the chart with <b>hover effects</b>. Last but not least
      it explains how to build variations like the <b>stacked barplot</b>.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Barplot with React"
      seoDescription="How to build a barplot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Barplot"
        description={graphDescription}
        chartType="barplot"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{" "}
      <p>
        The dataset required to build a barplot is usually an array where each
        item is an object providing the <code>name</code> and the{" "}
        <code>value</code> of the group.
      </p>
      <br />
      <p>Here is a minimal example</p>
      <CodeBlock code={snippet1} />
      <p>
        Note: if your data is in <code>.csv</code> formart, you can translate it
        thanks to the <code>d3.csv()</code> function as suggested{" "}
        <a href="https://d3-graph-gallery.com/graph/barplot_horizontal.html">
          here
        </a>
        .
      </p>
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>Barplot</code> component that will be
        stored in a <code>Barplot.tsx</code> file. This component requires 3
        props to render: a <code>width</code>, a <code>height</code>, and some{" "}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to rendering a{" "}
        <code>svg</code> element in the DOM, in which we will insert the
        barplot.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our <code>Barplot</code>{" "}
        component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the svg <code>circle</code>, but it's react that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{" "}
        <a href="https://d3-graph-gallery.com/barplot.html">d3.js examples</a>.
      </p>
      {/*
      //
      // Scales
      //
      */}
      <h2 id="Scales">Scales</h2>
      <p>
        A <b>scale</b> is a function that transforms a <b>dimension</b> (like
        our <code>value</code> or our group <code>name</code>) in a{" "}
        <b>position</b> in pixels.
      </p>
      <p>
        Building a barplot requires 2 scales of 2 kinds. The first will
        transform the group <code>value</code> in a bar length. The second will
        transform the group <code>name</code> in a position.
      </p>
      <h3>&rarr; Linear scale for the bar length</h3>
      <p>
        D3.js comes with a handful set of{" "}
        <a href="https://github.com/d3/d3-scale">predefined scales</a>.{" "}
        <code>scaleLinear</code> is what we need for the bar length. Here is a
        quick overview on how to build and use a linear scale:
      </p>
      <CodeBlock code={snippetLinearScale} />
      <p>
        Since we are building a <b>horizontal</b> barplot here, this scale will
        be used the the <b>X</b> axis.
      </p>
      <p>
        To dig more into d3 scales, visit this{" "}
        <a href="https://d3-graph-gallery.com/graph/custom_axis.html">
          dedicated page
        </a>
        . It's a crucial concept that will be used everywhere in this website.
      </p>
      <h3>&rarr; Band scale for the group position</h3>
      <p>to do</p>
      {/*
      //
      // Rectangles
      //
      */}
      <h2 id="basic barplot">Basic barplot</h2>
      <p>
        There is nothing really tricky when it comes to build a basic barplot
        with react, all is pretty close to the{" "}
        <a href="https://d3-graph-gallery.com/barplot">d3-only examples</a>.
      </p>
      <p>
        First of all you probably want to add some margins around the dimensions
        provided in the component properties as described{" "}
        <Link href="/build-axis-with-react">here</Link>.
      </p>
      <p>
        Then, since we're building a horizontal barchart here the Y axis is
        showing groups. It means we can build it using the handy{" "}
        <code>d3.scaleBand()</code> function. Don't forget to pass a{" "}
        <code>padding</code> to it to have some space between bars. Note that it
        makes sense to wrap the axis creation in a <code>useMemo</code> hook.
        You don't want to recompute this axis if only the <code>width</code>{" "}
        changes (like if the window is resized for instance)
      </p>
      <ChartOrSandbox
        vizName={"BarplotBasic"}
        VizComponent={BarplotBasicDemo}
        height={400}
        maxWidth={600}
        caption="Most basic barplot built with d3.js for scales, and react for rendering"
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="barplot" />
      {/*
      //
      // Transition
      //
      */}
      <h2 id="transition">Transition</h2>
      <p>How to animation the transition between dataset</p>
      <ChartOrSandbox
        vizName={"BarplotDatasetTransition"}
        VizComponent={BarplotDatasetTransitionDemo}
        height={400}
        maxWidth={600}
        caption="Most basic barplot built with d3.js for scales, and react for rendering"
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <DatavizInspirationParallaxLink chartId="barplot" />
      {/*
      //
      // Stacking
      //
      */}
      <h2 id="basic barplot">Stacking</h2>
      <p>description</p>
      <ChartOrSandbox
        vizName={"BarplotStackedBasic"}
        VizComponent={BarplotStackedBasicDemo}
        height={400}
        maxWidth={600}
        caption="Most basic barplot built with d3.js for scales, and react for rendering"
      />
      <DatavizInspirationParallaxLink chartId="barplot" />
      {/*
      //
      // Stacking
      //
      */}
      <h2 id="vertical">Vertical barplot</h2>{" "}
      <p>
        The vertical option is less common since it makes is much harder to read
        the labels. But if you really need it, it is just a matter of swaping
        the X and Y axes of the previous example. Here is a working version.
      </p>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippet1 = `
const data = [
  {name:"Mark", value: 90},
  {name:"Robert", value: 12},
  {name:"Emily", value: 34},
  {name:"Marion", value: 53},
  {name:"Nicolas", value: 98},
]
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type BarplotProps = {
  width: number;
  height: number;
  data: { name: string; y: number }[];
};

export const Barplot = ({ width, height, data }: BarplotProps) => {

  // read the data
  // do some stuff with d3
  // compute all the <rect>

  return (
    <div>
      <svg width={width} height={height}>
        // render all the <rect>
      </svg>
    </div>
  );
};
`.trim();

const snippetLinearScale = `
const scale = d3.scaleLinear()
  .domain([0, 10]) // data goes from 0 to 10
  .range([0, 200]); // axis goes from 0 to 200

scale(0); // 0 -> item with a value of 0 will have a bar of length 0
scale(5); // 100 -> bar of length 100
scale(10); // 200 -> bar of length 200
`.trim();
