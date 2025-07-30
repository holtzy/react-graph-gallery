import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import { GenArtPerlin1DAnimationDemo } from '@/viz/GenArtPerlin1DAnimation/GenArtPerlin1DAnimationDemo';

const graphDescription = (
  <>
    <p>
      This example animates 1D Perlin noise, creating a smoothly evolving line
      chart. The offset is incremented at each animation frame, making the
      pattern move organically—perfect for generative art.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Animated 1D Perlin Noise with React"
      seoDescription="Animated 1D Perlin Noise with React"
    >
      <TitleAndDescription
        title={<h1>Animated 1D Perlin Noise</h1>}
        description={graphDescription}
        chartType="generative"
      />

      <h2 id="animation">Animated Perlin Noise</h2>
      <p>
        This chart visualizes 1D Perlin noise, but unlike the static version,
        the offset is automatically incremented at each animation frame. This
        creates a dynamic, flowing effect—ideal for generative art and creative
        coding.
      </p>
      <p>
        The animation is achieved by updating the x-offset in the noise function
        on every frame, causing the line to move smoothly across the canvas.
      </p>

      <ChartOrSandbox
        vizName={'GenArtPerlin1DAnimation'}
        VizComponent={GenArtPerlin1DAnimationDemo}
        maxWidth={500}
        height={500}
        caption={<span>Animated 1D Perlin noise visualization</span>}
      />

      <p>Here’s a code snippet showing the core animation logic:</p>
      <CodeBlock
        code={`
const offsetRef = useRef(0);
useEffect(() => {
  function draw() {
    // ... drawing logic ...
    offsetRef.current += 0.01; // Animate offset
    requestAnimationFrame(draw);
  }
  draw();
  return () => cancelAnimationFrame(draw);
}, [/* dependencies */]);
        `.trim()}
      />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}
