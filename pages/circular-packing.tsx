import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { CircularPackingBasicDemo } from "../viz/CircularPackingBasic/CircularPackingBasicDemo";
import { CircularPackingDatasetTransitionDemo } from "../viz/CircularPackingDatasetTransition/CircularPackingDatasetTransitionDemo";
import Link from "next/link";
import { LinkAsButton } from "component/LinkAsButton";
import { CircularPacking2LevelsDemo } from "viz/CircularPacking2Levels/CircularPacking2LevelsDemo";
import { ToDoSection } from "component/UI/ToDoSection";

const graphDescription = (
  <>
    <p>
      A{" "}
      <a href="https://www.data-to-viz.com/graph/circularpacking.html">
        circular packing chart
      </a>{" "}
      displays a <b>hierarchical</b> dataset as a set of nested circles, each
      circle representing a node of the data structure. Size is usually
      proportional to a numeric variable.
    </p>
    <p>
      This page is a tutorial teaching how to create a circle pack chart with{" "}
      <code>d3.js</code> and <code>React</code>. It starts with a very basic
      version, adds some levels of nesting and finishes with usual customization
      like animating the transition between datasets.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Circular Packing chart with React"
      seoDescription="How to build a circular packing chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Circular Packing"
        description={graphDescription}
        chartType="circularPacking"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset describes a <b>hierarchy</b> using a recursive structure. It
        is similar to a <Link href="/dendrogram">dendrogram</Link> or to a{" "}
        <Link href="/treemap">treemap</Link>.
      </p>
      <p>
        Each item in this structure is called a <b>node</b>, the lowest nodes of
        the hierarchy being called <b>leaves</b>. The dataset is an object that
        has at least 3 properties: <code>name</code>, <code>value</code> and{" "}
        <code>children</code>. Children is an array of nodes that have this
        structure too.
      </p>
      <br />
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />
      {/*
      //
      // Hierarchy
      //
      */}
      <h2 id="hierarchy">Dealing with a hierarchical dataset</h2>
      <p>
        The circle packing chart belongs to the family of charts being based on
        a hierarchical dataset.
      </p>
      <p>
        Members of this family always follow the same process: the dataset is
        passed to the <code>hierarchy()</code> function of d3.js that creates a
        handy format for us.
      </p>
      <p>
        Building a <Link href="/dendrogram">dendrogram</Link> will then be
        possible thanks to the <code>cluster()</code>
        function. Building a <Link href="/treemap">treemap</Link> is then
        possible with the <code>treemap()</code>
        function. Building a circle pack will be possible with the{" "}
        <code>pack()</code>
        function.
      </p>
      <p>
        The <code>hierarchy()</code> function of d3.js is a key part of the
        process. I extensively described how it works in the{" "}
        <Link href="/dendrogram">dendrogram</Link> section and strongly advise
        to take a look at it before continuing.
      </p>
      <LinkAsButton isFilled size="sm" href="/dendrogram">
        Learn about <code>hierarchy()</code>
      </LinkAsButton>
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>CircularPacking</code> component that
        will be stored in a <code>CircularPacking.tsx</code> file. This
        component requires 3 props to render: a <code>width</code>, a{" "}
        <code>height</code>, and some <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{" "}
        <code>width</code> and <code>height</code> will be used to render an{" "}
        <code>svg</code> element in the DOM, in which we will insert the
        histogram.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{" "}
        <code>CircularPacking</code> component:
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
      // 1 level
      //
      */}
      <h2 id="1 level">Circle packing with 1️⃣ level of nesting</h2>
      <p>
        Here is a summary of the process used to build a circle pack with 1
        level of nesting:
      </p>
      <h3>&rarr; Compute circle position and radius</h3>
      <p>
        Pass the dataset to the <code>hierarchy()</code> function of d3. It
        builds a specific kind of object from it. This object can be consumed by
        the <code>pack()</code> function of d3 that computes the position and
        radius of each circle.
      </p>
      <CodeBlock code={snippetPack} />
      <p>
        For each node of the hierarchy, 3 new properties are now available:{" "}
        <code>x</code>, <code>y</code> and <code>r</code> that provide the
        coordinates and radius of each circle respectively.
      </p>
      <h3>&rarr; Render the circles with react</h3>
      <p>
        The <code>root</code> object computed above has a{" "}
        <code>.descendants()</code> method that lists all the nodes in an array.
      </p>
      <p>
        It is straightforward to <code>map</code> along those nodes. For each
        item, we can render a<code>circle</code> element following with a{" "}
        <code>text</code> element to get the following chart.
      </p>
      <br />
      <ChartOrSandbox
        vizName={"CircularPackingBasic"}
        VizComponent={CircularPackingBasicDemo}
        maxWidth={400}
        height={400}
        caption="Most basic circle packing chart built with react and d3.js. One level of nesting."
      />
      {/*
      //
      // 2 levels
      //
      */}
      <h2 id="2 levels">Circle packing with 2️⃣ levels of nesting</h2>
      <p>
        The process to follow is pretty similar to add a <b>second level</b> of
        nesting.
      </p>
      <p>
        But this time 2 loops are required. The first one will be used to draw
        the first level of nesting. The second to draw the leaves.
      </p>
      <ChartOrSandbox
        vizName={"CircularPacking2Levels"}
        VizComponent={CircularPacking2LevelsDemo}
        maxWidth={550}
        height={550}
        caption="Circle packing chart built with react and d3.js. Two levels of nesting."
      />
      {/*
      //
      // Animation
      //
      */}
      <h2 id="data transition">Dataset transition</h2>{" "}
      <p>
        The following examples explains how to transition between 2 datasets.
        Each circle smoothly goes to its new position with its new radius.
      </p>
      <p>
        This is possible thanks to the <code>react-spring</code> library that
        does the interpolation and animation. When a new dataset is passed to
        the component, the <code>hierarchy()</code> and <code>pack()</code>{" "}
        functions are triggered to compute the new position and radius of each
        node. But instead of passing this information to an usual{" "}
        <code>circle</code> or <code>text</code>
        svg element, it is passed to an animated component that looks like this:
      </p>
      <CodeBlock code={snippetAnimation} />
      <p>
        This component uses the <code>useSpring</code> hook of react spring to
        interpolate the <code>cx</code>, <code>cy</code> and <code>r</code>{" "}
        properties. Those values are passed to a special svg element (
        <code>animated.circle</code>) that does the animation.
      </p>
      <ChartOrSandbox
        vizName={"CircularPackingDatasetTransition"}
        VizComponent={CircularPackingDatasetTransitionDemo}
        maxWidth={550}
        height={550}
        caption="Animating the transition between 2 similar dataset with react and d3.js (for rendering) and react spring (for animation)."
      />
      <p>
        <b>Animation</b> in dataviz using React is a <b>big</b> topic. It's
        impossible to go in depth here! I will publish a dedicated blog post on
        the topic soon. Please <Link href="subscribe">subscribe</Link> to the
        newsletter if you want to be notified.
      </p>
      <LinkAsButton isFilled size="sm" href="/subscribe">
        Subscribe
      </LinkAsButton>
      <p>
        <br /> <br />
      </p>
      <ToDoSection text="Zoom on next level of hierarchy" />
      <ToDoSection text="Write label along circle with curve" />
      <ToDoSection text="Better dataset transition where circle keep position" />
      <p>
        <br /> <br />
      </p>
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

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type CircularPackingProps = {
  width: number;
  height: number;
  data: number[];
};

export const CircularPacking = ({ width, height, data }: CircularPackingProps) => {

  // read the data
  // compute the hierarchy format with hierarchy()
  // compute circle position with pack()
  // build the circles

  return (
    <div>
      <svg width={width} height={height}>
        // render all the <circle>
      </svg>
    </div>
  );
};
`.trim();

const snippetPack = `
// build the hierarchy object
const hierarchy = d3
  .hierarchy(data)
  .sum((d) => d.value)

// compute the 2d coordinates of nodes
const packGenerator = d3.pack()
  .size([width, height])
  .padding(4); // space between circles
const root = packGenerator(hierarchy);
`.trim();

const snippetAnimation = `
const AnimatedCircle = ({cx,cy,r,...props}) => {
  const animatedProps = useSpring({
    cx,
    cy,
    r,
  });
  return (
    <animated.circle
      {...props}
      r={animatedProps.r}
      cx={animatedProps.cx}
      cy={animatedProps.cy}
    />
  );
}
`.trim();
