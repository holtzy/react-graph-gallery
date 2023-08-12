import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { HistogramMirrorDemo } from 'viz/HistogramMirror/HistogramMirrorDemo';
import { ScatterplotVoronoiTooltipDemo } from 'viz/ScatterplotVoronoiTooltip/ScatterplotVoronoiTooltipDemo';
import { LinkAsButton } from 'component/LinkAsButton';

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{' '}
      <Link href="scatter-plot">introduction to scatterplot with react</Link>{' '}
      and d3.js. You should probably understand the concepts described there
      before reading here.
    </p>
    <p>
      This example explains how to use an invisible{' '}
      <Link href="voronoi">Voronoi diagram</Link> in the background to detect
      the mouse <b>closest point</b> of the scatterplot.
    </p>
    <p>
      A code sandbox is provided for the final result, but explanations target
      what's different compared to an usual scatter plot.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Scatterplot tooltip with React and D3: use Voronoi to detect closest point."
      seoDescription="This post explains how to detect the closest point on a react histogram using Voronoi. Useful to show a tooltip with great performance."
    >
      <TitleAndDescription
        title={'Scatterplot tooltip: use Voronoi for closest point detection'}
        description={graphDescription}
        chartType="scatter"
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
        This is a <b>scatterplot with voronoi detection</b>. When you enter the
        chart area with your mouse, the <b>closest point</b> is found using a
        Delaunay triangulation. The corresponding circle is highlighted on the
        chart.
      </p>
      <p>
        Same concept could easily be used to add a tooltip with great
        performance.
      </p>
      <ChartOrSandbox
        VizComponent={ScatterplotVoronoiTooltipDemo}
        vizName={'ScatterplotVoronoiTooltip'}
        maxWidth={700}
        height={600}
        caption={
          'A scatterplot with tooltip. The closest point is detected using Voronoi to trigger the tooltip apparition.'
        }
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset used here is the same as for an usual{' '}
        <Link href="scatter-plot">scatterplot</Link>.
      </p>
      <p>
        It is an <b>array</b> of objects where each object is a data point. The
        object can have many properties, but at least a <code>x</code> and a{' '}
        <code>y</code> prop are needed to provide the{' '}
        <code>2d coordinates</code>.
      </p>
      <p>Here is a minimal example of the data structure:</p>
      <CodeBlock code={snippetData} />

      {/*
      //
      // Buckets
      //
      */}
      <h2 id="buckets">Building the Voronoi diagram</h2>
      <p>
        The shapes drawn in the background are called a{' '}
        <Link href="voronoi">Voronoi diagram</Link>.
      </p>
      <p>
        A voronoi diagram is a is a partition of a plane into regions called{' '}
        <b>voronoi cells</b>. A voronoi cell consists of every point in the
        plane whose distance to its linked data point is less than or equal to
        its distance to any other data point.
      </p>
      <p>
        This is very handy to detect the mouse closest point on a scatterplot!
        🔥
      </p>
      <p>
        The react graph gallery has a{' '}
        <Link href="voronoi">dedicated section</Link> on the topic. Once you
        understood how Voronoi works with d3, it is just a matter of adding axes
        to get a scatterplot with point detection.
      </p>
      <LinkAsButton href="voronoi" size="sm" isFilled>
        Voronoi section
      </LinkAsButton>

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  { x: 10, y: 10 },
  { x: 4, y: 4 },
  ...
];
`.trim();

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
