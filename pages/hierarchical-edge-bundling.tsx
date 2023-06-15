import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { DendrogramBasicDemo } from "viz/DendrogramBasic/DendrogramBasicDemo";
import { DendrogramHorizontalDemo } from "viz/DendrogramHorizontal/DendrogramHorizontalDemo";
import { DendrogramRadialDemo } from "viz/DendrogramRadial/DendrogramRadialDemo";
import { Accordion } from "component/UI/Accordion";
import Link from "next/link";
import { LinkAsButton } from "component/LinkAsButton";
import { HierarchicalEdgeBundlingBasicDemo } from "viz/HierarchicalEdgeBundlingBasic.tsx/HierarchicalEdgeBundlingBasicDemo";

const graphDescription = (
  <>
    <p>
      A{" "}
      <a href="https://www.data-to-viz.com/graph/edge_bundling.html">
        hierarchical edge bundling
      </a>{" "}
      chart allows to visualize <b>relationships</b> between entities organized
      in a <b>hierarchy</b>. The idea is to <b>bundle</b> the adjacency edges
      together to decrease the clutter usually observed in complex networks.
    </p>
    <p>
      This page explains how to build a hierarchical edge bundling chart using{" "}
      <b>d3.js</b> to compute the node position, and <b>React</b> to render the
      nodes and edges. It starts by describing the required <b>data</b> format,
      explains how to build a very <b>basic</b> hierarchical edge bundling and
      then shows how to <b>customize</b> it.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Hierarchical Edge Bundling | React Graph Gallery"
      seoDescription="How to build a hierarchical edge bundling chart with React and D3.js. A set of re-usable components with explanation and code."
    >
      <TitleAndDescription
        title="Hierarchical edge bundling"
        description={graphDescription}
        chartType="edgeBundling"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{" "}
      <p>
        The dataset describes a <b>hierarchy</b> using a <b>recursive</b>{" "}
        structure.
      </p>
      <p>
        Each item in this structure is called a <b>node</b>. The lowest nodes of
        the hierarchy being called <b>leaves</b>.{" "}
      </p>
      <p>
        The dataset is an object that has at least 3 properties:{" "}
        <code>name</code>, <code>value</code> and <code>children</code>.{" "}
        <code>children</code> is an array of nodes that have this structure too.
      </p>
      <p>
        This kind of data is very close to what's required for a{" "}
        <Link href="/dendrogram">dendrogram</Link>. But an additional property
        is added for the leaves: <code>links</code>. It provides a list of all
        the other leaves this leaf is connected with.
      </p>
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />
      <p>
        <u>Note</u>: if your data is not formatted this way at all, don't fret!
        I provide explanation on how to reach this format from other common
        formats <Link href="/dendrogram#hierarchy">here</Link>.
      </p>
      {/*
      //
      // The hierarchy function
      //
      */}
      <h2 id="hierarchy">The hierarchy format or "root node"</h2>
      <p>
        A hierarchical edge bundling chart is a <b>hierarchical layout</b>.
      </p>
      <p>
        D3.js has a lot of{" "}
        <a href="https://github.com/d3/d3-hierarchy">utility functions</a>{" "}
        allowing to deal with this kind of hierarchical data. To use those
        functions we first need to create a <b>"Root node"</b> or{" "}
        <b>"Hierarchy"</b>.
      </p>
      <p>
        This is possible thanks to the <code>hierarchy</code> function of d3,
        and I extensively described the process in the{" "}
        <Link href="/dendrogram">dendrogram section</Link> of this gallery.
      </p>
      <CodeBlock code={snippetHierarchy} />
      <p>
        Once this is done, we have a js object that will be very convenient to
        manipulate to create our chart.
      </p>
      <LinkAsButton isFilled size="sm" href="/dendrogram#hierarchy">
        More explanation
      </LinkAsButton>
      {/*
      //
      // The cluster function
      //
      */}
      <h2 id="cluster">
        The <code>cluster()</code> function
      </h2>
      <p>
        We now have a <code>hierarchy</code> object that is a convenient data
        structure. From this, we need to compute the position of each node in
        our <b>2d space</b>.
      </p>
      <p>
        This is made possible thanks to the <code>cluster()</code> function of
        d3.js. You can check its{" "}
        <a href="https://github.com/d3/d3-hierarchy#cluster">
          offical documentation
        </a>
        .
      </p>
      <p>
        The work done here is exactly the same as for a <b>radial dendrogram</b>
        , so I suggest to follow the <Link href="/dendrogram">dendrogram</Link>{" "}
        page for more in-depth explanation.
      </p>
      <CodeBlock code={snippetLayout1} />
      <p>
        The output is almost the same as the initial <b>hierarchy</b> object.
        But for each node we have 2 additional properties: <code>x</code> and{" "}
        <code>y</code> that are the coordinates we need to build the dendrogram!
      </p>
      {/*
      //
      // Radial
      //
      */}
      <h2 id="Radial dendrogram">Radial dendrogram</h2>
      <p>
        Once more, it is crucial to understand that a hierarchical edge bundling
        starts with the layout of a <b>radial dendrogram</b>.
      </p>
      <p>
        To understand how to deal with polar coordinates and how to draw clean
        circular labels, please visit the dendrogram and the circular barplot
        sections. 👇
      </p>
      <div className="flex">
        <LinkAsButton href="/circular-barplot" size="sm">
          Circular barplot
        </LinkAsButton>{" "}
        <LinkAsButton href="/dendrogram" isFilled size="sm">
          Dendrogram
        </LinkAsButton>
      </div>
      <p>
        <br />
      </p>
      <p>
        If you are in your confort zone here, you can also just read the code
        directly
      </p>
      <ChartOrSandbox
        vizName={"DendrogramRadial"}
        VizComponent={DendrogramRadialDemo}
        maxWidth={600}
        height={600}
        caption="A minimalist radial dendrogram built using d3 and react."
      />
      {/*
      //
      // Links
      //
      */}
      <h2 id="Links">Hierarchical edge bundling</h2>
      <p>
        The last but trickiest part of our graph creation is to draw the{" "}
        <b>links</b> between leaves.
      </p>
      <h3>
        &rarr; Drawing curves with <code>d3.curveBundle</code>
      </h3>
      <p>
        We need a specific way to draw connections using curves. It can be done
        as follow. <code>BUNDLE_COEFF</code> is a value between 0 and 1, 0
        beeing a straight line and 1 being more influenced by dots on the path.
      </p>
      <CodeBlock code={snippetLinksGenerator} />
      <h3>&rarr; Find the path from leaf to leaf</h3>
      <p>
        We want to draw a connection between a leaf to another, passing through
        all the common ancestors. It is possible to find the list of nodes to
        traverse thanks to the <code>path()</code> method attached to a node!
      </p>
      <p>Here is the whole pipeline with comments:</p>
      <CodeBlock code={snippetEdges} />
      <p>Resulting in our first hierarchical edge bundling example 🎉</p>
      <ChartOrSandbox
        vizName={"HierarchicalEdgeBundlingBasic"}
        VizComponent={HierarchicalEdgeBundlingBasicDemo}
        maxWidth={600}
        height={600}
        caption="A first hierarchical edge bundling chart."
      />
      {/*
      //
      // Next
      //
      */}
      <h2 id="next">Coming soon</h2>
      <p>
        Using <code>canvas</code> for rendering is often a requirement when the
        number of nodes gets big. <b>Interactivity</b> is often necessary, for{" "}
        <b>hover effect</b> or to <b>collapse</b> a part of the tree. It also
        possible to <b>map</b> the node circle size to a numeric variable.
      </p>
      <p>
        This will come soon! I have a newsletter called the{" "}
        <a href="https://datavizuniverse.substack.com/">dataviz universe</a>{" "}
        where I share my latest updates.
      </p>
      <LinkAsButton href={"https://datavizuniverse.substack.com/"}>
        Subscribe
      </LinkAsButton>
      <div className="full-bleed border-t h-0 bg-gray-100 my-3 mt-20" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = {
  type: 'node',
  name: "boss",
  value: 2300,
  children: [
    {type: 'leaf', name:"Mark", value: 90, links: ['Robert', 'Emily']},
    {type: 'leaf', name:"Robert", value: 12, links: ['Emily']},
    {type: 'leaf', name:"Emily", value: 34, links: []},
    ...
}
`.trim();

const snippetHierarchy = `
const hierarchy = useMemo(() => {
  return d3.hierarchy(data);
}, [data]);
`.trim();

const snippetLayout1 = `
const dendrogramGenerator = d3
      .cluster<Tree>()
      .size([360, radius])

const dendrogram = dendrogramGenerator(hierarchy);
`.trim();

const snippetLinksGenerator = `
const linksGenerator = d3
  .lineRadial()
  .radius((d) => d.y)
  .angle((d) => (d.x / 180) * Math.PI)
  .curve(d3.curveBundle.beta(BUNDLE_COEFF));
`.trim();

const snippetEdges = `
// Compute a map from name to node.
let nameToNodeMap = {};
dendrogram.descendants().map((node) => {
  nameToNodeMap[node.data.name] = node;
});

// Draw connections
const allEdges = dendrogram
  .descendants() // find all nodes of the tree
  .filter((node) => node.data.type === "leaf" && node.data.links.length > 0) // keep only leaves that have links
  .map((sourceNode, i) => {
    return sourceNode.data.links.map((targetNodeName: string) => { // Loop through all the links we need to draw
      const traversedNodes = sourceNode.path(nameToNodeMap[targetNodeName]); // The path function provides a list of all the nodes we need to traverse from source to target!

      const traversedCoords = traversedNodes.map((node) => { // Find the coordinates of all nodes on the way
        return { x: node.x, y: node.y };
      });

      return (
        <path
          key={i}
          fill="none"
          stroke="grey"
          d={linksGenerator(traversedCoords)} // transform the list of coordinates to an SVG path
        />
      );
    });
  });
`.trim();
