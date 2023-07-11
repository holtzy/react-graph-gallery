import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { LinkAsButton } from 'component/LinkAsButton';
import { CircularPackingWithD3ForceDemo } from 'viz/CircularPackingWithD3Force/CircularPackingWithD3ForceDemo';

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{' '}
      <Link href="/circular-packing">
        introduction to circle packing with react
      </Link>{' '}
      and d3.js. You should probably understand the concepts described there
      before reading here.
    </p>
    <p>
      Instead of relying on the <code>pack()</code> function of d3.js to compute
      the best node positions, this example suggests to rely on the{' '}
      <Link href="/network-diagram">d3-force</Link> plugin to apply{' '}
      <b>physical forces</b> on each node.
    </p>
    <p>
      A code sandbox is provided for the final result, but explanations target
      what's different compared to a classic{' '}
      <Link href="/circular-packing">circular packing</Link> based on some
      concepts described in the{' '}
      <Link href="/network-diagram">network diagram</Link> section.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Circle Packing with d3-force."
      seoDescription="Example of a network diagram react component. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title="Circle Packing with d3-force"
        description={graphDescription}
        chartType="circularPacking"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>
        Here is the final plot we're trying to achieve here, together with its
        code:🙇‍♂️
      </p>
      <p>
        It is a circular packing chart where all circles represent an item of
        the dataset.
      </p>
      <ul>
        <li>
          The circle area is proportional to the <code>value</code> property of
          the data item.
        </li>
        <li>
          All circles are close to each other but <b>do not collide</b>. They
          are also attracted by the <code>y=0</code> horizontal axis, what{' '}
          <b>aligns them horizontally</b>
        </li>
      </ul>
      <p>
        To understand how this chart works, you need the concepts described in
        the Network diagram and Circle pack sections.
      </p>
      <div className="flex">
        <LinkAsButton isFilled size="sm" href="/network-chart">
          Network section
        </LinkAsButton>
        <LinkAsButton isFilled size="sm" href="/circular-packing">
          Circle Packing section
        </LinkAsButton>
      </div>
      <ChartOrSandbox
        vizName={'CircularPackingWithD3Force'}
        VizComponent={CircularPackingWithD3ForceDemo}
        maxWidth={800}
        height={700}
        caption={
          <span>
            A circle packing chart made using the d3-force plugin, with bubbles
            being attracted by the <code>y=0</code> baseline.
          </span>
        }
      />

      {/*
      //
      // Force
      //
      */}
      <h2 id="forces">
        Using <code>d3-force</code>
      </h2>
      <p>
        This example is actually a variation of a{' '}
        <Link href="/network-diagram">network diagram</Link>, but with no links
        between nodes.
      </p>
      <p>
        Some physical forces are applied to each node to compute their position
        through an iterative simulation:
      </p>
      <CodeBlock code={snippetForce} />
      <p>Here is a reminder:</p>
      <ul>
        <li>
          <b>collide</b> avoids circle overlap. It uses each node radius to make
          sure there is no collision.
        </li>
        <li>
          <b>manyBody</b> makes sure that nodes are attracted one to each other
          since the <code>strength</code> in use is positive.
        </li>
        <li>
          <b>forceCenter</b> center the whole chart on the canvas.
        </li>
        <li>
          <b>forceY</b> aligns bubble on a horizontal line.
        </li>
      </ul>

      {/*
      //
      // Bubble size
      //
      */}
      <h2 id="bubble size">Bubble Size</h2>
      <p>
        As explained in the{' '}
        <Link href="/bubble-plot">bubble chart section</Link>, it is very
        important to have the bubble <b>area</b> being proportional to the
        numeric
        <code>value</code> of the data point.
      </p>
      <p>
        It is a very{' '}
        <a
          href="https://www.data-to-viz.com/caveat/radius_or_area.html"
          target="_blank"
        >
          common mistake
        </a>{' '}
        to make the <b>radius</b> proportional to numeric value, which leads to
        a misleading visualization.
      </p>
      <p>
        Fortunately, it is very straightforward to scale the bubble
        appropriately thanks to the <code>scaleSqrt()</code> function.
      </p>
      <CodeBlock code={snippetScale} />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetForce = `
d3.forceSimulation(nodes)
  .force(
    'collide',
    d3.forceCollide().radius((node) => sizeScale(node.value) + 1)
  )
  .force('charge', d3.forceManyBody().strength(80))
  .force('center', d3.forceCenter(width / 2, height / 2))
  .force('charge', d3.forceY(0).strength(0.05))
`.trim();

const snippetScale = `
const sizeScale = scaleSqrt()
  .domain([min, max])
  .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);
`.trim();
