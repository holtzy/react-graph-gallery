import React from "react";
import { Layout } from "component/Layout";
import TitleAndDescription from "component/TitleAndDescription";
import ChartFamilySection from "component/ChartFamilySection";
import { CodeBlock } from "component/UI/CodeBlock";
import { ChartOrSandbox } from "component/ChartOrSandbox";
import Link from "next/link";
import { BarplotDatasetTransitionDemo } from "viz/BarplotDatasetTransition/BarplotDatasetTransitionDemo";
import { BarplotStackedHorizontalDemo } from "viz/BarplotStackedHorizontal/BarplotStackedHorizontalDemo";
import GraphGallery from "component/GraphGallery";

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
      title="Horizontal stacked barplot."
      seoDescription="A step-by-step guide to build a horizontal stacked barplot with React and d3.js. Comes with explanation, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={<h1>Horizontal Stacked Barplot</h1>}
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
        This is a <b>stacked barplot</b> built using React and d3.js. The dummy
        dataset provides information about how much my friends spent the last
        month. The people are the <b>group</b> here. Each <b>bar</b> represents
        a group.
      </p>
      <p>
        A <b>second level</b> of grouping is available. We know if the money was
        spent on travel, food or beer. It is possible to represent this
        additional amount of info using a process called <b>stacking</b>.
      </p>
      <ChartOrSandbox
        vizName={"BarplotStackedHorizontal"}
        VizComponent={BarplotStackedHorizontalDemo}
        height={500}
        maxWidth={600}
        caption="A horizontal stacked barplot built with d3.js for scales, and react for rendering"
      />
      <p>Now, let's see how to implement such a graph.</p>
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        There are several ways to store this information in javascript. I
        suggest an <b>array of object</b> where each object provides the{" "}
        <code>value</code>
        of 1 specific expense, with the <code>group</code> (friend name) and the{" "}
        <code>subgroup</code> (category of expense).
      </p>
      <CodeBlock code={snippetData} />

      {/*
      //
      // Animation
      //
      */}
      <h2 id="stacking">Stacking</h2>
      <p>
        The trickiest part of the stacked barplot implementation is the{" "}
        <b>stacking</b> step.
      </p>
      <p>
        Subgroups are displayed one next to each other. We need to compute their
        positions on the X axis. Fortunately <code>d3.js</code> is here to the
        rescue with a <code>d3.stack()</code> function.
      </p>
      <h3>&rarr; Build a stack generator</h3>
      <p>
        <code>d3.stack()</code> constructs a <b>stack generator</b>. This stack
        generator is a function that takes a list of group names and will stack
        the data for each item.
      </p>
      <p>This is how it can be applied to our dataset:</p>
      <CodeBlock code={snippet2} />
      <h3>&rarr; Use the generator</h3>
      <p>
        Now that this stack generator is available, we just have to run it on
        our list of group names to get the stacked values:
      </p>
      <CodeBlock code={snippet3} />
      <h3>&rarr; Output</h3>
      <p>
        The output has kind of an usual shape and it's important to understand
        how it's formatted. It's an array with the same length than the initial
        dataset. Once more, each item is linked to a positon on the x axis.
      </p>
      <p>
        Each item is an array of length 2, associated with a specific series.
        This is a mess to explain.
      </p>
      <CodeBlock code={snippetStackedSeries} />

      {/*
      //
      // Rendering
      //
      */}
      <h2 id="rendering">Rendering</h2>
      <p>
        Once you get the <b>stacked data</b> above, rendering the chart is
        business as usual. You can loop through the object and plot a{" "}
        <code>rect</code> for each item.
      </p>
      <ChartOrSandbox
        vizName={"BarplotStackedHorizontal"}
        VizComponent={BarplotStackedHorizontalDemo}
        height={500}
        maxWidth={600}
        caption="A horizontal stacked barplot built with d3.js for scales, and react for rendering"
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
          "barplot-stacked-vertical.png",
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
const snippetData = `
export const data = [
  {group:"Mark", subgroup: "travel",  value: 90},
  {group:"Mark", subgroup: "food",  value: 23},
  {group:"Mark", subgroup: "beer",  value: 14},
  ...
]
`.trim();

const snippet2 = `
// You need the list of subgroups
const subGroups = ['travel', 'beer', 'food']

// Creates the stacking function
const stackGenerator = d3
  .stack<string>()
  .keys(subGroups)
  .value((d) => data.filter((item) => item.group === d)[0].value); // This is the accessor function: how to retrieve all values for a group
`.trim();

const snippet3 = `
// Use the stack generator to stack the data in each group
const series = stackGenerator(groups);
`.trim();

const snippetStackedSeries = `
[
  // Subgroup 1 (travel)
  [
    [0, 90, data: 'Mark'], // subgroup travel goes from x=0 to x=90 for Mark
    [0, 12, data: 'Robert'],
    [0, 34, data: 'Emily'],
    ...
  ],
  // Subgroup 2 (food)
  [
    [90, 180, data: 'Mark'], // subgroup food goes from x=90 to x=180 for Mark
    [12, 24, data: 'Robert'],
    [34, 68, data: 'Emily'],
    ...
  ]
]
`.trim();
