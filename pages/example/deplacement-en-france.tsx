import React, { useState } from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { SankeyBumpChartDemo } from 'viz/SankeyBumpChart/SankeyBumpChartDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import { Treemap } from '@/viz/TreemapFrenchTravel/Treemap';
import { modeDeTransport, Tree } from '@/viz/TreemapFrenchTravel/data';
import { stratify } from 'd3';
import * as d3 from 'd3';
import { Tabs, TabsList, TabsTrigger } from '@/component/UI/tabs';

const graphDescription = (
  <>
    <p>A quick overview of how people travel in France 🇫🇷</p>
  </>
);

export default function Home() {
  const [selectedmetric, setSelectedMetric] = useState('Distance');

  const data = modeDeTransport.children.find(
    (node) => node.name === selectedmetric
  );

  return (
    <Layout
      title="How do people travel in France"
      seoDescription="A quick overview of how people travel in France"
    >
      <TitleAndDescription
        title="How do people travel in France"
        description={graphDescription}
        chartType="sankey"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>
        If you are in a hurry, here is the final plot we're trying to achieve
        here, together with its code:🙇‍♂️
      </p>

      <Tabs defaultValue={selectedmetric} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="temps" onClick={() => setSelectedMetric('Temps')}>
            Temps
          </TabsTrigger>
          <TabsTrigger
            value="distance"
            onClick={() => setSelectedMetric('Distance')}
          >
            Distance
          </TabsTrigger>
          <TabsTrigger
            value="em"
            onClick={() => setSelectedMetric('Emissions')}
          >
            Emissions
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Treemap data={data} width={900} height={600} />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}
