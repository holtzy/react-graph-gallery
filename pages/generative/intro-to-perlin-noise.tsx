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
      // Definitiion
      //
      */}
      <h2 id="Definition">What is Perlin Noise</h2>
      <p>
        Perline noise is basically a way to generate pseudo random values. They
        are at the origin of beautiful shape,generation.
      </p>
      <p>
        Honestly this video by the coding train is simply the best to understand
        how it works, so there is no reason for trying to eplain it better!
      </p>
      <iframe
        src="https://www.youtube.com/embed/Qf4dIN99e2w"
        title="Intro to perlin noise by the coding train"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>
        NOw, let's see how we can implement the most simple perlin noise example
        in react.
      </p>

      {/*
      //
      // React implementation
      //
      */}
      <h2 id="noise function">React implementation</h2>
      <p>
        There is a js library that implents perlin noise for us:{' '}
        <a href="https://github.com/jwagner/simplex-noise.js" target="_blank">
          simplex-noise
        </a>
      </p>
      <p>
        It comes with a function called <code>createNoise2D</code> that expects
        2 arguments as it is made to work with 2d perlin noise. The first
        argument is the "offset": where about you pick a noise value. If you
        pick 2 close offset values, the output values will be close too!{' '}
      </p>
      <p>
        We can pass a zero to the second argument to simulate a 1d perlin noise
        function.
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
        It is advised to call the function in a useMemo call to make sure the
        noise generatore won"t be reinstantiated and will thus keep giving the
        same values when the component rerenders.
      </p>

      {/*
      //
      // Plot 1
      //
      */}
      <h2 id="plot">Drawing the noise</h2>

      <p>
        Let's make a loop along all the pixels of our total width. This is the x
        value of our line chart.
      </p>
      <p>
        For each pixel, we will compute the related noise value. We will
        increase the x offset by 0.01. so do noise(0,0) for the first pixel.
        Then noise(0.01, 0) for the second pixel, noise(0.02, 0) for the third
        and so on. The output goes between -1 and 1 and plot it on the Y axis.
      </p>
      <p>Talk about the x offset.</p>

      <ChartOrSandbox
        vizName={'GenArtIntroPerlin'}
        VizComponent={GenArtIntroPerlinDemo}
        maxWidth={500}
        height={500}
        caption={<span>Basic Perlin noise</span>}
      />

      {/*
      //
      // Slider
      //
      */}
      <h2 id="slider">Playing with x offset</h2>

      <p>
        Let's make a loop along all the pixels of our total width. This is the x
        value of our line chart.
      </p>
      <p>
        For each pixel, we will compute the related noise value that goes
        between -1 and 1 and plot it on the Y axis.
      </p>
      <p>Talk about the x offset.</p>

      {/* <ChartOrSandbox
        vizName={'GenArtIntroPerlinSlider'}
        VizComponent={GenArtIntroPerlinSliderDemo}
        maxWidth={500}
        height={500}
        caption={<span>Basic Perlin noise</span>}
      /> */}

      <p>Here is a suggestion to implement it:</p>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}
