import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { SankeyBumpChartDemo } from 'viz/SankeyBumpChart/SankeyBumpChartDemo';
import { LinkAsButton } from 'component/LinkAsButton';

const graphDescription = (
  <>
    <p>A Sankey bump chart is a variation around the bump chart</p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a vertical arc diagram with React and D3.js."
      seoDescription="A step-by-step guide to build an arc diagram. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title="Sankey Bump Chart"
        description={graphDescription}
        chartType="sankey"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>
        If you are in a hurry, here is the final plot we're trying to achieve
        here, together with its code:🙇‍♂️
      </p>
      <p>TODO</p>

      <LinkAsButton isFilled size="sm" href="/sankey">
        Sankey Diagram section
      </LinkAsButton>

      <ChartOrSandbox
        vizName={'SankeyBumpChart'}
        VizComponent={SankeyBumpChartDemo}
        maxWidth={500}
        height={500}
        caption="A Sankey Bump chart"
      />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}
