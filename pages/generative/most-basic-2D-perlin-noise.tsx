import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import { GenArtPerlin1DAnimationDemo } from '@/viz/GenArtPerlin1DAnimation/GenArtPerlin1DAnimationDemo';
import { GenArtPerlin2DMostBasicDemo } from '@/viz/GenArtPerlin2DMostBasic/GenArtPerlin2DMostBasicDemo';

const graphDescription = (
  <>
    <p>Most basic 2d perlin noise</p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Most basic 2D Perline Noise"
      seoDescription="Most basic 2D Perline Noise"
    >
      <TitleAndDescription
        title={<h1>Most basic 2D Perline Noise</h1>}
        description={graphDescription}
        chartType="generative"
      />

      <h2 id="plot and code">Plot and code</h2>

      <ChartOrSandbox
        vizName={'GenArtPerlin2DMostBasic'}
        VizComponent={GenArtPerlin2DMostBasicDemo}
        maxWidth={500}
        height={500}
        caption={<span>Animated 1D Perlin noise visualization</span>}
      />

      <p>Here’s a code snippet showing the core animation logic:</p>
      <CodeBlock
        code={`
const offsetRef = useRef(0);

        `.trim()}
      />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}
