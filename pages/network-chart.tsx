import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { ResponsiveExplanationSection } from '../component/ResponsiveExplanationSection';
import { ToDoSection } from 'component/UI/ToDoSection';
import GraphGallery from 'component/GraphGallery';
import { NetworkDiagramBasicCanvasDemo } from 'viz/NetworkDiagramBasicCanvas/NetworkDiagramBasicCanvasDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import Link from 'next/link';
import { NetworkDiagramAvailableForcesDemo } from 'viz/NetworkDiagramAvailableForces/NetworkDiagramAvailableForcesDemo';

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/arc.html">network diagram</a>{' '}
      shows the interconnections between entities. It is consituted by{' '}
      <b>nodes</b> that represent entities and by <b>links</b> that show
      relationships between entities.
    </p>
    <p>
      This page is a step by step tutorial explaining how to build a network
      diagram component with <code>React</code> and <code>D3.js</code>. It
      relies on the <code>d3-force</code> plugin to compute the node positions.
      It comes with explanations and code sandboxes. It starts by simple
      concepts like how to format the data and how to draw nodes and links in
      SVG, and then goes further with hover effect, tooltip and more.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a Network Diagram with React and D3."
      seoDescription="A step-by-step guide to build your very own Network diagram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title="Network diagram"
        description={graphDescription}
        chartType={'network'}
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        Two layers of information are required to build a network diagram: a
        list of <b>nodes</b> to build the circles and a list of <b>links</b> to
        build the lines.
      </p>
      <p>
        Many different data structures can be used to store such information. In
        this tutorial I suggest to start with the following:
      </p>
      <CodeBlock code={snippetData} />
      <p>
        <code>data</code> is an object with 2 properties: <code>nodes</code> and{' '}
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
          defined by a <code>source</code> and a <code>target</code> and
          optionnaly with a <code>value</code>. Note that all{' '}
          <code>source</code> and <code>target</code> values must have a value
          in the <code>nodes</code> array.
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
        The goal here is to create a <code>NetworkDiagram</code> component that
        will be stored in a <code>NetworkDiagram.tsx</code> file. This component
        requires 3 props to render: a <code>width</code>, a <code>height</code>{' '}
        and some <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{' '}
        <code>width</code> and <code>height</code> will be used to render an{' '}
        <code>svg</code> element in the DOM, in which we will insert the arc
        diagram.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{' '}
        <code>NetworkDiagram</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG <code>circle</code> and{' '}
        <code>lines</code>, but it's React that will render them in the{' '}
        <code>return()</code> statement. We won't use d3 methods like{' '}
        <code>append</code> that you can find in usual{' '}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>
      {/*
      //
      // d3 force
      //
      */}
      <h2 id="d3-force">
        Compute node positions with <code>d3-force</code>
      </h2>
      <p>
        The hardest part of a network diagram construction is to{' '}
        <b>compute the node positions</b>. Fortunately, the{' '}
        <a href="https://github.com/d3/d3-force">d3-force</a> plugin allows to
        simulate <b>physical forces</b> on our nodes to find insightful layouts.
      </p>
      <LinkAsButton href="https://github.com/d3/d3-force" size="sm" isFilled>
        d3-force doc
      </LinkAsButton>
      <br />
      <br />
      <p>
        Everything is done thanks to the <code>forceSimulation()</code>{' '}
        function. This function expects an array of nodes as described in the{' '}
        <Link href="#data">data section</Link> above.
      </p>
      <p>
        it also expects a list of <b>forces</b> to apply to the nodes. Many kind
        of physical forces are offered and will be described more in depth later
        in this post.
      </p>
      <p>
        To put it in a nutshell, here is an example of a call to the
        <code>forceSimulation</code> function
      </p>
      <CodeBlock code={snippetForce} />
      <p>
        This function is going to run a <b>simulation</b>. It is a basically a{' '}
        <b>loop</b>. At each iteration the function tries to improve the node
        positions until it is satisfied by the result.
      </p>
      <p>
        The input we provide to the function (the array of nodes) is
        progressively <b>mutated</b>. Some very useful properties are added to
        it! <code>x</code> and <code>y</code> for instance are now providing the
        node position on the 2d coordinate system 🎉.
      </p>
      <p>
        This is how <code>nodes</code> is now looking like:
      </p>
      <CodeBlock code={snippetMutatedNode} />
      <p>
        Note that pretty much the same thing happens to the{' '}
        <b>array of links</b>. The array is mutated, now providing the source
        and target coordinates too.{' '}
      </p>
      <p>
        This is it! Now it is just a matter of drawing those nodes and links
        with the available coordinates. 🔥
      </p>
      {/*
      //
      // rendering
      //
      */}
      <h2 id="rendering">Render nodes and links using canvas</h2>
      <p>
        Rendering a network diagram is <b>a bit more tricky</b> than many other
        chart types described in this gallery:
      </p>
      <h3>&rarr; Simulation takes time</h3>
      <p>
        Running the simulations with <code>forceSimulation()</code> to get the
        node positions <b>takes time</b>. Even with a small dataset like below
        it takes a few seconds. Since we do not want to leave the graph area
        empty for such a long period of time, a common workaround is to{' '}
        <b>update</b> the node positions <b>at each iteration</b> of the
        simulation.
      </p>
      <p>
        Fortunately this is possible using the <code>on('tick', ...)</code>{' '}
        method of <code>forceSimulation()</code>. Using the code below I can
        call a hand-made function called <code>drawNetwork</code> that will
        render the graph at each iteration.
      </p>
      <CodeBlock code={snippetDraw} />
      <p>
        Note that the simulation is run in a <code>useEffect</code> hook. It
        allows to first initialize the graph area in the DOM, and then render
        the content into it.
      </p>
      <h3>&rarr; Performance is key</h3>
      <p>
        The number of items to draw in the network diagram is often <b>big</b>.
        And we need to render it <b>many times</b>, at each iteration of the
        simulation. Adding that many SVG elements to the DOM could be very bad
        in term of performance.
      </p>
      <p>
        This is why I strongly advise to use a <code>canvas</code> element to
        render the shapes. The <code>drawNetwork()</code> function could look as
        something like this:
      </p>
      <CodeBlock code={snippetCanvas} />
      <p>
        Using canvas instead of SVG is a very important concept when preformance
        needs to be improved in a data visualization. I am preparing a full post
        on the topic so feel free to <Link href="/subscribe">subscribe</Link> to
        the project to know when it is ready!
      </p>
      <LinkAsButton isFilled size="sm" href="/subscribe">
        More about Canvas
      </LinkAsButton>
      <br />
      <br />
      <br />
      <p>
        Here is a code sandbox putting all of this into action. It results in a
        first simple network diagram. Refresh the page to see the simulation
        running and the node slowly reaching their final positons.
      </p>
      <ChartOrSandbox
        VizComponent={NetworkDiagramBasicCanvasDemo}
        vizName={'NetworkDiagramBasicCanvas'}
        maxWidth={700}
        height={500}
        caption={'A first network diagram built using react and d3-force.'}
      />
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="network" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="network" />
      {/*
      //
      // Forces
      //
      */}
      <h2 id="forces">Available forces</h2>
      <p>
        The exausthive list of forces that can be applied to nodes is available
        in the{' '}
        <a href="https://github.com/d3/d3-force#forces">
          official documentation
        </a>
        . Here is an overview of the main ones:
      </p>
      <ul>
        <li>
          <code>d3.forceManyBody()</code> &rarr; simulates <b>attraction</b>{' '}
          between nodes if its strength is positive, <b>repulsion</b> otherwise.
        </li>
        <br />
        <li>
          <code>d3.forceCenter()</code> &rarr; translates nodes uniformly so
          that the mean position of all nodes is at a given position.
        </li>{' '}
        <br />
        <li>
          <code>d3.forceCollide()</code> &rarr; tries to avoid node collision
          and overlap. You can provide a <code>radius</code> and a{' '}
          <code>strength</code>.
        </li>{' '}
        <br />
        <li>
          <code>d3.forceLink()</code> &rarr; pushes linked nodes together or
          apart according to the desired link distance.
        </li>{' '}
        <br />
        <li>
          <code>d3.forceX()</code> &rarr; applies a force toward a X position to
          all nodes. <code>d3.forceY()</code> is also available.
        </li>
      </ul>
      <ChartOrSandbox
        VizComponent={NetworkDiagramAvailableForcesDemo}
        vizName={'NetworkDiagramAvailableForces'}
        maxWidth={1000}
        height={700}
        caption={'A first network diagram built using react and d3-force.'}
      />
      {/*
      //
      // Variations
      //
      */}
      <h2 id="variations">Variations</h2>
      <p>
        Once you've understood how to build a basic network diagram with d3 and
        react, it opens an infinite world of <b>customization</b>. Here are a
        few examples using the same concepts.
      </p>
      <p>Click on the overview below to get details and code.</p>
      <br />
      <GraphGallery images={['vertical-arc-diagram.png']} />
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

