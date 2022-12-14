import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
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
      with React and D3.js. A correlogram is a graphical representation of the{" "}
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
        <GraphLinkImage
          link={"/bubble-plot"}
          title={"Bubble plot"}
          description={
            <p>Learn how to build a bubble plot with react and d3.js</p>
          }
          img={"bubble-plot-with-legend.png"}
          alt="Picture of a simple bubble plot with a legend made with react and d3.js"
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
        Once the 2 <Link href="/histogram">Histogram</Link> and{" "}
        <Link href="/scatter-plot">ScatterPlot</Link> components are available,
        it's just a matter of using them for <b>each pair</b> of variable in the
        dataset.
      </p>
      <p>
        We can list the variable in a <code>allVariables</code> array, and map
        twice on it. We need to render a distribution for the diagonal, and a
        scatterplot otherwise. Something like:
      </p>
      <CodeBlock code={snippetLoop} />
      <p>
        Note that <code>graphWidth</code> and <code>graphHeight</code> can
        easily be computed from the total width and height, once we know how
        many variables there are.
      </p>
      <p>
        Once the list of react nodes with all the individual charts is available
        (<code>allGraphs</code>), it just a matter of rendering them in a{" "}
        <code>div</code> with a <code>grid</code> display.
      </p>
      <CodeBlock code={snippetRender} />
      <p>
        And <i>voilà</i>, a first decent correlogram for your data analysis
        pipeline 😊. It's not perfect yet. You probably want to give more love
        to <b>axes</b> and <b>labels</b>, add <b>hover effect</b> and{" "}
        <b>tooltips</b>. But hopefully that's a good template to get started.
      </p>
      <ChartOrSandbox
        VizComponent={CorrelogramBasicDemo}
        vizName={"CorrelogramBasic"}
        maxWidth={700}
        height={700}
        caption="A correlogram built with react and d3.js. It shows the relationship between the 4 numeric variables of the famous iris dataset."
      />
      <p>
        Note: You can compare this code with the pure{" "}
        <a href="https://d3-graph-gallery.com/graph/correlogram_histo.html">
          d3 alternative
        </a>
        . I find it much more readable.
      </p>
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

const snippetLoop = `
const allGraphs = allVariables.map((yVar, i) => {
  return allVariables.map((xVar, j) => {

    // If x and y variables are the same (diagonal), use a distribution.
    if (xVar === yVar) {
      const distributionData = ... // build distribution data

      return (
        <Histogram
          width={graphWidth}
          height={graphHeight}
          data={distributionData}
          limits={[0, 8]}
        />
      );
    }

    // Scatterplot dataset
    const scatterData = ... // build scatter data

    return (
      <Scatterplot
        width={graphWidth}
        height={graphHeight}
        data={scatterData}
      />
    );
  });
});
`.trim();

const snippetRender = `
return (
  <div
    style={{
      width,
      height,
    }}
  >
    <div
      style={{
        width: boundsWidth,
        height: boundsHeight,
        display: "grid",
        gridTemplateColumns: "1fr ".repeat(allVariables.length),
        transform: ...,
      }}
    >
      {allGraphs}
    </div>
  </div>
);
`.trim();
