import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { PieChartBasicDemo } from "../viz/PieChartBasic/PieChartBasicDemo";
import { PieChartLegendDemo } from "viz/PieChartLegend/PieChartLegendDemo";
import { Caption } from "component/UI/Caption";
import Link from "next/link";
import { PieChartHoverDemo } from "viz/PieChartHover/PieChartHoverDemo";
import { DonutDatasetTransitionDemo } from "viz/DonutDatasetTransition/DonutDatasetTransitionDemo";
import { DonutBarplotTransitionDemo } from "viz/DonutBarplotTransition/DonutBarplotTransitionDemo";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/caveat/pie.html">pie chart</a> is a
      type of graph used to visually represent data as a circular, segmented
      chart. The chart is divided into <b>slices</b>, where the size of each
      slice represents the proportion of data that falls within a particular
      category or group.
    </p>
    <p>
      This post explains how to build a pie chart with{" "}
      <a href="https://react.dev/">react</a>, using the <code>pie()</code>{" "}
      function of d3.js. It describes the expected <b>data format</b>, how the
      <code>Pie</code> component must be structured, how to compute the slice
      positions and how to render those slices. Last but not least, it provides
      the implementation for common use-case like <b>hover effect</b> and{" "}
      <b>data transition</b>.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Pie chart with React"
      seoDescription="How to build a pie chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Pie chart"
        description={graphDescription}
        chartType="pie"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{" "}
      <p>
        The dataset required to build a pie chart is pretty simple. It is an
        array where each item represents a group of the pie chart. Each item is
        an object with 2 properties. They provide the group name (
        <code>name</code>) and its value (<code>value</code>).
      </p>
      <br />
      <p>
        For instance, here is the dataset used for the simple pie chart below:
      </p>
      <CodeBlock code={snippetData} />
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>PieChart</code> component that will
        be stored in a <code>PieChart.tsx</code> file. This component requires 3
        props to render: a <code>width</code>, a <code>height</code>, and some{" "}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the pie
        chart.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>PieChart</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG arcs, but it's React that will render
        them in the <code>return()</code> statement. We won't use d3 methods
        like <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>
      {/*
      //
      // Data to arcs
      //
      */}
      <h2 id="build arcs">From data to arcs</h2>
      <h3>&rarr; A pie chart is a set of arcs</h3>
      <p>
        A pie chart is actually a set of <b>arcs</b>. An arc is a slice of a{" "}
        <b>ring</b>. It is defined using 4 numbers:
      </p>
      <ul>
        <li>
          Start and end <b>angle</b>. An angle of 0 is at the very top. An angle
          of <code>Pi / 2</code> is at the most right. <code>Pi</code> is
          bottom. And so on.
        </li>
        <li>
          Inner and outer <b>radius</b>. For a pie chart, the inner radius will
          be set to 0. This is what makes it different from a{" "}
          <Link href="donut-chart">donut chart</Link>.
        </li>
      </ul>
      <div className="col-span-w flex flex-col items-center justify-center">
        <img src="/img/arcDefinition.png" style={{ maxWidth: 600 }} />
        <Caption>
          A pie chart is built from a set of arcs. An arc is a slice defined by
          its inner radius, outer radius, start angle and end angle.
        </Caption>
      </div>
      <h3>
        &rarr; use <code>d3.pie()</code> to get arc coordinates
      </h3>
      <p>
        The <code>pie()</code> function of d3 is here to transform the dataset
        in a set of arcs with their coordinates. This function{" "}
        <code>d3.pie()</code> returns a function ( called{" "}
        <code>pieGenerator</code> here) that is an <b>arc generator</b>.
      </p>
      <p>
        You can pass the dataset described at the beginning of this tutorial, it
        will return an array where each item provides the coordinates of an arc:
      </p>
      <CodeBlock code={snippetPieGenerator} />
      <h3>
        &rarr; <code>d3.arc()</code> to compute the svg path
      </h3>
      <p>
        From those start and end angles we now need to build a proper string
        that we can pass as the <code>d</code> attribute of a <code>path</code>.
        This is pretty easy thanks to the <code>arc()</code> function of d3.
        This function must be applied to every item of the pie object created
        above.
      </p>
      <CodeBlock code={snippetPathGenerator} />
      {/*
      //
      // Rendering
      //
      */}
      <h2 id="basic pie">Basic pie chart</h2>
      <p>
        We now have a set of svg path that we need to draw! We just need to loop
        through all of them and render a <code>path</code> element in our svg
        area. Something like:
      </p>
      <CodeBlock code={snippetDraw} />
      <p>
        The only unusual thing here is that we need to translate our svg element
        to put the <code>0,0</code> coordinate at the <b>center</b> of the
        figure (it is usually top left)
      </p>
      <p>
        And that's it, we finally have the most basic pie chart built with react
        for rendering, and d3 for layout computation.
      </p>
      <ChartOrSandbox
        vizName={"PieChartBasic"}
        VizComponent={PieChartBasicDemo}
        maxWidth={400}
        height={400}
        caption="Most basic pie chart built with react (rendering) and d3.js (layout)"
      />
      {/*
      //
      // Warning
      //
      */}
      <h2 id="warning">Warning</h2>
      <p>
        Now is a good time to remind you that pie charts{" "}
        <a href="https://www.data-to-viz.com/caveat/pie.html">have flaws</a>. To
        put it in a nutshell, humans are pretty <b>bad at reading angles</b>,
        what makes pie charts pretty weak to compare values.
      </p>
      <p>In the figure below, what trend can you spot in the dataset?</p>
      <div className="col-span-w flex flex-col items-center justify-center">
        <img src="/img/pie-caveat.png" style={{ maxWidth: 800 }} />
        <Caption>
          Three datasets visualized with pie charts. Can you spot the trend?
        </Caption>
      </div>
      <p className="mt-4">
        Hard to find out isn't it? Check this{" "}
        <a href="https://www.data-to-viz.com/caveat/pie.html">
          pie chart dedicated post
        </a>{" "}
        to see it visualized as a barplot. You'll see why pie charts are weak
        (and will learn good alternatives).
      </p>
      <p>
        If you're convinced you need a pie chart (there are some reason for this
        sometimes!), keep reading!
      </p>
      {/*
      //
      // Legend
      //
      */}
      <h2 id="legend">Legend</h2>
      <p>
        There is one very common caveat with pie charts: adding a{" "}
        <b>legend on the side</b> to link each color with a label. It's much
        better to label each slice <b>directly next to it</b> to ease the
        reading.
      </p>
      <p>
        In the example below a little dot is located on each slice{" "}
        <b>centroid</b>. From there a first segment goes out of the slice,
        followed by a second horizontal segment that goes to the label.
      </p>
      <p>
        The difficulty here is to get the position of the slice centroid and of
        the line inflexion point.
      </p>
      <p>
        Fortunately the <code>centroid()</code> function of d3 is all we need
        for that. It gives the <code>x</code> and <code>y</code> coordinates of
        the centroid of an <code>arc</code>, arc that we used to build the donut
        slice anyway.
      </p>
      <CodeBlock code={snippetCentroid} />
      <p>
        The exact same technique is used to get the position of the{" "}
        <b>inflexion point</b>. An <b>additional arc</b> is computed, located
        out of the donut area, and with a thickness of 0. Its centroid is the
        inflexion point.
      </p>
      <ChartOrSandbox
        vizName={"PieChartLegend"}
        VizComponent={PieChartLegendDemo}
        maxWidth={700}
        height={600}
        caption="A pie chart with clean inline legend. Centroid are used for both the starting and inflexion points."
      />
      {/*
      //
      // Hover effect
      //
      */}
      <h2 id="hover effect">Hover effect</h2>
      <p>
        Adding a <b>hover effect</b> to your pie chart is a nice polish detail.
        Here I suggest to highlight the slice that is hovered over by{" "}
        <b>dimming</b> all the other slices.
      </p>
      <p>
        There are several strategies available to implement such an effect. One
        can rely on css <b>pseudo classes</b> only, or <b>add a css class</b>{" "}
        using javascript and the <code>onMouseEnter</code> event. It's also
        possible to rely on an <b>animation library</b> like{" "}
        <code>react-spring</code>.
      </p>
      <p>
        I'm preparing a full section on the topic. You can subscribe to my{" "}
        <a href="https://datavizuniverse.substack.com/">
          dataviz-universe newsletter
        </a>{" "}
        to know when it will be ready. Meanwhile, there is a code sandbox
        waiting for you below to reveal the code of this example.
      </p>
      <ChartOrSandbox
        vizName={"PieChartHover"}
        VizComponent={PieChartHoverDemo}
        maxWidth={700}
        height={600}
        caption="A pie chart with hover effect. Hover over a slice to highlight it and fade other groups."
      />
      {/*
      //
      // Data transition
      //
      */}
      <h2 id="data transition">Data transition</h2>
      <p>The hardest part!</p>
      <ChartOrSandbox
        vizName={"DonutDatasetTransition"}
        VizComponent={DonutDatasetTransitionDemo}
        maxWidth={800}
        height={400}
        caption="A donut chart with clean inline legends, built thanks to the centroid function of d3.js."
      />
      {/*
      //
      // Pie chart to Barplot
      //
      */}
      <h2 id="barplot transition">Pie chart to barplot</h2>
      <p>yeah!</p>
      <ChartOrSandbox
        vizName={"DonutBarplotTransition"}
        VizComponent={DonutBarplotTransitionDemo}
        maxWidth={500}
        height={400}
        caption="A donut chart with clean inline legends, built thanks to the centroid function of d3.js."
      />
      {/*
      //
      // Footer
      //
      */}
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="partOfAWhole" />
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

