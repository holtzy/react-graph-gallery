import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { LineChartSyncCursorDemo } from 'viz/LineChartSyncCursor/LineChartSyncCursorDemo';
import { LineChartDualYAxisDemo } from '@/viz/LineChartDualYAxis/LineChartDualYAxisDemo';

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{' '}
      <Link href="/line-chart">introduction to line chart with react</Link> and
      d3.js.
    </p>
    <p>It explains why the dual Y axis should be avoided</p>
  </>
);

export default function PostDualY() {
  return (
    <Layout title="Dual Y Axis: run away" seoDescription="TODO">
      <TitleAndDescription
        title={<h1>Dual Y Axis: run away</h1>}
        description={graphDescription}
        chartType="line"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>If you are in a hurry, this is what we're trying to achieve here.🙇‍♂️</p>
      <p>
        Two line charts are displayed one next to each other. It shows the
        evolution of 2 numeric valriables.
      </p>
      <p>
        Hovering over a chart will display a <b>cursor</b> that is synced with
        the other chart. This helps finding a relationship between them.
      </p>
      <ChartOrSandbox
        vizName={'LineChartDualYAxis'}
        VizComponent={LineChartDualYAxisDemo}
        height={600}
        maxWidth={900}
        caption="Hover over a chart to see a cursor on both of them, easing the time comparison."
      />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}
