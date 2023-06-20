import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";

import { ToDoSection } from "component/UI/ToDoSection";
import { ArcDiagramBasicDemo } from "viz/ArcDiagramBasic/ArcDiagramBasicDemo";
import { SankeyDiagramBasicDemo } from "viz/SankeyDiagramBasic/SankeyDiagramBasicDemo";
import { SankeyDiagramNodeOnlyDemo } from "viz/SankeyDiagramNodeOnly/SankeyDiagramNodeOnlyDemo";
const graphDescription = (
  <>
    <p>
      A{" "}
      <a href="https://www.data-to-viz.com/graph/sankey.html">Sankey Diagram</a>{" "}
      display <b>flows</b>. Several entities (<b>nodes</b>) are represented by
      rectangles or text. Directed <b>links</b> are represented with arrows or
      arcs that have a width proportional to the importance of the flow.
    </p>
    <p>
      This tutorial explains how to use <code>React</code>, <code>D3.js</code>{" "}
      and the <code>d3-sankey</code> plugin to build a Sankey diagram. It comes
      with explanations and code sandboxes to play along with the suggested
      implementation.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a Sankey Diagram with React and D3."
      seoDescription="A step-by-step guide to build your very own Sankey Diagram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={"Sankey Diagram"}
        description={graphDescription}
        chartType="sankey"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        Two layers of information are required to build a Sankey diagram: a list
        of <b>nodes</b> to build the rectangles and a list of <b>links</b> to
        build the paths between them.
      </p>
      <p>
        Many different data structures can be used to store such information. In
        this tutorial I suggest to start with the following:
      </p>
      <CodeBlock code={snippetData} />
      <p>
        <code>data</code> is an object with 2 properties: <code>nodes</code> and{" "}
        <code>links</code>.
      </p>
      <ul>
        <li>
          <code>nodes</code> is an array where each node is an object defined by
          its index (<code>node</code>) and its <code>name</code>. Note that any
          other feature can be added to nodes here.
        </li>
        <li>
          <code>links</code> is another array listing the connections. They are
          defined by a <code>source</code> and a <code>target</code> and
          optionnaly with a <code>value</code>.
        </li>
      </ul>
      <ToDoSection text="Explain how to build this data structure from various initial formats" />

      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>Sankey</code> component that will be
        stored in a <code>Sankey.tsx</code> file. This component requires 3
        props to render: a <code>width</code>, a <code>height</code>, and some{" "}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the Sankey.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our <code>Sankey</code>{" "}
        component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to layout (<code>rect</code> and <code>path</code>{" "}
        positions), but it's React that will render them in the{" "}
        <code>return()</code> statement. We won't use d3 methods like{" "}
        <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>

      {/*
      //
      // Nodes
      //
      */}
      <h2 id="Nodes">Draw the nodes</h2>
      <p>
        To draw the nodes we first need to compute their positions on the SVG
        area. This is where the{" "}
        <a href="https://github.com/d3/d3-sankey">d3-sankey plugin</a> gets
        helpful with its <code>sankey()</code>
        function.
      </p>
      <p>
        The <code>sankey()</code> function must be called with a set of options
        described below as inline comments:
      </p>
      <CodeBlock code={snippetSankeyLAyout} />
      <p>
        We now have a function called <code>sankeyGenerator</code> that computes
        the sankey layout from our dataset. We can use it as follow:
      </p>
      <CodeBlock code={snippetSankeyGen} />
      <p>
        And that's it. We now have 2 objects called <code>nodes</code> and{" "}
        <code>links</code> that provide all the necessary information about
        nodes and links. <code>nodes</code> is an array. For each item we have
        <code>x0</code>, <code>y0</code>, <code>x1</code> and <code>y1</code>{" "}
        that are the coordinates of the top-left and bottom right corners of the
        rectangle. We are ready for the drawing! ✏️
      </p>
      <ChartOrSandbox
        VizComponent={SankeyDiagramNodeOnlyDemo}
        vizName={"SankeyDiagramNodeOnly"}
        maxWidth={500}
        height={300}
        caption={
          "First step of our ongoing sankey diagram: the nodes are displayed using rectangles."
        }
      />

      {/*
      //
      // Connection
      //
      */}
      <h2 id="connections">Draw the connections</h2>
      <p>
        The other object we got from the <code>sankey()</code> function is{" "}
        <code>links</code>.
      </p>
      <ChartOrSandbox
        VizComponent={SankeyDiagramBasicDemo}
        vizName={"SankeyDiagramBasic"}
        maxWidth={500}
        height={300}
        caption={
          "First step of our ongoing arc diagram: the nodes are displayed at the bottom of the figure."
        }
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="sankey" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="sankey" />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = {
  nodes: [
      { node: 0, name: "node0" },
      { node: 1, name: "node1" },
      { node: 2, name: "node2" },
      { node: 3, name: "node3" },
  ],
  links: [
      { source: 0, target: 2, value: 2 },
      { source: 1, target: 2, value: 2 },
      { source: 1, target: 3, value: 2 },
  ]
}

`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type SankeyProps = {
  width: number;
  height: number;
  data: number[];
};

export const Sankey = ({ width, height, data }: SankeyProps) => {

  // read the data
  // create a color scale for the nodes
  // compute node position thanks to the d3.sankey() function
  // build the rectangles and arcs

  return (
    <div>
      <svg width={width} height={height}>
        // render all the <rect> and <path>
      </svg>
    </div>
  );
};
`.trim();

const snippetSankeyLAyout = `
const sankeyGenerator = sankey()  // Main function of the d3-sankey plugin that computes the layout
    .nodeWidth(26)                  // width of the node in pixels
    .nodePadding(29)                // space between nodes
    .extent([                       // chart area:
      [MARGIN_X, MARGIN_Y],                   // top-left coordinates
      [width - MARGIN_X, height - MARGIN_Y],  // botton-right coordinates
    ])
    .nodeId((node) => node.id)      // Accessor function: how to retrieve the id that defines each node. This id is then used for the source and target props of links
    .nodeAlign(sankeyCenter);       // Algorithm used to decide node position
`.trim();

const snippetSankeyGen = `
const { nodes, links } = sankeyGenerator(data);
`.trim();

const snippetHorizontalArcGenerator = `
const horizontalArcGenerator = (
  xStart,
  yStart,
  xEnd,
  yEnd
) => {
  return [
    // the arc starts at the coordinate xStart, xEnd
    "M",
    xStart,
    yStart,

    // A means we're gonna build an Elliptical Arc Curve
    "A",
    (xStart - xEnd) / 2,    // rx: first radii of the ellipse (inflexion point)
    (xStart - xEnd) / 2,    // ry: second radii of the ellipse  (inflexion point)
    0,                      // angle: rotation (in degrees) of the ellipse relative to the x-axis
    1,                      // large-arc-flag: large arc (1) or small arc (0)
    xStart < xEnd ? 1 : 0,  // sweep-flag: the clockwise turning arc (1) or counterclockwise turning arc (0)

    // Position of the end of the arc
    xEnd,
    ",",
    yEnd,
  ].join(" ");
};
`.trim();

const snippet4 = `
[
  [x0: 0, x1: 2],
  [2, 2, 2, 3, x0: 2, x1: 4],
  [4, 5, x0: 4, x1: 6],
  [6, 6, 6, x0: 6, x1: 8],
  [x0: 8, x1: 10],
  [x0: 10, x1: 10],
]
`.trim();

const snippetXScale = `
const xScale = d3
  .scaleLinear()
  .domain([0, 10])
  .range([0, width]);

// xScale(0) -> 0 (the left hand side position of the first bin)
// xScale(10) -> width (the right hand side position of the last bin)
`.trim();

const snippetRibbon = `
const allConnections = chord.map((connection, i) => {
  const d = ribbonGenerator(connection);
  return <path key={i} d={d} />;
});
`.trim();

const snippetRects = `
const allRects = buckets.map((bucket, i) => {
  return (
    <rect
      key={i}
      fill="#69b3a2"
      stroke="black"
      x={xScale(bucket.x0)}
      width={xScale(bucket.x1) - xScale(bucket.x0)}
      y={yScale(bucket.length)}
      height={height - yScale(bucket.length)}
    />
  );
});
`.trim();

const snippetRectangle = `
import { useSpring, animated } from "@react-spring/web";

type RectangleProps = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export const Rectangle = (props: RectangleProps) => {
  const { x, y, width, height } = props;

  const springProps = useSpring({
    to: { x, y, width, height },
    config: {
      friction: 30,
    },
    delay: x,
  });

  if (y === undefined) {
    return null;
  }

  return (
    <animated.rect
      x={springProps.x}
      y={springProps.y}
      width={springProps.width}
      height={springProps.height}
      opacity={0.7}
      stroke="#9d174d"
      fill="#9d174d"
      fillOpacity={0.3}
      strokeWidth={1}
      rx={1}
    />
  );
};
`.trim();
