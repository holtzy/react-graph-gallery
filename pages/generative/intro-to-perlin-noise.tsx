import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import { GenArtIntroPerlinDemo } from '@/viz/GenArtIntroPerlin/GenArtIntroPerlinDemo';

const graphDescription = (
  <>
    <p>
      Perlin noise is a concept widely used in generative art. Let's discover
      what it is with 1D perlin noise and see how to build it with react.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Intro to perlin noise with React"
      seoDescription="Intro to perlin noise with React"
    >
      <TitleAndDescription
        title={<h1>Intro to Perlin noise</h1>}
        description={graphDescription}
        chartType="generative"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>Why is it useful?</p>

      <ChartOrSandbox
        vizName={'GenArtIntroPerlin'}
        VizComponent={GenArtIntroPerlinDemo}
        maxWidth={600}
        height={400}
        caption={<span>Basic Perlin noise</span>}
      />

      <p>Here is a suggestion to implement it:</p>
      <CodeBlock code={snippetCircle} />
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetCircle = `
const allCircles = groupData.map((value, i) => (
  <circle
    key={i}
    cx={
      xScale.bandwidth() / 2 -
      JITTER_WIDTH / 2 +
      Math.random() * JITTER_WIDTH
    }
    cy={yScale(value)}
    r={2}
    fill="grey"
    fillOpacity={0.3}
  />
));
`.trim();
