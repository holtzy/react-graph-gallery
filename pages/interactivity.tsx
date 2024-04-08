import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';

import Link from 'next/link';
import GraphGallery from 'component/GraphGallery';
import { LinkAsButton } from 'component/LinkAsButton';

const graphDescription = (
  <>
    <p>
      <b>Interactivity</b> is a key feature of any chart displayed on the web.
      It includes <b>tooltip</b>, <b>hover effect</b>,{' '}
      <b>cross-graph interaction</b>, <b>zooming</b>, <b>panning</b> and more.
    </p>
    <p>
      Interactivity is a big topic. This section aims at giving general tips and
      tricks on the topic together with applied examples ready to be used in
      your project.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Interactivity"
      seoDescription="An overview of all the charts displayed in the react graph gallery, ready to be added in your web application."
    >
      <TitleAndDescription
        title="Interactivity"
        description={graphDescription}
        chartType="plotly"
      />
      {/*
      //
      // WIP
      //
      */}
      <h2 id="WIP">Work in Progress</h2>
      <p>This section is a work in progress. 🚧</p>
      <p>
        For now, it just lists all the charts using Interactivity in the
        gallery.
      </p>
      <p>
        But I plan to write some <b>complete tutorials</b> on this passionating
        and complicated topic. You can <Link href="/subscribe">subscribe</Link>{' '}
        to the project to know when it's ready!
      </p>
      <p>
        <br />
      </p>{' '}
      <LinkAsButton isFilled size="sm" href="/subscribe">
        Subscribe
      </LinkAsButton>
      <p>
        <br />
      </p>
      <GraphGallery
        images={[
          'streamgraph-application.gif',
          'scatterplotHoverEffect.gif',
          'histogram-dataset-transition.gif',
          'violinBoxplotTransition.png',
          'violin-bucket-size-effect.gif',
          'boxplot-violin-transition.gif',
          'barplotDatasetAnimation.gif',
          'bubble-plot-dataset-transition.gif',
          'line-chart-data-transition.gif',
          'streamgraph-offset-type-transition.gif',
          'streamgraph-hover-effect.gif',
        ]}
      />
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="general" />
      <div className="mt-20" />
    </Layout>
  );
}
