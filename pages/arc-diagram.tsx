import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import Link from "next/link";
import { LinkAsButton } from "component/LinkAsButton";
import { ChordDiagramBasicDemo } from "viz/ChordDiagramBasic/ChordDiagramBasicDemo";
import { ToDoSection } from "component/UI/ToDoSection";
import { ArcDiagramBasicDemo } from "viz/ArcDiagramBasic/ArcDiagramBasicDemo";
import { ArcDiagramNodeOnlyDemo } from "viz/ArcDiagramNodeOnly/ArcDiagramNodeOnlyDemo";
import { ImageGrid } from "component/UI/ImageGrid";
import GraphGallery from "component/GraphGallery";

const graphDescription = (
  <>
    <p>
      An <a href="https://www.data-to-viz.com/graph/arc.html">arc diagram</a> is
      a special kind of network graph. It is consituted by <b>nodes</b> that
      represent entities and by <b>links</b> that show relationships between
      entities. In arc diagrams, nodes are displayed along a <b>single axis</b>{" "}
      and links are represented with <b>arcs</b>.
    </p>
    <p>
      This page is a step by step tutorial explaining how to build an Arc
      diagram component with <code>React</code> and <code>D3.js</code>. It comes
      with explanations and code sandboxes. It starts by simple concept like how
      to format the data and how to draw arcs in SVG, and then goes further with
      hover effect, tooltip and more.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build an Arc Diagram with React and D3."
      seoDescription="A step-by-step guide to build your very own Arc diagram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title="Arc diagram"
        description={graphDescription}
        chartType="arc"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        Two layers of information are required to build an arc diagram: a list
        of <b>nodes</b> to build the circles and a list of <b>links</b> to build
        the arcs.
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
          its <code>id</code> and its <code>group</code>. Note that any other
          feature can be added to nodes here.
        </li>
        <li>
          <code>links</code> is another array listing the connections. They are
          defined by a<code>source</code> and a <code>target</code> and
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
        The goal here is to create a <code>ArcDiagram</code> component that will
        be stored in a <code>ArcDiagram.tsx</code> file. This component requires
        3 props to render: a <code>width</code>, a <code>height</code> and some{" "}
        <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the arc
        diagram.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>ArcDiagram</code> component:
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
      // Nodes
      //
      */}
      <h2 id="Nodes">Draw the nodes</h2>
      <p>
        Positionning the nodes relies on a{" "}
        <a href="https://github.com/d3/d3-scale#scalePoint">point scale</a>{" "}
        implement in the <code>scalePoint()</code> function of d3.
      </p>
      <p>
        The <code>group</code> property of each node can be used to create an
        categoric color scale.
      </p>
      <p>
        Once the scales are available, it is just a matter of looping through
        all nodes and render them with several <code>circle</code> SVG elements.
      </p>
      <CodeBlock code={snippetNodes} />
      <p>
        Resulting in a few dots being the basis of our ongoing arc diagram 🔥.
      </p>
      <ChartOrSandbox
        VizComponent={ArcDiagramNodeOnlyDemo}
        vizName={"ArcDiagramNodeOnly"}
        maxWidth={500}
        height={150}
        caption={
          "First step of our ongoing arc diagram: the nodes are displayed at the bottom of the figure."
        }
      />

      {/*
      //
      // Connection
      //
      */}
      <h2 id="connections">Draw the connections</h2>
      <p>
        We now have to draw the <b>connections</b> between nodes using{" "}
        <b>arcs</b>. All the connections are listed in the <b>links</b> property
        of the dataset. So it is just a matter of looping through them and draw
        some SVG for each.
      </p>
      <p>
        Drawing an arc in SVG can be done using a <code>path</code> element.{" "}
      </p>
      <p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands">
          Six types
        </a>{" "}
        of <code>path</code> commands exist. The one we need here is the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve">
          Elliptical Arc Curve
        </a>
        . Its syntax is a bit complicated but here is a function that will get
        the <code>d</code> attribute of the path we need from the coordinates of
        2 points:
      </p>
      <CodeBlock code={snippetHorizontalArcGenerator} />
      <p>
        We can call this function for each link and pass the result to a{" "}
        <code>path</code>
        element. It results in our first basic arc diagram 😋
      </p>
      <ChartOrSandbox
        VizComponent={ArcDiagramBasicDemo}
        vizName={"ArcDiagramBasic"}
        maxWidth={500}
        height={300}
        caption={
          "Add arcs using a custom functionn that draws some elliptical arc curve in SVG."
        }
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="arc" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="arc" />
      {/*
      //
      // Variations
      //
      */}
      <h2 id="variations">Variations</h2>
      <p>
        Once you've understood how to build a basic arc diagram with d3 and
        react, it opens an infinite world of <b>customization</b>. Here are a
        few examples highlighting what it is possible to do with arc diagrams.
      </p>
      <p>Click on the overview below to get details and code.</p>
      <br />
      <GraphGallery images={["vertical-arc-diagram.png"]} />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
export const data = {
  nodes: [
      { id: "Myriel", group: 'team1' },
      { id: "Anne", group: 'team1' },
      ...
  ],
  links: [
      { source: "Anne", target: "Myriel", value: 1 },
      { source: "Napoleon", target: "Myriel", value: 1 },
      ...
  ]
}
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type ArcDiagramProps = {
  width: number;
  height: number;
  data: number[];
};

export const ArcDiagram = ({ width, height, data }: ArcDiagramProps) => {

  // read the data
  // compute the nodes position
  // build the arcs

  return (
    <div>
      <svg width={width} height={height}>
        // render all the arcs and circles
      </svg>
    </div>
  );
};
`.trim();

const snippetNodes = `
const xScale = d3.scalePoint().range([0, boundsWidth]).domain(allNodeNames);

const colorScale = d3
  .scaleOrdinal<string>()
  .domain(allNodeGroups)
  .range(COLORS);

const allNodes = data.nodes.map((node) => {
  return (
    <circle
      key={node.id}
      cx={xScale(node.id)}
      cy={boundsHeight}
      r={8}
      fill={colorScale(node.group)}
    />
  );
});
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
