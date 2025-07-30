import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { ImageGrid } from 'component/UI/ImageGrid';
import { GraphLinkImage } from 'component/UI/GraphLinkImage';
import { graphExampleList } from 'util/graphExampleList';
import GraphGallery from '@/component/GraphGallery';

const graphDescription = (
  <>
    <p>
      A set of simple examples illustrating the most basic concepts behind
      generative art.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="All graphs"
      seoDescription="A set of simple examples illustrating the most basic concepts behind generative art."
    >
      <TitleAndDescription
        title="Generative art"
        description={graphDescription}
        chartType="generative"
      />

      <GraphGallery images={['GenArtIntroPerlin.webp']} />
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="correlation" />
      <div className="mt-20" />
    </Layout>
  );
}
