import React, { useState } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { CircularPackingBasic } from "../viz/CircularPackingBasic/CircularPackingBasic";
import { data, data2 } from "../data/hierarchy-1-level-random";
import { LinkAsButton } from "../component/LinkAsButton";
import { CircularPackingAnimatedResize } from "../viz/CircularPackingAnimatedResize/CircularPackingAnimatedResize";
import { Button } from "../component/Button";
import CodeSandboxButton from "../component/CodeSandboxButton";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";

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

      <AccordionSection title={"Dataset"} startOpen={false}>
        <p>The dataset is hierarchical</p>
        <p>The dataset is hierarchical</p>
        <p>The dataset is hierarchical</p>
        <p>The dataset is hierarchical</p>
        <p>The dataset is hierarchical</p>
        <p>The dataset is hierarchical</p>
        <p>The dataset is hierarchical</p>
        <p>The dataset is hierarchical</p>
        <p>The dataset is hierarchical</p>
        <p>The dataset is hierarchical</p>
      </AccordionSection>

      <h2>Most basic circular packing with React and D3.js</h2>
      <p>
        A violin chart allows to visualize the distribution of one or several
        groups. Here, groups are spread on the X axis, when the Y axis
        represents the numeric value.
      </p>
      <div className="flex justify-center">
        <CircularPackingBasic data={data} height={500} width={500} />
      </div>
      <CodeSandboxButton vizName={"CircularPackingBasic"} />

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