type NetworkDiagramProps = {
  width: number;
  height: number;
  data: number[];
};

export const NetworkDiagram = ({ width, height, data }: NetworkDiagramProps) => {

  // read the data
  // compute the nodes position using a d3-force
  // build the links
  // build the nodes

  return (
    <div>
      <svg width={width} height={height}>
        // render all the lines and circles
      </svg>
    </div>
  );
};
`.trim();

const snippetForce = `
d3.forceSimulation(nodes) // apply the simulation to our array of nodes

  // Force #1: links between nodes
  .force( 'link', d3.forceLink(links).id((d) => d.id))

  // Force #2: avoid node overlaps
  .force('collide', d3.forceCollide().radius(RADIUS))

  // Force #3: attraction or repulsion between nodes
  .force('charge', d3.forceManyBody())

  // Force #4: nodes are attracted by the center of the chart area
  .force('center', d3.forceCenter(width / 2, height / 2));
`.trim();

const snippetMutatedNode = `
// Mutated nodes once the simulation has been run
[
  { id: "Myriel", group: 'team1', x: 200, y: 34.5, index: 0, ... },
  { id: "Anne", group: 'team1', x: 100, y: 53.2, index: 1, ... },
  ...
],
`.trim();

const snippetDraw = `
.on('tick', () => {
  drawNetwork(context, width, height, nodes, links);
});
`.trim();

const snippetCanvas = `
export const RADIUS = 10;

export const drawNetwork = (context, width, height, nodes, links,) => {
  context.clearRect(0, 0, width, height);

  // Draw the links first
  links.forEach((link) => {
    context.beginPath();
    context.moveTo(link.source.x, link.source.y);
    context.lineTo(link.target.x, link.target.y);
    context.stroke();
  });

  // Draw the nodes
  nodes.forEach((node) => {
    context.beginPath();
    context.moveTo(node.x + RADIUS, node.y);
    context.arc(node.x, node.y, RADIUS, 0, 2 * Math.PI);
    context.fillStyle = '#cb1dd1';
    context.fill();
  });
};
`.trim();
