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
        We now have to draw the connections between nodes that are listed in the
        initial square matrix (<code>data</code>).
      </p>
      <p>
        The connection coordinates are listed in the <code>chord</code> object
        computed in the <Link href="#chord()">previous section</Link>. For each
        connection we know the <code>startAngle</code> and <code>endAngle</code>{" "}
        of the <code>source</code> and of the
        <code>target</code>.
      </p>
      <p>
        This is everything we need to compute the connections thanks to the{" "}
        <code>ribbon()</code> function of d3 as follow:
      </p>
      <CodeBlock code={snippetRibbon} />
      <ChartOrSandbox
        VizComponent={ArcDiagramBasicDemo}
        vizName={"ArcDiagramBasic"}
        maxWidth={500}
        height={300}
        caption={
          "Nodes are drawn thanks to the arc() function of d3.js, like for a donut chart."
        }
      />
      <LinkAsButton
        href="https://github.com/d3/d3-chord#ribbon"
        isFilled
        size="sm"
      >
        <code>d3.ribbon()</code> documentation
      </LinkAsButton>

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="chordDiagram" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="chordDiagram" />
      {/*
      //
      // First chord diagram
      //
      */}
      <h2 id="basic">First chord diagram</h2>
      <p>I suggest 2 improvements to get a descent chord diagram:</p>
      <h3>&rarr; Colors</h3>
      <p>
        Pretty straightforward to implement. You just need to create an{" "}
        <code>array of colors</code>. Then, for each item to draw the{" "}
        <code>index</code> is always available. It can be used to retrieve the
        color in the color array.
      </p>
      <h3>&rarr; Labels</h3>
      <p>
        A new <b>prop</b> needs to be passed to the component with a list of
        names for the nodes. I suggest to position labels as for a{" "}
        <Link href="donut">donut chart</Link> but many other possibilities are
        available.
      </p>
      <ChartOrSandbox
        VizComponent={ChordDiagramBasicDemo}
        vizName={"ChordDiagramBasic"}
        maxWidth={700}
        height={450}
        caption={
          "Connections between nodes are drawn thanks to the ribbon() function of d3.js."
        }
      />

      <ToDoSection text="Add section on hover effect"></ToDoSection>
      <ToDoSection text="Talk about chordDirected() and chordTranspose()"></ToDoSection>
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

const snippetChordObject = `
[
  // first connection: flow between node 1 and node 1
  {
    source: { index: 0, startAngle: 0, endAngle: 0.84, value: 11975 },
    target: { index: 0, startAngle: 0, endAngle: 0.84, value: 11975
    }
  },
  // second connection: flow between node 2 and node 1
  {
    source: { index: 1, startAngle: 3.01, endAngle: 3.15, value: 1951 },
    target: { index: 1, startAngle: 1.67, endAngle: 1.67, value: 0
    }
  },
  // ...
]
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
