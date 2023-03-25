import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { DendrogramBasicDemo } from "viz/DendrogramBasic/DendrogramBasicDemo";
import { DendrogramHorizontalDemo } from "viz/DendrogramHorizontal/DendrogramHorizontalDemo";
import { DendrogramRadialDemo } from "viz/DendrogramRadial/DendrogramRadialDemo";

const graphDescription = (
  <>
    <p>
      A{" "}
      <a href="https://www.data-to-viz.com/graph/dendrogram.html">dendrogram</a>{" "}
      is a <b>network</b> structure. It is constituted of a <b>root</b> node
      that gives birth to several nodes connected by <b>edges</b> or branches.
      The last nodes of the hierarchy are called <b>leaves</b>.
    </p>
    <p>
      This page explains how to build a dendrogram using <b>d3.js</b> to compute
      the node position, and <b>React</b> to render the nodes and edges. It
      starts by describing the required <b>data</b> format, explains how to
      build a very <b>basic</b>
      dendrogram and then shows how to <b>customize</b> it.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Dendrogram | The React Graph Gallery"
      seoDescription="How to build a dendrogram with React and D3.js. A set of re-usable components with explanation and code."
    >
      <TitleAndDescription
        title="Dendrogram"
        description={graphDescription}
        chartType="dendrogram"
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
        the hierarchy being called <b>leaves</b>. The dataset is an object that
        has at least 3 properties: <code>name</code>, <code>value</code> and{" "}
        <code>children</code>. Children is an array of nodes that have this
        structure too.
      </p>
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />
      {/*
      //
      // The hierarchy function
      //
      */}
      <h2 id="hierarchy">The hierarchy format or "root node"</h2>
      <p>
        All d3 tools dealing with hierarchical dataset are based on a "root
        node" or "hierarchy" dataset. To get it the simplest way is to call the{" "}
        <a href="https://github.com/d3/d3-hierarchy/blob/main/README.md#hierarchy">
          hierarchy()
        </a>{" "}
        function. So if you're trying to build a treemap, a circle pack, a
        hierarchical edge bundling, you will have to understand this.
      </p>
      <p>
        Three main input data formats are usually encountered when it comes to
        store hierarchical information. It's always a struggle to deal with
        those formats so I've tried to describe the most common use-cases here.
      </p>
      <p>&rarr; list of connection (csv)</p>
      <p>&rarr; list of connection (js object)</p>
      <p>&rarr; json with hierarchy</p>
      <p>
        ToDo: write some explanation on how to do the work with the
        <code>d3.hierarchy</code> and <code>d3.stratify</code> functions.
      </p>
      <p>
        Describe how the result looks like! It is all in the{" "}
        <code>HierarchyNode</code> type.
      </p>
      {/*
      //
      // The cluster function
      //
      */}
      <h2 id="cluster">
        The <code>cluster()</code> function
      </h2>
      <p>
        From this hierarchy object, we need to compute node position. This is
        possible thanks to the cluster function(). Explain how the output looks
        like = exactly the same as the hierarchy object, but now each node has a
        x and a y prop.
      </p>
      {/*
      //
      // Basic dendrogram
      //
      */}
      <h2 id="basic dendrogram">Most Basic dendrogram</h2>
      <p>
        We have a list of node in the object. We just need to map through it,
        putting a circle for each node and connecting them with segments.
      </p>
      <ChartOrSandbox
        vizName={"DendrogramBasic"}
        VizComponent={DendrogramBasicDemo}
        maxWidth={800}
        height={400}
        caption="The most basic treemap made with react and d3.js."
      />
      {/*
      //
      // horizontal dendrogram
      //
      */}
      <h2 id="horizontal dendrogram">Horizontal dendrogram</h2>
      <p>How to make it horizontal</p>
      <p>Explain how to swap coordinates</p>
      <p>
        Explain how to make smooth edges with <code>d3.linkHorizontal()</code>
      </p>
      <ChartOrSandbox
        vizName={"DendrogramHorizontal"}
        VizComponent={DendrogramHorizontalDemo}
        maxWidth={600}
        height={400}
        caption="The most basic treemap made with react and d3.js."
      />
      {/*
      //
      // Radial
      //
      */}
      <h2 id="Radial dendrogram">Radial dendrogram</h2>
      <p>Talk about first level links</p>
      <p>
        Talk about labels that need to be flipped like for the circular barplot
      </p>
      <ChartOrSandbox
        vizName={"DendrogramRadial"}
        VizComponent={DendrogramRadialDemo}
        maxWidth={600}
        height={600}
        caption="The most basic treemap made with react and d3.js."
      />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="partOfAWhole" />
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
    {type: 'leaf', name:"Mark", value: 90},
    {type: 'leaf', name:"Robert", value: 12},
    {type: 'leaf', name:"Emily", value: 34},
    ...
}
`.trim();
