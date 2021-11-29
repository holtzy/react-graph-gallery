import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import SectionLogo from "../component/SectionLogo";
import { ViolinBasic } from "../viz/ViolinBasic/ViolinBasic";
import { data } from "../data/distribution-multi-groups-random";
import { LinkAsButton } from "../component/LinkAsButton";

const graphDescription = (
  <p>
    A <a href="https://www.data-to-viz.com/graph/violin.html">violin chart</a>{" "}
    displays the distribution of a numeric variable, often for several groups of
    a dataset. D3.js is used to compute a histogram with the <code>bin()</code>{" "}
    function. It then adds smoothing to it with <code>curve()</code>. React is
    finally used to render the <code>path</code>.
  </p>
);

export default function Home() {
  return (
    <Layout
      title="Violin plot with React"
      seoDescription="How to build a violin plot with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Violin plot"
        description={graphDescription}
        chartType="violin"
      />

      <h2>What are we trying to build?</h2>
      <p>
        A violin chart allows to visualize the distribution of one or several
        groups. Here, groups are spread on the X axis, when the Y axis
        represents the numeric value.
      </p>
      <div className="flex justify-center">
        <ViolinBasic data={data} height={400} width={600} />
      </div>

      <h2>The data</h2>
      <p>
        The dataset used to build a violin chart is usually an array of object.
        For each object, a <code>name</code> property provides the group name,
        and a <code>value</code> property provides the numeric value.
      </p>

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

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
