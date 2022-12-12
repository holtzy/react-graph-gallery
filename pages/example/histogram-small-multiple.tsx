import React from "react";
import { Layout } from "component/Layout";
import TitleAndDescription from "component/TitleAndDescription";
import ChartFamilySection from "component/ChartFamilySection";
import { CodeBlock } from "component/UI/CodeBlock";
import { ChartOrSandbox } from "component/ChartOrSandbox";
import { HistogramSeveralGroupsDemo } from "viz/HistogramSeveralGroups/HistogramSeveralGroupsDemo";
import Link from "next/link";
import { HistogramSeveralGroupsSplitPanelDemo } from "viz/HistogramSeveralGroupsSplitPanel/HistogramSeveralGroupsSplitPanelDemo";

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{" "}
      <Link href="histogram">introduction to histogram with react</Link> and
      d3.js. You should probably understand the concepts described there before
      reading here.
    </p>
    <p>
      This example explains how to plot the distribution of{" "}
      <b>several groups</b>, each distribution being drawn on its own pannel.
      This dataviz technique is called{" "}
      <a href="https://medium.com/nightingale/getting-started-with-small-multiples-an-underused-but-powerful-form-of-data-viz-3e0a8f8139dc">
        small multiples
      </a>
      . It can be useful to <b>compare the distribution</b> of several items in
      a dataset.
    </p>
    <p>
      A code sandbox is provided for the final result, but explanations target
      what's different compared to an usual histogram.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a small multiple histogram with React and D3 to show the distribution of several groups."
      seoDescription="A step-by-step guide to build your very own small multiple histogram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={
          <h1>
            Histogram{" "}
            <span className="text-gray-600 font-light hidden sm:inline">
              with small multiples
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="histogram"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>If you are in a hurry, this is what we're trying to achieve here.🙇‍♂️</p>
      <p>
        The distribution of <b>several groups</b> are displayed, one on each
        panel of the graphing window. It allows to <b>compare</b> the
        distributions.
      </p>
      <p>
        Note that this works even if groups have very <b>similar</b>{" "}
        distributions as the bars won't overlap each other. It is thus a very
        good alternative to the{" "}
        <Link href="example/histogram-with-several-groups">
          histogram with multiple groups
        </Link>{" "}
        that would get unreadable in this condition.
      </p>
      <ChartOrSandbox
        VizComponent={HistogramSeveralGroupsSplitPanelDemo}
        vizName={"HistogramSeveralGroupsSplitPanelDemo"}
        maxWidth={600}
        height={600}
        caption={
          "Histogram representing the distribution of 4 groups in a dataset using the small multiple display. Made with react (rendering) and d3.js (scales)"
        }
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset used here is slightly different as{" "}
        <Link href="/histogram#data">the one</Link> used for the simple 1 group
        histogram.
      </p>
      <p>
        An <b>array</b> is used, with each object in it providing the name (
        <code>group</code> property here) and the <code>values</code> of a
        group.
      </p>
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />
      {/*
      //
      // Color scale
      //
      */}
      <h2 id="color scale">Color scale</h2>
      <p>
        There is a finite number of groups here. We need to assign a specific
        color to each group. This is called an <b>ordinal</b> scale and is
        implemented in the d3 <code>scaleOrdinal</code> function.
      </p>
      <p>
        What's needed here is thus a list of colors to use (the{" "}
        <code>range</code>) and a list of group names: the <code>domain</code>.
      </p>
      <p>To put it in a nutshell, that's how the color scale is implemented:</p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the svg <code>circle</code>, but it's react that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{" "}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>
      {/*
      //
      // Rendering
      //
      */}
      <h2 id="rendering">Rendering</h2>
      <p>
        The <code>Histogram</code> component used to render each sub-panel is
        almost exactly the one presented in the{" "}
        <Link href="/histogram">histogram section</Link> of the gallery.
      </p>
      <p>
        The only difference is that it receives 2 new properties. The{" "}
        <code>color</code> prop is computed in the parent component using the
        logic described above. The <code>xRange</code> prop is necessary to make
        sure all histograms have the same x axis, allowing to compare them
        efficiently.
      </p>
      <p>
        Now, we just need to call the <code>Histogram</code> component for each
        group of the dataset and render tham in a <code>grid</code> layout as
        follow:
      </p>
      <CodeBlock code={snippetGrid} />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {
    group: "A",
    values: [0, 0, 2, 2, 2, 0]
  },
  {
    group: "B",
    values: [0, 0, 2, 2, 2, 0]
  },
  ...
];`.trim();

const snippetSkeleton = `
// List of arbitrary colors
const COLORS = ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"];

// List of all group names
const allGroups = data.map((group) => group.group);

// Color scale
const colorScale = d3.scaleOrdinal<string>()
  .domain(allGroups)
  .range(COLORS);
`.trim();

const snippetGrid = `
export const Histogram = ({ width, height, data }: HistogramProps) => {
  const allGroups = data.map((group) => group.group);
  const colorScale = d3.scaleOrdinal<string>().domain(allGroups).range(COLORS);

  const maxPerGroup = data.map((group) => Math.max(...group.values));
  const max = Math.max(...maxPerGroup);

  const numberOfColumn = 2;
  const numberOfRow = Math.ceil(allGroups.length / numberOfColumn);

  return (
    <div
      style={{
        width,
        height,
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      }}
    >
      {data.map((group, i) => (
        <SingleHistogram
          key={i}
          width={width / numberOfColumn}
          height={height / numberOfRow}
          color={colorScale(group.group)}
          xRange={[0, max]}
          data={group.values}
        />
      ))}
    </div>
  );
};
`.trim();