type PieChartProps = {
  width: number;
  height: number;
  data: {name: string, value: number}[];
};

export const PieChart = ({ width, height, data }: PieChartProps) => {

  // read the data
  // generate position of each slice with d3.pie()
  // build the arcs

  return (
    <div>
      <svg width={width} height={height}>
        // render all the arcs
      </svg>
    </div>
  );
};
`.trim();

const snippetPieGenerator = `
// Compute a pie generator = a function that transforms a dataset in a list of arcs
const pieGenerator = d3.pie().value((d) => d.value);

// Use this pie generator on our initial dataset
const pie = pieGenerator(data);

/* Result looks like this:
[
  {
      "data": {"name": "Mark", "value": 90},
      "index": 1,
      "value": 90,
      "startAngle": 2.145477909768639,
      "endAngle": 4.115814765678614,
      "padAngle": 0
  }, .... same for other groups
]
*/
`.trim();

const snippetPathGenerator = `
// Compute an arc generator = a function that transforms arc coordinates in a svg path
const arcPathGenerator = d3.arc();

// For each arc, use the path generator
const arcs = pie.map((p) =>
      arcPathGenerator({
        innerRadius: 0,
        outerRadius: radius,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );

/* Result looks like:
[
  "M151,97 A180,180,0,0,1,-148,101 L0,0Z",
  .... other groups
]
*/
`.trim();

const snippetDraw = `
<g transform={..}>
    {arcs.map((arc, i) => {
      return <path key={i} d={arc} />;
    })}
</g>
`.trim();

const snippetCentroid = `
const sliceInfo = {
  innerRadius,
  outerRadius: radius,
  startAngle: start,
  endAngle: end,
};
const centroid = arcGenerator.centroid(sliceInfo); // [x,y] position of the centroid
const slicePath = arcGenerator(sliceInfo); // string: the path of the slice
`.trim();
