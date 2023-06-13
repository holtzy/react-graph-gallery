import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { HistogramWithAxisDemo } from "../viz/HistogramWithAxis/HistogramWithAxisDemo";
import { HistogramBasicDemo } from "../viz/HistogramBasic/HistogramBasicDemo";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "../component/ResponsiveExplanationSection";
import { Caption } from "../component/UI/Caption";
import { HistogramDatasetTransitionDemo } from "../viz/HistogramDatasetTransition/HistogramDatasetTransitionDemo";
import { GraphLinkImage } from "../component/UI/GraphLinkImage";
import { ImageGrid } from "../component/UI/ImageGrid";
import Link from "next/link";
import { Accordion } from "component/UI/Accordion";
import { ChordDiagramRibbonDemo } from "viz/ChordDiagramRibbon/ChordDiagramRibbonDemo";

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
      <h2 id="chord()">The chord() function</h2>

      {/*
      //
      // Nodes
      //
      */}
      <h2 id="Nodes">Draw the nodes</h2>
      <p>Hello</p>
      <CodeBlock code={snippetYScale} />

      {/*
      //
      // Connection
      //
      */}
      <h2 id="connections">Draw the connections</h2>
      <p>Hello</p>
      <CodeBlock code={snippetYScale} />
      <ChartOrSandbox
        VizComponent={ChordDiagramRibbonDemo}
        vizName={"ChordDiagramRibbon"}
        maxWidth={600}
        height={600}
        caption={
          "Connections between nodes are drawn thanks to the ribbon() function of d3.js."
        }
      />

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
      // Variations
      //
      */}
      <h2 id="variations">Variations</h2>

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

const snippet2 = `
const bucketGenerator = d3
  .bin()
  .value((d) => d)
  .domain([0, 10])
  .thresholds([0, 2, 4, 6, 8, 10]);
`.trim();

const snippet3 = `
bucketGenerator(data)
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

const snippetYScale = `
const yScale = useMemo(() => {

  const max = Math.max(...buckets.map((bucket) => bucket?.length));

  return d3.scaleLinear()
    .range([height, 0])
    .domain([0, max]);

  }, [data, height]);
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
