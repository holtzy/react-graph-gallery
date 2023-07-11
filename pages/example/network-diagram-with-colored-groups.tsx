import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { ArcDiagramVerticalDemo } from 'viz/ArcDiagramVertical/ArcDiagramVerticalDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import { NetworkDiagramLesMiserablesDemo } from 'viz/NetworkDiagramLesMiserables/NetworkDiagramLesMiserablesDemo';

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{' '}
      <Link href="/network-diagram">
        introduction to network diagram with react
      </Link>{' '}
      and d3.js. You should probably understand the concepts described there
      before reading here, notably everything related to the{' '}
      <code>d3-force</code> plugin.
    </p>
    <p>
      This example shows how to apply the concepts of the{' '}
      <Link href="/network-diagram">general tutorial</Link> to a real dataset.
      It creates a <b>force-directed graph</b> that describes the network of
      character co-occurrence in <i>Les Misérables</i>.
    </p>
    <p>
      A code sandbox is provided for the final result, but explanations target
      what's different compared to a classic network diagram.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Force-directed Network diagram with React and D3.js."
      seoDescription="Example of a network diagram react component. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title="Force-directed Network diagram with React and D3.js"
        description={graphDescription}
        chartType="network"
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
      <p>
        In this network diagram, each node is a character of the book{' '}
        <i>Les Misérables</i>. The network chart tries to localise characters
        who often appear together close to each other.
      </p>
      <p>
        The dataset comes from this{' '}
        <a
          href="https://observablehq.com/@d3/force-directed-graph-canvas/2?collection=@d3/d3-force"
          target="_blank"
        >
          Observable version
        </a>{' '}
        that uses d3.js only.
      </p>

      <LinkAsButton isFilled size="sm" href="/network-chart">
        Network section
      </LinkAsButton>
      <ChartOrSandbox
        vizName={'NetworkDiagramLesMiserables'}
        VizComponent={NetworkDiagramLesMiserablesDemo}
        maxWidth={700}
        height={700}
        caption={
          <span>
            A network diagram made with d3.js and react. It shows the character
            co-occurence in <i>Les Misérables</i>.
          </span>
        }
      />

      {/*
      //
      // Color Palette
      //
      */}
      <h2 id="color">Color Palette</h2>
      <p>
        The only difference with the very simple network chart of the main
        <Link href="/network-diagram">network tutorial</Link> is the presence of
        a color palette used to color the nodes.
      </p>
      <p>
        Each <code>node</code> of the dataset is attributed to a{' '}
        <code>group</code>. It is thus possible to create a color scale using a
        scaleOrdinal:
      </p>
      <CodeBlock code={snippetColor} />
      <p>
        Here I am using the <code>schemeCategory10</code> color scale to avoid
        defining those color by hand.
      </p>
      <p>
        Once the color scale is ready, it is straightforward to call it for each
        node in the <code>drawNetwork()</code> function.
      </p>

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetColor = `
// List of Groups
const allGroups = [...new Set(nodes.map((d) => d.group))];

// Color scale
const colorScale = scaleOrdinal()
  .domain(allGroups)
  .range(schemeCategory10);
`.trim();
