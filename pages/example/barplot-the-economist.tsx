import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import GraphGallery from 'component/GraphGallery';
import { BarplotStackedBasicDemo } from 'viz/BarplotStackedBasic/BarplotStackedBasicDemo';
import { BarplotTheEconomistDemo } from '@/viz/BarplotTheEconomist/BarplotTheEconomistDemo';

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{' '}
      <Link href="/barplot">introduction to barplot with react</Link> and d3.js.
    </p>
    <p>
      It shows how to transform the very basic default examples in a real life
      chart published by The Economist. You'll learn how to make a good looking
      chart, deal with inline labels, add title and footnotes.
    </p>
    <p>
      A code sandbox is provided for the final result, but explanations target
      what's different compared to an usual barplot.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="The Economist barplot reproduction."
      seoDescription="An article explaining how to make a graph that looks exactly like the Economist using React and D3.js"
    >
      <TitleAndDescription
        title={<h1>The Economist Barplot Reproduction</h1>}
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
        Here is a reproduction of a barplot made by the Economist. Once you
        understood how to build a basic <Link href="/barplot">barplot</Link>, it
        is just a matter of styling.
      </p>
      <p>
        The only additional logic is for bar labels that have a dynamic
        position, and for the title, subtitle and footnotes that have been
        added.
      </p>
      <ChartOrSandbox
        vizName={'BarplotTheEconomist'}
        VizComponent={BarplotTheEconomistDemo}
        height={550}
        maxWidth={600}
        caption="Reproduction of a barplot made by the economist."
      />

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
          'barplotDatasetAnimation.gif',
          'barplot-stacked-horizontal.png',
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
