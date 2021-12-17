import React, { useRef, useState } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { CircularPackingBasic } from "../viz/CircularPackingBasic/CircularPackingBasic";
import { data, data2 } from "../data/hierarchy-1-level-random";
import { LinkAsButton } from "../component/LinkAsButton";
import { CircularPackingAnimatedResize } from "../viz/CircularPackingAnimatedResize/CircularPackingAnimatedResize";
import { Button } from "../component/Button";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { useDimensions } from "../hook/use-dimensions";

const graphDescription = (
  <p>
    A{" "}
    <a href="https://www.data-to-viz.com/graph/circularpacking.html">
      circular packing chart
    </a>{" "}
    displays a hierarchical dataset as a set of nested circle. Nodes are
    displayed as circles. Size is usually proportional to a numeric variable.
  </p>
);

const snippet1 = `
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

export default function Home() {
  const [animData, setAnimData] = useState(data);

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

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          The dataset describes a hierarchy using a recursive structure. Each
          item in this structure is called a node, the lowest nodes of the
          hierarchy being called leaves. The dataset is an object that has at
          least 3 properties: <code>name</code>, <code>value</code> and{" "}
          <code>children</code>. Children is an array of nodes that have this
          structure too.
        </p>
        <br />
        <p>Here is a minimal example of the data structure:</p>
        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection
        title={"Most basic circular packing with React and D3.js"}
        startOpen={true}
      >
        <p>
          The process used to build a circle packing chart with d3.js is
          described more in depth in the{" "}
          <a href="https://www.d3-graph-gallery.com/circularpacking">
            d3 graph gallery
          </a>
          .
        </p>
        <h3>&rarr; Compute circle position and radius</h3>
        <p>
          Basically, the dataset is given to the <code>d3.hierarchy()</code>{" "}
          function of d3 that builds a specific kind of object from it. This
          object can be consumed by the <code>d3.pack()</code> function of d3
          that computes the position and radius of each circle.
        </p>
        <h3>&rarr; Render the circles with react</h3>
        <p>
          It is pretty straightforward to <code>map</code> along each node of
          the <code>d3.pack()</code> output. For each item, we can render a
          <code>circle</code> element following with a <code>text</code> element
          to get the following chart.
        </p>
        <br />
        <ChartOrSandbox vizName={"CircularPackingBasic"}>
          <CircularPackingBasic height={500} width={500} data={data} />
        </ChartOrSandbox>
      </AccordionSection>

      <h2>Animating dataset transition</h2>
      <p>
        The circular packing component receives a <code>data</code> props. When
        data changes, the circles update. It is possible to update this
        transition using <code>react-spring</code>.
      </p>
      <div className="flex flex-row justify-center">
        <Button onClick={() => setAnimData(data)} isFilled={animData === data}>
          Data 1
        </Button>
        <Button
          onClick={() => setAnimData(data2)}
          isFilled={animData === data2}
        >
          Data 2
        </Button>
      </div>
      <div className="flex justify-center">
        <CircularPackingAnimatedResize
          data={animData}
          height={500}
          width={500}
        />
      </div>

      <h2>
        The <code>bin()</code> function of D3.js
      </h2>
      <p>
        The bin() function of d3.js allows to split the numeric variable in
        several bins, and count how many items there are in each bin.
      </p>

      <h2>Final code</h2>
      <LinkAsButton href="https://github.com/holtzy/react-graph-gallery/tree/main/pages/viz/ViolinBasic">
        Code
      </LinkAsButton>

      <hr className="full-bleed  border bg-gray-200 my-3" />

      <ChartFamilySection chartFamily="partOfAWhole" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
