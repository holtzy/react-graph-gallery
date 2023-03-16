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
import { CircularBarplotBasicDemo } from "../viz/CircularBarplotBasic/CircularBarplotBasicDemo";
import { CircularBarplotLabelDemo } from "../viz/CircularBarplotLabel/CircularBarplotLabelDemo";
import { CircularBarplotStackingDemo } from "viz/CircularBarplotStacking/CircularBarplotStackingDemo";
import { Caption } from "component/UI/Caption";

const graphDescription = (
  <>
    <p>
      A{" "}
      <a href="https://www.data-to-viz.com/graph/circularbarplot.html">
        circular barplot
      </a>{" "}
      is a variation of a <Link href="barplot">barplot</Link> where bars are
      displayed around a circle using polar coordinates. It is a less accurate
      representation of the data, but provides a strong <b>eye-catching</b>{" "}
      effect.
    </p>
    <p>
      This page describes how to deal with <b>radial coordinates</b> with{" "}
      <code>d3.js</code> and <code>react</code> to build a circular barplot.
      It's a step by step tutorial with several interactive sandboxes.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Circular Barplot with React"
      seoDescription="How to build a circular barplot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Circular Barplot"
        description={graphDescription}
        chartType="circularBarplot"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{" "}
      <p>
        The dataset required to build a circular barplot is usually an array
        where each item is an object providing the <code>name</code> and the{" "}
        <code>value</code> of the group.
      </p>
      <br />
      <p>Here is a minimal example</p>
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
        The goal here is to create a <code>CircularBarplot</code> component that
        will be stored in a <code>CircularBarplot.tsx</code> file. This
        component requires 3 props to render: a <code>width</code>, a{" "}
        <code>height</code>, and some <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to rendering a{" "}
        <code>svg</code> element in the DOM, in which we will insert the
        circular barplot.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>CircularBarplot</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the svg <code>circle</code>, but it's react that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{" "}
        <a href="https://d3-graph-gallery.com/circular_barplot.html">
          d3.js examples
        </a>
        .
      </p>
      {/*
      //
      // Radial bars
      //
      */}
      <h2 id="radial bars">Drawing circular bars</h2>
      <p>
        Even if the process to build a circular barplot is very different than
        for the common <Link href="barplot">barplot</Link>, I strongly advise to
        have a good understanding of the common version first.{" "}
        <Link href="barplot">Check it out</Link>.
      </p>
      <p>Here is an overview of the main differences.</p>
      <h3>&rarr; Radial coordinates</h3>
      <p>
        Do you remember your high school lectures about{" "}
        <a href="https://en.wikipedia.org/wiki/Trigonometry">trigonometry</a>?
        Me either 🙃. But we need it here. Using radial coordinates, each point
        in the 2d coordinate space is defined using an <b>angle</b> and its{" "}
        <b>distance</b> to the center of the chart.
      </p>
      <ul>
        <li>
          <b>Angle</b> is defined between <code>0</code> (top) and{" "}
          <code>2*Pi</code> (top again). A value of <code>Pi</code> will be at
          the bottom.
        </li>
        <li>
          <b>Distance</b> to the center goes from <code>innerRadius</code> to{" "}
          <code>outerRadius</code>. The inner radius is arbitraty. Do not use
          something too small or your bars will be very distorded. The upper
          value is computed from the svg dimension to fill it properly.
        </li>
      </ul>
      <p>
        Since I cannot seem to remember this, I thought you might have the same
        struggle and would enjoy this little schema:
      </p>
      <div className="flex flex-col items-center mt-8 mb-12">
        <img
          src="/img/trigonometry.png"
          style={{ maxWidth: 700 }}
          alt="schema explaining how radial coordinates work with d3.js"
        />
        <Caption>
          When dealing with radial coordinates, a position is defined by its
          angle and its distance from the center.
        </Caption>
      </div>
      <h3>&rarr; X Scale</h3>
      <p>
        The X scale (for the groups) is a <code>scaleBand</code> like for a
        common barplot, but it goes from <code>0</code> to <code>2*Pi</code>{" "}
        instead of going from <code>0</code> to <code>width</code>.{" "}
      </p>
      <CodeBlock code={snippetXScale} />
      <h3>&rarr; Y Scale</h3>
      <p>
        The Y scale uses a very specific <code>scaleRadial</code>. Indeed, bars
        are wider at their top than at their bottom. This{" "}
        <code>scaleRadial</code> takes it into account and bring some sort of
        correction. Check the{" "}
        <a href="https://github.com/d3/d3-scale#radial-scales">doc</a>, or even
        this <a href="https://github.com/d3/d3-scale/issues/90">explanation</a>{" "}
        for more.
      </p>
      <p>At the end of the day, that's how our scales look like:</p>
      <CodeBlock code={snippetYScale} />
      <h3>
        &rarr; Drawing with <code>path</code>, not <code>rect</code>.
      </h3>
      <p>
        We are not drawing rectangles here, so the svg <code>rect</code> element
        won't be helpful.
      </p>
      <p>
        Instead, we are drawing <b>fractions of a rings</b>, called <b>arcs</b>.
      </p>
      <p>
        Fortunately, d3.js has an <code>arc()</code> function that will generate
        the svg <code>path</code> for us. It's the same process that is used to
        create a <Link href="pie-plot">pie chart</Link> or a{" "}
        <Link href="donut">donut chart</Link>.
      </p>
      <p>
        Here is an idea on how the function can be used to generate all the svg
        shapes:
      </p>
      <CodeBlock code={snippet2} />
      <h3>&rarr; Rendering</h3>
      <p>
        Not much to add. Just include the paths in a <code>svg</code> element.
        Remember that 0,0 is the center of the chart instead of being the
        top-left corner. So we need to apply a <code>translate</code> at some
        point.
      </p>
      <ChartOrSandbox
        vizName={"CircularBarplotBasic"}
        VizComponent={CircularBarplotBasicDemo}
        height={500}
        maxWidth={600}
        caption={
          <span>
            Most basic circular barplot built with d3.js and react, using radial
            coordinates and <code>path</code> instead of <code>rect</code>.
          </span>
        }
      />
      <p>
        That's a good start but it looks pretty much like a snail so far. Let's
        make it a real chart with labels and values.
      </p>
      {/*
      //
      // Labels
      //
      */}
      <h2 id="labels">Labels</h2>{" "}
      <p>
        It is necessary to add a text element to show the <b>name</b> of each
        bar.
      </p>
      <p>
        We need those labels to be <b>readable</b> (like not written upside
        down). So a bit of logic is necessary to determine wether or not a label
        must be flipped, and how to position it properly.
      </p>
      <p>
        To do so it is necessary to switch from radians (use for the{" "}
        <code>xScale</code>) to degrees (used for the <code>transform</code>{" "}
        property).{" "}
      </p>
      <p>Please check the code below for full explanation.</p>
      <ChartOrSandbox
        vizName={"CircularBarplotLabel"}
        VizComponent={CircularBarplotLabelDemo}
        height={500}
        maxWidth={600}
        caption={
          "Add some labels to each bar of the circular barchart to make it insightful"
        }
      />
      <DatavizInspirationParallaxLink chartId="circularBarplot" />
      {/*
      //
      // Stacking
      //
      */}
      <h2 id="stacking">Stacking</h2>
      <p>
        <a href="https://www.data-to-viz.com/caveat/stacking.html">Stacking</a>{" "}
        is a process where a chart is broken up across more than one categoric
        variables which make up the whole.
      </p>
      <p>
        d3 comes with some handy functions for stacking. The process is
        extensively described in this{" "}
        <Link href="/example/barplot-stacked-horizontal">
          stacked barplot tutorial
        </Link>
        . There is nothing really different to make it circular and here is a
        working sandbox to discover the code.
      </p>
      <ChartOrSandbox
        vizName={"CircularBarplotStacking"}
        VizComponent={CircularBarplotStackingDemo}
        height={800}
        maxWidth={800}
        caption={
          "Add some labels to each bar of the circular barchart to make it insightful"
        }
      />
      <br />
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
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

type CircularBarplotProps = {
  width: number;
  height: number;
  data: { name: string; y: number }[];
};

export const CircularBarplot = ({ width, height, data }: CircularBarplotProps) => {

  // read the data
  // compute scales (including a radial scale)
  // compute all the shapes

  return (
    <div>
      <svg width={width} height={height}>
        // render all the shapes
      </svg>
    </div>
  );
};
`.trim();

const snippetXScale = `
const xScale = d3
      .scaleBand()
      .domain(groups)
      .range([0, 2 * Math.PI])
      .padding(BAR_PADDING)
`.trim();

const snippetYScale = `
const yScale = d3
      .scaleRadial()
      .domain([0, max])
      .range([innerRadius, outerRadius])
`.trim();

const snippet2 = `
const arcPathGenerator = d3.arc();

const allShapes = data.map((group, i) => {
  const path = arcPathGenerator({
    innerRadius: innerRadius,
    outerRadius: yScale(group.value),
    startAngle: xScale(group.name),
    endAngle: xScale(group.name) + xScale.bandwidth(),
  });
})
`.trim();
