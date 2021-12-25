import React, { useState } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { CircularPackingBasic } from "../viz/CircularPackingBasic/CircularPackingBasic";
import { data, data2 } from "../data/hierarchy-1-level-random";
import { CircularPackingDatasetTransition } from "../viz/CircularPackingDatasetTransition/CircularPackingDatasetTransition";
import { Button } from "../component/Button";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";

const graphDescription = (
  <p>
    A{" "}
    <a href="https://www.data-to-viz.com/graph/circularpacking.html">
      circular packing chart
    </a>{" "}
    displays a hierarchical dataset as a set of nested circles. Nodes are
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

const snippet2 = `
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
        <ChartOrSandbox
          vizName={"CircularPackingBasic"}
          maxWidth={400}
          height={400}
          render={(dim) => (
            <CircularPackingBasic
              data={data}
              width={dim.width || 1}
              height={dim.height || 1}
            />
          )}
        />
      </AccordionSection>

      <AccordionSection title={"Animating dataset transition"} startOpen={true}>
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
          svg element, it is passed to an animated component that looks like
          this:
        </p>
        <CodeBlock code={snippet2} />
        <p>
          This component uses the <code>useSpring</code> hook of react spring to
          interpolate the <code>cx</code>, <code>cy</code> and <code>r</code>{" "}
          properties. Those values are passed to a special svg element (
          <code>animated.circle</code>) that does the animation.
        </p>

        <div className="flex flex-row justify-center mt-10">
          <Button
            onClick={() => setAnimData(data)}
            isFilled={animData === data}
            size="sm"
          >
            Data 1
          </Button>
          <Button
            onClick={() => setAnimData(data2)}
            isFilled={animData === data2}
            size="sm"
          >
            Data 2
          </Button>
        </div>
        <ChartOrSandbox
          vizName={"CircularPackingDatasetTransition"}
          maxWidth={400}
          height={400}
          render={(dim) => (
            <CircularPackingDatasetTransition
              data={animData}
              width={dim.width || 1}
              height={dim.height || 1}
            />
          )}
        />
      </AccordionSection>

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="partOfAWhole" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
