import React from "react";
import { Layout } from "component/Layout";
import TitleAndDescription from "component/TitleAndDescription";
import ChartFamilySection from "component/ChartFamilySection";
import { CodeBlock } from "component/UI/CodeBlock";
import { ChartOrSandbox } from "component/ChartOrSandbox";
import Link from "next/link";
import { BarplotStackedHorizontalDemo } from "viz/BarplotStackedHorizontal/BarplotStackedHorizontalDemo";
import GraphGallery from "component/GraphGallery";
import { BarplotStackedBasicDemo } from "viz/BarplotStackedBasic/BarplotStackedBasicDemo";

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{" "}
      <Link href="/barplot">introduction to barplot with react</Link> and d3.js.
      You should probably understand the concepts described there before digging
      into <b>stacking</b>.
    </p>
    <p>
      This example shows how to represent <b>2 levels of grouping</b> in a
      barplot, resulting in a{" "}
      <a href="https://www.data-to-viz.com/graph/barplot.html">
        stacked barplot
      </a>
      . The items of the dataset are divided in <b>groups</b> (reprented as
      bars) and <b>subgroups</b> (represented as sections in each bar).
    </p>
    <p>
      A code sandbox is provided for the final result, but explanations target
      what's different compared to an usual barplot.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Vertical stacked barplot."
      seoDescription="A step-by-step guide to build a vertical stacked barplot with React and d3.js. Comes with explanation, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={<h1>Vertical Stacked Barplot</h1>}
        description={graphDescription}
        chartType="barplot"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>
        This is a <b>vertical stacked barplot</b> built using React and d3.js.
        It is very similar to the horizontal version. So very little explanation
        is provided here. Enjoy the sandbox!
      </p>
      <ChartOrSandbox
        vizName={"BarplotStackedBasic"}
        VizComponent={BarplotStackedBasicDemo}
        height={400}
        maxWidth={600}
        caption="Most basic barplot built with d3.js for scales, and react for rendering"
      />

      {/*
      //
      // Variation
      //
      */}
      <h2 id="variation">Variation</h2>
      <p>
        Check those other barplot and stacked barplot that can interest you:
      </p>
      <GraphGallery
        images={[
          "barplot-basic.png",
          "barplotDatasetAnimation.gif",
          "barplot-stacked-horizontal.png",
        ]}
      />

      {/*
      //
      // Footer
      //
      */}
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
    </Layout>
  );
}
