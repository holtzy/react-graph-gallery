import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";
import { LineChartBasicDemo } from "../viz/LineChartBasic/LineChartBasicDemo";
import DatavizInspirationParallaxLink from "../component/DatavizInspirationParallaxLink";
import { ResponsiveExplanationSection } from "component/ResponsiveExplanationSection";
import { ImageGrid } from "component/UI/ImageGrid";
import { GraphLinkImage } from "component/UI/GraphLinkImage";
import { graphExampleList } from "util/graphExampleList";

const graphDescription = (
  <>
    <p>
      This section does not target a specific chart type, even though timeseries
      are often represented as <Link href="/line-chart">line</Link> charts or
      <Link href="/area">area</Link> charts.
    </p>
    <p>
      Instead, it provides a tips and tricks to deal with charts that represent
      the evolution of a numeric variable. For instance, it provides hints on
      how to deal with dates, how to pan on a chart and more
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Timeseries| The React Graph Gallery"
      seoDescription="How to deal with timeseries with React and D3.js. A set of re-usable components coming with editable code and explanations."
    >
      <TitleAndDescription
        title="Timeseries"
        description={graphDescription}
        chartType="timeseries"
      />
      {/*
      //
      // Link to related section
      //
      */}
      <h2 id="chart types">Useful chart types</h2>{" "}
      <p>
        Start by linking to the line chart, area chart, stream and so on section
      </p>
      <br />
      <ImageGrid>
        <GraphLinkImage
          link={"/heatmap"}
          title={"Heatmap"}
          description={<p>Useful to show the evolution of several variables</p>}
          img={"heatmapBasic.png"}
          alt={"Picture of a simple heatmap made with react and d3.js"}
        />
      </ImageGrid>
      {/*
      //
      // The Date format
      //
      */}
      <h2 id="date format">The Date format</h2>{" "}
      <p>
        Start by linking to the line chart, area chart, stream and so on section
      </p>
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
