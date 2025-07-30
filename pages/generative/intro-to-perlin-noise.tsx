import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import { GenArtIntroPerlinDemo } from '@/viz/GenArtIntroPerlin/GenArtIntroPerlinDemo';
import { GenArtIntroPerlinSliderDemo } from '@/viz/GenArtIntroPerlinSlider/GenArtIntroPerlinSliderDemo';

const graphDescription = (
  <>
    <p>
      Perlin noise is a foundational concept in generative art, enabling the
      creation of organic, natural-looking randomness. Let’s explore what Perlin
      noise is, how it works in one dimension, and how you can use it in React.
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
      // Definitiion
      //
      */}
      <h2 id="Definition">What is Perlin Noise?</h2>
      <p>
        Perlin noise is a technique for generating smooth, pseudo-random values.
        It’s the secret behind many beautiful, naturally varying shapes and
        textures in generative art and computer graphics.
      </p>
      <p>
        If you want a fantastic introduction, check out this video by The Coding
        Train—it explains Perlin noise better than words alone ever could!
      </p>
      <iframe
        src="https://www.youtube.com/embed/Qf4dIN99e2w"
        title="Intro to perlin noise by the coding train"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>
        Now, let’s see how to implement a simple Perlin noise example in React.
      </p>

      {/*
      //
      // React implementation
      //
      */}
      <h2 id="noise function">React Implementation</h2>
      <p>
        There’s a handy JavaScript library for Perlin noise called{' '}
        <a href="https://github.com/jwagner/simplex-noise.js" target="_blank">
          simplex-noise
        </a>
        .
      </p>
      <p>
        This library provides a <code>createNoise2D</code> function, which
        generates 2D Perlin noise. The first argument is the “offset”—the
        position where you sample the noise. If you use two nearby offsets, the
        resulting values will also be close, creating smooth transitions.
      </p>
      <p>
        To simulate 1D Perlin noise, simply pass zero as the second argument.
      </p>
      <CodeBlock
        code={`
const noise = createNoise2D();

noise(4, 0)       // returns 0.5
noise(4.00001, 0) // returns 0.5001

noise(10, 0)      // returns -0.4
`.trim()}
      />

      <p>
        For best results, create the noise generator inside a{' '}
        <code>useMemo</code> hook. This ensures the generator isn’t recreated on
        every render, so you get consistent noise values each time your
        component updates.
      </p>

      {/*
      //
      // Plot 1
      //
      */}
      <h2 id="plot">Visualizing Perlin Noise</h2>
      <p>
        Let’s loop through every pixel along the width of our chart—these will
        be our x-values.
      </p>
      <p>
        For each pixel, we’ll calculate the corresponding noise value by
        incrementing the x offset by 0.01 each time. For example:{' '}
        <code>noise(0, 0)</code> for the first pixel,{' '}
        <code>noise(0.01, 0)</code> for the next, <code>noise(0.02, 0)</code>{' '}
        for the third, and so on. The output ranges from -1 to 1, which we’ll
        plot on the y-axis.
      </p>
      <p>
        (Tip: Experiment with the x offset to see how it affects the smoothness
        of the noise!)
      </p>

      <ChartOrSandbox
        vizName={'GenArtIntroPerlin'}
        VizComponent={GenArtIntroPerlinDemo}
        maxWidth={500}
        height={500}
        caption={<span>Simple Perlin noise visualization</span>}
      />

      {/*
      //
      // Slider
      //
      */}
      <h2 id="slider">Play with the X Offset</h2>
      <p>
        Now, let’s add some interactivity! We’ll again loop through all the
        pixels along the width, using each as an x-value for our line chart.
      </p>
      <p>
        For each pixel, we’ll compute its noise value (between -1 and 1) and
        plot it on the y-axis. Try adjusting the x offset to see how the pattern
        shifts and evolves.
      </p>
      <p>
        (Notice how changing the x offset changes the “texture” of the
        noise—this is a powerful tool for generative art!)
      </p>

      <ChartOrSandbox
        vizName={'GenArtIntroPerlinSlider'}
        VizComponent={GenArtIntroPerlinSliderDemo}
        maxWidth={500}
        height={500}
        caption={<span>Basic Perlin noise</span>}
      />

      <p>Here’s a suggestion for how you might implement this:</p>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}
