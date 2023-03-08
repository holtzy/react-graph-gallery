import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { LollipopBasicDemo } from "../viz/LollipopBasic/LollipopBasicDemo";
import { ResponsiveExplanationSection } from "component/ResponsiveExplanationSection";

const graphDescription = (
  <>
    <p>
      A{" "}
      <a href="https://www.data-to-viz.com/graph/lollipop.html">
        lollipop plot
      </a>{" "}
      is a variation of the more common <Link href="barplot">barplot</Link>.
      This page is a step-by-step guide on how to build your own lollipop for
      the web, using <a href="https://reactjs.org/">React</a> and{" "}
      <a href="https://d3-graph-gallery.com/histogram">D3.js</a>.
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and how to
      initialize the <b>lollipop component</b>. It explains how to build the{" "}
      <b>scales</b> and <b>axes</b> and how to add the shapes. A few variations
      are described and a focus is made on the <b>hover interaction</b>. 🙇‍♂️.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Lollipop plot with React"
      seoDescription="How to build a lollipop plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Lollipop plot"
        description={graphDescription}
        chartType="lollipop"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset required to build a lollipop is usually an array where each
        item is an object providing the <code>name</code> and the{" "}
        <code>value</code> of the group.
      </p>
      <br />
      <p>Here is a minimal example:</p>
      <CodeBlock code={snippetData} />
      <p>
        Note: if your data is in <code>.csv</code> format, you can translate it
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
        The goal here is to create a <code>Lollipop</code> component that will
        be stored in a <code>Lollipop.tsx</code> file. This component requires 3
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
        <code>Lollipop</code> component:
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
      // Basic
      //
      */}
      <h2 id="Basic lollipop">Most basic lollipop</h2>
      <p>
        There is nothing really tricky when it comes to build a basic barplot
        with react, all is pretty close to the{" "}
        <a href="https://d3-graph-gallery.com/barplot">d3-only examples</a>.
      </p>
      <ChartOrSandbox
        vizName={"LollipopBasic"}
        VizComponent={LollipopBasicDemo}
        height={400}
        maxWidth={600}
        caption="Most basic Lollipop built with d3.js for scales, and react for rendering"
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="lollipop" />

      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="lollipop" />

      {/*
      //
      // Vertical version
      //
      */}
      <h2 id="vertical">Vertical lollipop</h2>
      <p>
        The vertical option is less common since it makes is much harder to read
        the labels. But if you really need it, it is just a matter of swaping
        the X and Y axes of the previous example. Here is a working version.
      </p>
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
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

type LollipopProps = {
  width: number;
  height: number;
  data: number[];
};

export const Lollipop = ({ width, height, data }: LollipopProps) => {

  // read the data
  // build the scales
  // build the lines and circles

  return (
    <div>
      <svg width={width} height={height}>
        // render axes
        // render all the lines and rects
      </svg>
    </div>
  );
};
`.trim();
