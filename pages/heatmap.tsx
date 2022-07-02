import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { data } from "../viz/HeatmapBasic/data";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { Heatmap as HeatmapBasic } from "../viz/HeatmapBasic/Heatmap";

const graphDescription = (
  <p>
    A <a href="https://www.data-to-viz.com/graph/heatmap.html">heatmap</a>{" "}
    displays the value of a numeric variable as a color, split in 2 dimensions.
    This section explains how to use d3 to compute the different scales that are
    needed, and how to use react to effectively render the heatmap on the
    screen.
  </p>
);

const snippet1 = `
const data = [
  { x: 'A', y: 'A', value: 12 },
  { x: 'B', y: 'A', value: 2 },
  { x: 'C', y: 'A', value: 9 }
];
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
  return (
    <Layout
      title="Heatmap with React"
      seoDescription="How to build a heatmap with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Heatmap"
        description={graphDescription}
        chartType="heatmap"
      />

      <AccordionSection title={"Dataset"} startOpen={true}>
        <p>
          The dataset is an array where each item provides information for a
          cell of the heatmap.
        </p>
        <p>
          Each item of the object requires at least a <code>value</code>{" "}
          property that is a number. This number will be used to color the cell.
        </p>
        <p>
          Each item also requires some <code>x</code> and <code>y</code>{" "}
          properties, providing the position of the cell in the 2d space. Note
          that those values are strings since anything can be used. We are
          dealing with ordinal scales here.
        </p>
        <p>
          Note that you can add any kind of information in those cell objects
          that you can use to customize the cell later on. For instance, any
          information that you would like to add in a tooltip.
        </p>
        <br />
        <p>Here is a minimal example of the data structure:</p>

        <CodeBlock code={snippet1} />
      </AccordionSection>

      <AccordionSection
        title={"Most basic heatmap with React and D3.js"}
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
        {/* <div
          style={{ marginLeft: "-50vw", left: "50%" }}
          className="bg-gray-100 w-screen relative"
        >
          <div className="flex justify-center">
            <HeatmapBasic data={data} width={900} height={700} />
          </div>
        </div> */}
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
          vizName={"HeatmapBasic"}
          maxWidth={900}
          height={400}
          render={(dim) => (
            <HeatmapBasic
              data={data}
              width={dim.width || 1}
              height={dim.height || 1}
            />
          )}
        />
      </AccordionSection>

      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="correlation" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
