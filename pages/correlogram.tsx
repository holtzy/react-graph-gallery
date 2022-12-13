import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { CorrelogramBasicDemo } from "../viz/CorrelogramBasic/CorrelogramBasicDemo";
import Link from "next/link";
import { ImageGrid } from "component/UI/ImageGrid";
import { GraphLinkImage } from "component/UI/GraphLinkImage";

const graphDescription = (
  <>
    <p>
      In this blog post, we will be exploring how to build a{" "}
      <a href="https://www.data-to-viz.com/graph/correlogram.html">
        correlogram
      </a>{" "}
      with React and D3.js. A correlogram is a graphical representation of the
      <b>correlation matrix</b> for a given dataset. It is a useful tool for
      visualizing the <b>relationships</b> between different variables in a
      dataset, and can help identify potential <b>correlations</b> that may not
      be immediately obvious.
    </p>
    <p>
      Building a correlogram with React and D3.js allows us to create a highly
      interactive and customizable visualization. We will be able to use React's
      powerful <b>component-based</b> approach to build our visualization, while
      leveraging the flexibility and power of D3.js to create a dynamic and
      engaging visual representation of our data.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Correlogram with React"
      seoDescription="How to build a correlogram with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Correlogram"
        description={graphDescription}
        chartType="correlogram"
      />

      {/*
      //
      // Definition
      //
      */}
      <h2 id="definition">Correlogram = scatter plot + histogram</h2>
      <p>
        A correlogram uses <b>histograms</b> to show the distribution of each
        numeric variable on the diagonal of the matrix. It uses{" "}
        <b>scatter plots</b> to show the relationship of each pair of variable
        on every other cells.
      </p>
      <p>
        As a result, it is required to understand how to build a{" "}
        <Link href="/histogram">histogram</Link> and a{" "}
        <Link href="/scatter-plot">scatter plot</Link> component using React and
        d3.js! In this post, we will just show how to leverage those reusable
        components to build a correlogram.
      </p>
      <ImageGrid>
        <GraphLinkImage
          link={"/histogram"}
          title={"Histogram"}
          description={
            <p>Learn how to build a histogram with react and d3.js</p>
          }
          img={"histogram-basic.png"}
          alt="Picture of a simple histogram made with react and d3.js"
        />
        <GraphLinkImage
          link={"/scatter-plot"}
          title={"Scatter plot"}
          description={
            <p>Learn how to build a scatter plot with react and d3.js</p>
          }
          img={"scatterplot-basic.png"}
          alt="Picture of a simple scatter plot made with react and d3.js"
        />
      </ImageGrid>

      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset provides several <b>numeric</b> values for a set of data
        points. It can also add some <b>categorical</b> variables that can be
        added to customize the marker colors.
      </p>
      <p>
        The suggested data structure is an array of <code>object</code>, where
        each object is a data point. It can have as many numeric properties as
        needed.
      </p>
      <br />
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />

      {/*
      //
      // Basic
      //
      */}
      <h2 id="basic correlogram">Basic correlogram</h2>
      <p>
        The following correlogram is built with a set of scatterplots and a few
        histograms for the diagonal. Graphs are made with the same 2 components
        that are called multiple times.
      </p>
      <p>
        I find this react code much more readable than the pure{" "}
        <a href="https://d3-graph-gallery.com/graph/correlogram_histo.html">
          d3 alternative
        </a>
        .
      </p>
      <p></p>
      <ChartOrSandbox
        VizComponent={CorrelogramBasicDemo}
        vizName={"CorrelogramBasic"}
        maxWidth={700}
        height={700}
        caption="A correlogram built with react and d3.js. It shows the relationship between the 4 numeric variables of the famous iris dataset."
      />

      <br />
      <br />
      <br />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="correlation" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {var1: 5.1, var2: 3.5, ..., group: 'setosa'},
  {var1: 4.9, var2: 3.0, ..., group: 'setosa'},
  ...
]
`.trim();
