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
        In the next section I explain how to deal with <b>other formats</b>. ⬇️
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
      <h3>
        &rarr; calling <code>d3.cluster()</code>
      </h3>
      <p>
        <code>d3.cluster()</code> is a function that returns a layout generator.
        It is thus a function that returns a function. There is not much to
        provide to it, except the <code>width</code> and <code>height</code> of
        the figure.
      </p>
      <CodeBlock code={snippetLayout1} />
      <p>
        The generator we have now (<code>dendrogramGenerator</code>) expect 1
        input: a <code>hierarchy</code> object that we described in the previous
        chapter.
      </p>
      <CodeBlock code={snippetLayout2} />
      <h3>
        &rarr; <code>d3.cluster()</code> output
      </h3>
      <p>
        The output is almost the same as the initial <b>hierarchy</b> object.
        But for each node we have 2 additional properties: <code>x</code> and{" "}
        <code>y</code> that are the coordinates we need to build the dendrogram!
      </p>
      {/*
      //
      // Basic dendrogram
      //
      */}
      <h2 id="basic dendrogram">Most Basic dendrogram</h2>
      <p>
        We have a list of <code>node</code> in the <code>dendrogram</code>{" "}
        object. For each, we now its position.
      </p>
      <p>
        We just need to loop through all those nodes to build circles and lines
        to make the dendrogram
      </p>
      <p>
        Fortunately, the dendrogram object has a <code>descendants()</code>{" "}
        method that list all nodes in a flat array. It is then possible to use a{" "}
        <code>map()</code> to loop through nodes. So for instance drawing edges
        looks like:
      </p>
      <CodeBlock code={snippetEdges} />
      <p>
        And the same idea goes for nodes and circles. That makes our first
        dendrogram!
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
      <p>
        You can <b>swap</b> the <code>x</code> and <code>y</code> coordinates to
        make the dendrogram <b>horizontal</b> instead of vertical.
      </p>
      <p>
        You can also create smooth edges thanks to the{" "}
        <code>d3.linkHorizontal()</code> function. The function is described in
        its{" "}
        <a href="https://github.com/d3/d3-shape#linkHorizontal">
          official documentation
        </a>
        . Basically, you need to provide an object with a <code>source</code>{" "}
        and a <code>target</code> property. The coordinates of those properties
        will be used to create the <code>d</code> attribute of an svg{" "}
        <code>path</code> element.
      </p>
      <CodeBlock code={snippetHorizontalLink} />
      <ChartOrSandbox
        vizName={"DendrogramHorizontal"}
        VizComponent={DendrogramHorizontalDemo}
        maxWidth={600}
        height={400}
        caption="Horizontal dendrogram with smooth edges made with react and d3.js."
      />
      {/*
      //
      // Radial
      //
      */}
      <h2 id="Radial dendrogram">Radial dendrogram</h2>
      <p>The radial dendrogram is a bit trickier to achieve.</p>
      <h3>&rarr; polar coordinates</h3>
      <p>
        We are dealing with polar coordinates here. As a result, the{" "}
        <code>size</code> attribute of the
        <code>layout()</code>
        function must be updated.
      </p>
      <ul>
        <li>
          The <b>first</b> item is <code>360</code>. It will define the angle
          (in degree) to follow to reach a node. 0 is on top.
        </li>
        <li>
          The second item is the <code>radius</code> of the figure. It will
          provide the distance to the center of a node in pixel.
        </li>
      </ul>
      <CodeBlock code={snippetRadialLayout} />
      <p>
        Since <code>x</code> and <code>y</code> are now describing an angle and
        a distance to the center, we can position a node using the following{" "}
        <code>transform</code> property:
      </p>
      <CodeBlock code={snippetTransform} />
      <h3>
        &rarr; Smooth edges with <code>linkRadial</code>
      </h3>
      <p>
        Edges are not horizontal anymore, so the <code>linkHorizontal</code>{" "}
        won't be helpful this time. But instead, the{" "}
        <a href="https://github.com/d3/d3-shape#linkRadial">d3.linkRadial</a>{" "}
        function does the job based on an angle and a distance.
      </p>
      <h3>&rarr; Smart labels</h3>
      <p>
        Please make sure your labels are properly oriented. It always give a bit
        of a headhache to pivot them correctly, and to control the anchoring
        appropriately. I talked about it extensively in the{" "}
        <Link href="circular-barplot">circular barplot</Link> section so please
        take a look for this matter.
      </p>
      <ChartOrSandbox
        vizName={"DendrogramRadial"}
        VizComponent={DendrogramRadialDemo}
        maxWidth={600}
        height={600}
        caption="A minimalist radial dendrogram built using d3 and react."
      />
      <p>
        <i>Note</i>: please check of the first level edges are{" "}
        <b>straight lines</b>. IMO it does not make sense to use{" "}
        <code>linkRadial</code> for the first level.
      </p>
      {/*
      //
      // Next
      //
      */}
      <h2 id="next">Coming next</h2>
      <p>There is much more that needs to be added to this tutorial.</p>
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

const snippetLayout1 = `
// Create a dendogram generator = a function that compute the position of the nodes in a hierarchy
const dendrogramGenerator = d3
  .cluster()
  .size([width, height]);
`.trim();

const snippetLayout2 = `
// use the generator on our hierarchy
const dendrogramLayout = dendrogramGenerator(hierarchy);
`.trim();

const snippetEdges = `
const allEdges = dendrogram.descendants().map((node) => {
  if (!node.parent) {
    return null;
  }
  return (
    <line
      key={"line" + node.id}
      fill="none"
      stroke="grey"
      x1={node.x}
      x2={node.parent.x}
      y1={node.y}
      y2={node.parent.y}
    />
  );
});
`.trim();

const snippetHorizontalLink = `
<path
  key={node.id}
  fill="none"
  stroke="grey"
  d={horizontalLinkGenerator({
    source: [node.parent.y, node.parent.x],
    target: [node.y, node.x],
  })}
/>
`.trim();

const snippetRadialLayout = `
const dendrogramGenerator = d3
  .cluster()
  .size([360, radius]);\

const dendrogram = dendrogramGenerator(hierarchy);
`.trim();

const snippetTransform = `
transform={"rotate(" + (node.x - 90) + ")translate(" + node.y + ")"}
`.trim();
