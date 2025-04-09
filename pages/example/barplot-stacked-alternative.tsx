import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import GraphGallery from 'component/GraphGallery';
import { BarplotStackedBasicDemo } from 'viz/BarplotStackedBasic/BarplotStackedBasicDemo';
import { BarplotStackedAlternativeDemo } from '@/viz/BarplotStackedAlternative/BarplotStackedAlternativeDemo';

const graphDescription = (
  <>
    <p>
      The{' '}
      <a href="https://www.data-to-viz.com/graph/barplot.html" target="_blank">
        stacked barplot
      </a>{' '}
      is a widely used graph, but it has its flaws: reading the evolution of
      each subgroup is nearly{' '}
      <a
        href="https://www.data-to-viz.com/graph/stackedarea.html"
        target="_blank"
      >
        impossible
      </a>
      .
    </p>
    <p>
      Recently, some members of the Tableau community proposed a{' '}
      <a
        href="https://www.flerlagetwins.com/2025/04/the-best-alternative-to-stacked-bar.html"
        target="_blank"
      >
        variation
      </a>
      : a grouped barplot with the total of each group represented as a grey
      rectangle.
    </p>
    <p>I love the idea, so here’s how to create it with React and D3.js! ❤️</p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Stacked Barplot Alternative"
      seoDescription="An alternative to the stacked barplot to more efficiently compare groups and subgroups in a dataset."
    >
      <TitleAndDescription
        title={<h1>Stacked Barplot Alternative</h1>}
        description={graphDescription}
        chartType="barplot"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="no">❌ Stacked Barplot: why not:</h2>
      <p>
        Stacked barplots lack a <b>consistent baseline</b> for comparing
        subgroups, except for the first one in each bar.
      </p>
      <p>
        As each segment is stacked on top of the previous one, it becomes harder
        to visually compare the size of subgroups across different bars. Without
        a shared baseline, differences in segment sizes can be misleading,
        especially when subgroups vary in magnitude.
      </p>
      <p>
        If you're interested in this topic, check{' '}
        <a href="https://www.data-to-viz.com/graph/stackedarea.html">
          this post about stacking
        </a>
        !
      </p>
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>
        If you’re familiar with creating a basic{' '}
        <Link href="/barplot">barplot</Link>, making this variation should be
        straightforward. It’s essentially a set of barplots drawn within the
        bars of an initial barplot! 😋
      </p>

      <ChartOrSandbox
        vizName={'BarplotStackedAlternative'}
        VizComponent={BarplotStackedAlternativeDemo}
        height={400}
        maxWidth={600}
        caption="A variation to the usual stacked barplot built with d3.js and React."
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
