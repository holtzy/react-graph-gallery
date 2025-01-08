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
import { Metric, modeDeTransport, Tree } from '@/viz/TreemapFrenchTravel/data';
import { stratify } from 'd3';
import * as d3 from 'd3';
import { Tabs, TabsList, TabsTrigger } from '@/component/UI/tabs';

const graphDescription = (
  <>
    <p>A quick overview of how people travel in France 🇫🇷</p>
  </>
);

export default function Home() {
  const [selectedmetric, setSelectedMetric] = useState<Metric>('Distances');

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
        On commence par ce demander quel est le moyen de transport le plus
        utilisé par les francais?
      </p>
      <p>
        la réponse: la voiture! 2/3 du temps passé dans les transports se passe
        en voiture. Pour le nombre de déplacement c'est pareil.
      </p>

      <Tabs defaultValue={selectedmetric} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="temps" onClick={() => setSelectedMetric('Temps')}>
            Temps
          </TabsTrigger>
          <TabsTrigger
            value="distance"
            onClick={() => setSelectedMetric('Distances')}
          >
            Distance
          </TabsTrigger>
          <TabsTrigger
            value="em"
            onClick={() => setSelectedMetric('Emissions directes')}
          >
            Emissions
          </TabsTrigger>

          <TabsTrigger
            value="cod"
            onClick={() => setSelectedMetric('Déplacements')}
          >
            # Of Déplacements
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Treemap data={data} width={900} height={600} />

      <p>
        Par contre l'avion c'est ghetto. représente que .1% des déplacements,
        mais xx% des émissions.
      </p>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}
