import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import { HistogramSeveralGroupsDemo } from 'viz/HistogramSeveralGroups/HistogramSeveralGroupsDemo';
import Link from 'next/link';
import { HistogramMirrorDemo } from 'viz/HistogramMirror/HistogramMirrorDemo';

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{' '}
      <Link href="histogram">introduction to histogram with react</Link> and
      d3.js. You should probably understand the concepts described there before
      reading here.
    </p>
    <p>
      This example explains how to <b>compare</b> the distribution of 2 groups
      using a<b>mirror histogram</b>. One group is displayed <b>above</b> the X
      axis, the other one
      <b>below</b>. It allows a direct comparison without having{' '}
      <b>any overlap</b>.
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
      title="How to build a mirror histogram with React and D3."
      seoDescription="A step-by-step guide to build your very own mirror histogram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={'Mirror histogram'}
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
        The distributions of <b>2 groups</b> are displayed on the same figure, 1
        group being on top and the other being below the X axis. It allows to
        compare them efficiently, with no overlap. .
      </p>
      <ChartOrSandbox
        VizComponent={HistogramMirrorDemo}
        vizName={'HistogramMirror'}
        maxWidth={700}
        height={700}
        caption={
          'A mirror histogram made with react and d3.js to compare the distribution of 2 groups in a dataset'
        }
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset used here is slightly different as{' '}
        <Link href="/histogram#data">the one</Link> used for the simple 1 group
        histogram.
      </p>
      <p>
        An <b>array</b> is used, with each object in it providing the name (
        <code>group</code> property here) and the <code>values</code> of a
        group. Note that if more than 2 items are available in the array, only
        the 2 first will be used by the component.
      </p>
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />

      {/*
      //
      // Buckets
      //
      */}
      <h2 id="buckets">Building the histogram buckets</h2>
      <p>
        The exact same logic as the one{' '}
        <Link href="/histogram#binning">used on the 1 group histogram</Link>{' '}
        must be used here. But the <code>bucketGenerator</code> must be run on
        both groups of the dataset.
      </p>
      <p>
        Once it is done we'll have use the 2 results to build the top and the
        bottom histogram charts separately.
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
const bucketGenerator = useMemo(() => {
  return d3
    .bin()
    .value((d) => d)
    .domain(xScale.domain() as [number, number])
    .thresholds(xScale.ticks(BUCKET_NUMBER));
}, [xScale]);

const bucketsTop = bucketGenerator(data[0].values);
const bucketsBottom = bucketGenerator(data[1].values);
`.trim();
