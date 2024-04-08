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
      <b>Animation</b> is both the most <b>challenging</b> and the most{' '}
      <b>exciting</b> part of an interactive chart. Animation is like salt: use
      the right amount of it and your creation is a delight. Too much of it and
      it <b>spoils the dish</b> 🤌.
    </p>
    <p>
      There are <b>many ways</b> to animate the transition between 2 chart
      states. Here I suggest to use <code>react-spring</code> in combination
      with <code>react</code> and
      <code>d3.js</code>.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Animation"
      seoDescription="An overview of all the charts using some animation techniques in the gallery."
    >
      <TitleAndDescription
        title="Animation"
        description={graphDescription}
        chartType="animation"
      />
      {/*
      //
      // WIP
      //
      */}
      <h2 id="WIP">Work in Progress</h2>
      <p>This section is a work in progress. 🚧</p>
      <p>
        For now, it just lists all the charts using <code>react-spring</code> in
        the gallery.
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
          'histogram-dataset-transition.gif',
          'violinBoxplotTransition.png',
          'violin-bucket-size-effect.gif',
          'boxplot-violin-transition.gif',
          'barplotDatasetAnimation.gif',
          'bubble-plot-dataset-transition.gif',
          'line-chart-data-transition.gif',
          'streamgraph-offset-type-transition.gif',
        ]}
      />
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="general" />
      <div className="mt-20" />
    </Layout>
  );
}
