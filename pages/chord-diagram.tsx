import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import { ChordDiagramRibbonDemo } from "viz/ChordDiagramRibbon/ChordDiagramRibbonDemo";
import Link from "next/link";
import { ChordDiagramNodeOnlyDemo } from "viz/ChordDiagramNodeOnly/ChordDiagramNodeOnlyDemo";
import { LinkAsButton } from "component/LinkAsButton";
import { ChordDiagramBasicDemo } from "viz/ChordDiagramBasic/ChordDiagramBasicDemo";
import { ToDoSection } from "component/UI/ToDoSection";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/chord.html">chord diagram</a>{" "}
      represents <b>flows</b> between several entities called <b>nodes</b>. Each
      node is represented by a fragment on the outer part of the circular
      layout. Then, <b>arcs</b> are drawn between each entities. The size of the
      arc is proportional to the importance of the flow..
    </p>
    <p>
      Building a chord diagram with React and D3.js relies on the{" "}
      <code>d3-chord</code> module that computes the node and arc positions for
      us. <code>React</code> can then be used to draw everything in SVG. This
      page is a step by step tutorial with code sandboxes. It will teach you how
      to build a <code>ChordDiagram</code> component.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a chord diagram with React and D3."
      seoDescription="A step-by-step guide to build your very own chord diagram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title="Chord diagram"
        description={graphDescription}
        chartType="chordDiagram"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset required to build a chord diagram is a <b>square matrix</b>.
        It has a dimension of <code>n x n</code> where <code>n</code> is the
        number of <b>nodes</b>.
      </p>
      <p>
        In javascript, this matrix is represented as an{" "}
        <b>
          array of <code>n</code> array
        </b>
        . Each individual array also has <code>n</code> items. The matrix of
        flow has a <b>direction</b>: the second item of the third row gives the
        flow from element 2 to element 3.
      </p>
      <p>
        Usually an additional array is provided, giving the <b>name</b> of each
        node.
      </p>
      <br />
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />

      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>ChordDiagram</code> component that
        will be stored in a <code>ChordDiagram.tsx</code> file. This component
        requires 3 props to render: a <code>width</code>, a <code>height</code>,
        some <code>data</code> and a list of <code>names</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the chord
        diagram.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>ChordDiagram</code> component:
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
      // The chord() function
      //
      */}
      <h2 id="chord()">
        The <code>chord()</code> function
      </h2>
      <p>
        We need to transform the flow matrix described in the{" "}
        <Link href="#data">data</Link> section into a list of node and
        connection coordinates. This is easy thanks to the <code>chord()</code>{" "}
        function of d3.js.
      </p>
      <p>The function can be used as follow:</p>
      <CodeBlock code={snippetChord} />
      <p>
        The returned object (<code>chord</code> in this example) is an array
        listing all the connections. For each, details about the{" "}
        <code>source</code> and the <code>target</code> are provided:
      </p>
      <CodeBlock code={snippetChordObject} />
      <p>
        Last but not least, the array also has a <code>group</code> property
        with details about all nodes of the chord diagram.
      </p>
      <LinkAsButton href="https://github.com/d3/d3-chord" isFilled size="sm">
        chord() official documentation
      </LinkAsButton>
      {/*
      //
      // Nodes
      //
      */}
      <h2 id="Nodes">Draw the nodes</h2>
      <p>
        Nodes are drawn using the <code>group</code> property of the{" "}
        <code>chord</code> object computed above. For each group, the{" "}
        <b>start</b> and <b>end</b> angles are provided.
      </p>
      <p>
        From this information it is possible to draw an arc thanks to the{" "}
        <code>arc()</code> function of d3. It is exactly the same process as for
        a <Link href="donut">donut chart</Link>. Please visit the donut section
        of the gallery for more explanation!
      </p>
      <LinkAsButton href="donut" isFilled size="sm">
        Donut section
      </LinkAsButton>
      <ChartOrSandbox
        VizComponent={ChordDiagramNodeOnlyDemo}
        vizName={"ChordDiagramNodeOnly"}
        maxWidth={400}
        height={400}
        caption={
          "Nodes are drawn thanks to the arc() function of d3.js, like for a donut chart."
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
        VizComponent={ChordDiagramRibbonDemo}
        vizName={"ChordDiagramRibbon"}
        maxWidth={400}
        height={400}
        caption={
          "Connections between nodes are drawn thanks to the ribbon() function of d3.js."
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
// matrix of flow
const data = [
  [11975,  0, 8916, 2868],
  [ 1951, 10048, 2060, 6171],
  [ 0, 16145, 8090, 8045],
  [ 1013,   990,  940, 6907]
];

// node names
const nodeNames = ['Barcelona', 'Paris', 'Dakar', 'NY']
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type ChordDiagramProps = {
  width: number;
  height: number;
  data: number[];
};

export const ChordDiagram = ({ width, height, data }: ChordDiagramProps) => {

  // read the data
  // compute the nodes and ribbon position
  // build the arcs
  // build the ribbon

  return (
    <div>
      <svg width={width} height={height}>
        // render all the arcs and ribbons
      </svg>
    </div>
  );
};
`.trim();

const snippetChord = `
const chordGenerator = d3
.chord()
.padAngle(0.05) // padding between nodes
.sortSubgroups(d3.descending);

const chord = chordGenerator(data);
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
