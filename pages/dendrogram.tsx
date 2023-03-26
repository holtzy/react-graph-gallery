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
import { Accordion } from "component/UI/Accordion";

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
      <p>
        <u>Note</u>: if your data is not formatted this way at all, don't fret!
        In the next section I explain how to deal with <b>other formats</b>.
      </p>
      {/*
      //
      // The hierarchy function
      //
      */}
      <h2 id="hierarchy">The hierarchy format or "root node"</h2>
      <p>
        A dendrogram is a <b>hierarchical layout</b>. D3.js has a lot of{" "}
        <a href="https://github.com/d3/d3-hierarchy">utility functions</a>{" "}
        allowing to deal with this kind of hierarchical data. To use those
        functions we first need to create a <b>"Root node"</b> or{" "}
        <b>"Hierarchy"</b>.
      </p>
      <p>
        But <i>what the heck is this</i>? 🤔
      </p>
      <p>
        A "root node" or "hierarchy" is a <b>javascript object</b>. It has
        almost the same shape as the input data described above. But with some
        additional properties and methods that will make our life easier. This
        data structure is typed as a{" "}
        <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3-hierarchy/index.d.ts#L29">
          HierarchyNode
        </a>
        .
      </p>
      <h3>&rarr; properties of a root node</h3>
      <p>
        This "root node" is a recursive structure of nodes as described in the
        data section above. But it has those new properties:
      </p>
      <ul>
        <li>
          <code>data</code>: associated data
        </li>
        <li>
          <code>depth</code>: 0 for the root node, and increasing by one for
          each descendant.
        </li>
        <li>
          <code>height</code>: 0 for leaf nodes, and the greatest distance from
          any descendant leaf otherwise.
        </li>
        <li>
          <code>children</code>: an array of child nodes, if any; undefined for
          leaf nodes.
        </li>
        <li>
          <code>value</code>: the summed value of the node and its descendants.
        </li>
      </ul>
      <p>
        On top of that, each node also has associated methods like{" "}
        <code>node.descendants()</code> or <code>node.links()</code> that we
        will describe later. See the complete list in the{" "}
        <a href="https://github.com/d3/d3-hierarchy">d3-hierarchy doc</a>.{" "}
      </p>
      <h3>&rarr; how to build a root node</h3>
      <p>
        If your dealing with the format describe in the previous section, you
        just have to pass it to the d3 <code>hierarchy</code> function:
      </p>
      <CodeBlock code={snippetHierarchy} />
      <p>Very convenient. If you have a different input, here is how to do:</p>
      <Accordion
        startOpen={false}
        title="My input is a list of connection in .json format"
      >
        <br />
        <p>
          Let's say you have a <b>tabular</b> format in json format. It's an
          array where each item represents a <b>node</b>. For each node, you
          have a <code>name</code> property and a <code>parent</code> property
          that provides the parent name:
        </p>
        <CodeBlock code={snippetDataTabular} />
        <p>
          In this case, you have to use the stratify function to create the
          hierarchy. This is how the syntax looks like:
        </p>
        <CodeBlock code={snippetStratify} />
        <p>
          And that's it. You have a hierarchy object and can follow the rest of
          this tutorial.
        </p>
      </Accordion>
      <Accordion
        startOpen={false}
        title="My input is a list of connection in .csv format"
      >
        <br />
        <p>
          In this case, you can use the{" "}
          <a href="https://github.com/d3/d3-dsv#csvParse">csvParse()</a>{" "}
          function of d3 to get a javascript array and use the{" "}
          <code>stratify</code> function as shown in the accordion above.{" "}
        </p>
        <CodeBlock code={snippetCsv} />
      </Accordion>
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

const snippetHierarchy = `
const hierarchy = useMemo(() => {
  return d3.hierarchy(data);
}, [data]);
`.trim();

const snippetDataTabular = `
export const dataTabular =
  [
    { "name": "Eve", "parent": "" },
    { "name": "Cain", "parent": "Eve" },
    { "name": "Seth", "parent": "Eve" },
    ...
  ]
`.trim();

const snippetStratify = `
const hierarchyGenerator = stratify()
  .id((node) => node.name)
  .parentId((node) => node.parent);

const hierarchy = hierarchyGenerator(dataTabular);
`.trim();

const snippetCsv = `
const dataTabular = d3.csvParse(text);
`.trim();
