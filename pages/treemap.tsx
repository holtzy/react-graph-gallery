import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { TreemapBasicDemo } from "../viz/TreemapBasic/TreemapBasicDemo";
import { Treemap2LevelsDemo } from "../viz/Treemap2Levels/Treemap2LevelsDemo";
import { TreemapHoverEffectDemo } from "../viz/TreemapHoverEffect/TreemapHoverEffectDemo";
import Link from "next/link";
import { LinkAsButton } from "component/LinkAsButton";

const graphDescription = (
  <>
    <p>
      A <a href="https://www.data-to-viz.com/graph/treemap.html">treemap</a>{" "}
      displays a hierarchical dataset (a <i>tree</i>) as a set of{" "}
      <b>rectangles</b>. Rectangle sizes are proportional to their numeric
      value.
    </p>
    <p>
      <code>d3.js</code> has some handy functions to compute the rectangle
      positions. <code>React</code> becomes useful to render those rectangles,
      animate transitions and more. This post explains how to make those 2 tools
      work together to build a <code>Treemap</code> component.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Treemap with React"
      seoDescription="How to build a treemap with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Treemap"
        description={graphDescription}
        chartType="treemap"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{" "}
      <p>
        The dataset describes a <b>hierarchy</b> using a <b>recursive</b>{" "}
        structure. Each item in this structure is called a <b>node</b>, the
        lowest nodes of the hierarchy being called <b>leaves</b>.
      </p>
      <p>
        The dataset is an <b>object</b> that has at least 3 properties:{" "}
        <code>name</code>, <code>value</code> and <code>children</code>.
        <code>children</code> is an array of nodes that have this structure too.
      </p>
      <br />
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />
      <p>
        It's very likely that your dataset is not formatted as above <b>yet</b>.
        But don't fret, the next section will teach you how to <b>convert</b>{" "}
        it. ⬇️
      </p>
      {/*
      //
      // Data Wrangling
      //
      */}{" "}
      <div className="bg-gray-50 full-bleed mt-12">
        <div className="wrapper pb-20">
          <h2 id="reformat data">Data wrangling</h2>{" "}
          <p>
            <b>Three main input data formats</b> are usually encountered when it
            comes to store hierarchical information. It's always a struggle to
            deal with those various formats:
          </p>
          <p>&rarr; list of connection (csv)</p>
          <p>&rarr; list of connection (js object)</p>
          <p>&rarr; json with hierarchy</p>
          <p>
            I described in depth how to deal with those format in the{" "}
            <Link href="/dendrogram">dendrogram section</Link> of the gallery
            that shares the same kind of input format. Please take a look there!
          </p>
          <LinkAsButton isFilled size="sm" href="/dendrogram#hierarchy">
            Read more
          </LinkAsButton>
        </div>
      </div>
      {/*
      //
      // The hierarchy function
      //
      */}
      <h2 id="hierarchy">The hierarchy format or "root node"</h2>
      <p>
        A treemap is a <b>hierarchical layout</b>. D3.js has a lot of{" "}
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
        additional properties and methods that will make our life easier.
      </p>
      <h3>&rarr; how to build a root node</h3>
      <p>
        If your dealing with the format describe in the previous section, you
        just have to pass it to the d3 <code>hierarchy</code> function:
      </p>
      <CodeBlock code={snippetHierarchy} />
      <p>
        Note that this concept of <b>root node</b> is <b>key</b> for all the
        charts representing a hierarchy like{" "}
        <Link href="/dendrogram">dendrograms</Link>,{" "}
        <Link href="/circular-packing">circle packing</Link>,{" "}
        <Link href="/network-chart">networks</Link> and more. Please check the
        dendrogram page where I explain it in detail.
      </p>
      <LinkAsButton isFilled size="sm" href="/dendrogram#hierarchy">
        Read more
      </LinkAsButton>
      {/*
      //
      // 1 level treemap
      //
      */}
      <h2 id="1 level">Treemap with 1️⃣ level of hierarchy</h2>
      <p>
        The <code>treemap</code> function of d3.js does the biggest part of the
        job. It basically computes the position of each square on the svg area,
        returning <code>x0</code>, <code>x1</code>, <code>y0</code> and{" "}
        <code>y1</code> for each item.
      </p>
      <p>
        Once this is available, it is just a matter of building some{" "}
        <code>rect</code> and <code>text</code> elements for each rectangle.
      </p>
      <ChartOrSandbox
        vizName={"TreemapBasic"}
        VizComponent={TreemapBasicDemo}
        maxWidth={600}
        height={400}
        caption="The most basic treemap with 1 level of hierarchy made with react and d3.js."
      />
      {/*
      //
      // 2 level treemap
      //
      */}
      <h2 id="2 levels">Treemap with 2️⃣ levels of hierarchy</h2>
      <p>
        Treemaps are also handy to display nested data structure. For instance,
        let's consider a company with a CEO, several teams, and a few employees
        per team.
      </p>
      <ChartOrSandbox
        vizName={"Treemap2Levels"}
        VizComponent={Treemap2LevelsDemo}
        maxWidth={600}
        height={400}
        caption="Treemap with 2 levels of hierarchy, made with react and d3.js."
      />
      <AccordionSection title={"Hover effect"} startOpen={true}>
        <p>Dim other groups when a group is hovered over.</p>

        <ChartOrSandbox
          vizName={"TreemapHoverEffect"}
          VizComponent={TreemapHoverEffectDemo}
          maxWidth={600}
          height={400}
          caption="Hover over a group on the treemap to see the other groups fading."
        />
      </AccordionSection>
      <br />
      <br />
      <br />
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
