import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import GraphGallery from 'component/GraphGallery';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { BarplotStreamgraphHoverEffectDemo } from '@/viz/BarplotStreamgraphHoverEffect/BarplotStreamgraphHoverEffectDemo';

const graphDescription = (
  <>
    <p>
      This article is an addition to the <Link href="/barplot">barplot</Link>{' '}
      and <Link href="/streamgraph">Streamgraph</Link> sections of the gallery.
    </p>
    <p>
      It dives into hover effects, and implements 2 different effects. If you
      want to learn about hover effects in general, there is a{' '}
      <Link href="/course/hover-effect/introduction">
        hover effect dedicated section
      </Link>{' '}
      in the gallery.
    </p>
    <p>Now let's see how to highlight bars!</p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Barplot, Streamgraph and hover effect"
      seoDescription="How to make a barplot with 2 hover effects to highlight a bar."
    >
      <TitleAndDescription
        title={<h1>Barplot, Streamgraph and hover effect</h1>}
        description={graphDescription}
        chartType="barplot"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>
        Here is a code sandbox in case you want to jump straight into the code.
      </p>
      <p>
        Note that the gallery provides an in-depth description of the process
        leading to a <Link href="/barplot">barplot</Link>. This page will just
        highlight the differences for the vertical version!
      </p>

      <ChartOrSandbox
        vizName={'BarplotStreamgraphHoverEffect'}
        VizComponent={BarplotStreamgraphHoverEffectDemo}
        height={400}
        maxWidth={1000}
        caption="Basic vertical barplot made with React and D3.js"
      />

      {/*
      //
      // Deal with vertical rectangles
      //
      */}
      <h2 id="explanation">How it works</h2>
      <p>There are several ways to implement a hover effect.</p>
      <p>
        In this example, two charts are linked together using a shared state.
        This shared state keeps track of which group is currently highlighted.
        Both charts can update it via an <code>updateHighlightedGroup</code>{' '}
        function, and they also read from it through the{' '}
        <code>highlightedGroup</code> prop.
      </p>
      <p>
        This approach is explained in detail in the "hover effect" section of
        the gallery!
      </p>

      {/*
      //
      // Variation
      //
      */}
      <h2 id="variation">Variation</h2>
      <p>
        Check those other barplot and stacked barplot that can interest you:
      </p>
      <GraphGallery
        images={[
          'barplot-basic.png',
          'streamgraph-hover-effect.gif',
          'barplotDatasetAnimation.gif',
          'barplot-stacked-horizontal.png',
          'barplot-the-economist.png',
          'streamgraph-application.gif',
        ]}
      />

      {/*
      //
      // Footer
      //
      */}
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
    </Layout>
  );
}
