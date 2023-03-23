import React from "react";
import { Layout } from "component/Layout";
import TitleAndDescription from "component/TitleAndDescription";
import ChartFamilySection from "component/ChartFamilySection";
import { CodeBlock } from "component/UI/CodeBlock";
import { ChartOrSandbox } from "component/ChartOrSandbox";
import { HistogramSeveralGroupsDemo } from "viz/HistogramSeveralGroups/HistogramSeveralGroupsDemo";
import Link from "next/link";

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{" "}
      <Link href="histogram">introduction to histogram with react</Link> and
      d3.js. You should probably understand the concepts described there before
      reading here.
    </p>
    <p>
      This example explains how to plot several groups on the <b>same</b>{" "}
      histogram, by <b>overlapping</b> them on the same X axis. It can be useful
      to <b>compare the distribution</b> of several items in a dataset.
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
      title="How to build a histogram with React and D3."
      seoDescription="A step-by-step guide to build your very own histogram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={
          <h1>
            Histogram{" "}
            <span className="text-gray-600 font-light hidden sm:inline">
              with several groups
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="histogram"
        showSectionLink
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>If you are in a hurry, this is what we're trying to achieve here.🙇‍♂️</p>
      <p>
        The distribution of <b>several groups</b> are displayed on the same
        figure, allowing to easily compare them. Please note that this kind of
        visual works well when there is a clear distinction between groups.
        Otherwise, bars will overlap each other resulting in an{" "}
        <a href="https://www.data-to-viz.com/graph/histogram.html">
          unreadable chart
        </a>
        .
      </p>
      <ChartOrSandbox
        VizComponent={HistogramSeveralGroupsDemo}
        vizName={"HistogramSeveralGroups"}
        maxWidth={700}
        height={300}
        caption={
          "Histogram representing the distribution of 3 groups in a dataset. Made with react (rendering) and d3.js (scales)"
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
      // Buckets
      //
      */}
      <h2 id="buckets">Building the histogram buckets</h2>
      <p>
        The exact same logic as the one{" "}
        <Link href="/histogram#binning">used on the 1 group histogram</Link>{" "}
        must be used here. But the <code>bucketGenerator</code> must be run on
        each group of the dataset.
      </p>
      <p>
        Once it is done we'll have to <code>map</code> twice to render the
        rectangles. Once for each group, and a second time for each bar in the
        group.
      </p>
      <CodeBlock code={snippetBucket} />

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

const snippetBucket = `
// Create a function that creates buckets from a blob of data
const bucketGenerator = useMemo(() => {
  return d3
    .bin()
    .value((d) => d)
    .domain(xScale.domain())
    .thresholds(xScale.ticks(BUCKET_NUMBER));
}, [xScale]);

// Use the function for all groups of the dataset, one by one
// The result is an array with bucket details of each group
const groupBuckets = useMemo(() => {
  return data.map((group) => {
    return { group, buckets: bucketGenerator(group.values) };
  });
}, [data]);

// render the rects: group by group, bar by bar
const allRects = groupBuckets.map((group, i) =>
  group.buckets.map((bucket, j) => (
    <rect
      key={i + "_" + j}
      fill={colorScale(group.group)}
      opacity={0.7}
      x={xScale(bucket.x0) + BUCKET_PADDING / 2}
      width={xScale(bucket.x1) - xScale(bucket.x0) - BUCKET_PADDING}
      y={yScale(bucket.length)}
      height={boundsHeight - yScale(bucket.length)}
    />
  ))
);

`.trim();
