import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { SankeyBumpChartDemo } from 'viz/SankeyBumpChart/SankeyBumpChartDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import { Treemap } from '@/viz/TreemapFrenchTravel/Treemap';
import { data, rawData } from '@/viz/TreemapFrenchTravel/data';
import { stratify } from 'd3';

const graphDescription = (
  <>
    <p>A quick overview of how people travel in France 🇫🇷</p>
  </>
);

export default function Home() {
  const groups = ['Etudes', 'Professionnel', 'Vacances'];
  const target = 'Temps';

  const mainDataSelection = rawData['Motifs de déplacement'];
  console.log('mainDataSelection', mainDataSelection);

  const selectedData = Object.keys(mainDataSelection).map((key) => {
    return {
      parent: 'Temps',
      name: key,
      value: Number(mainDataSelection[key]['Temps'].replace('%', '')),
    };
  });
  console.log('selectedData', selectedData);

  const hierarchyBuilder = stratify()
    .id((d) => d.name)
    .parentId((d) => d.parent);
  const hierarchy = hierarchyBuilder([
    { parent: undefined, name: 'Temps' },
    ...selectedData,
  ]);

  console.log(hierarchy);

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

      <Treemap data={hierarchy} width={900} height={600} />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}
