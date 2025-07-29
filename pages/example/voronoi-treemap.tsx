import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { VoronoiTreemapDemo } from 'viz/VoronoiTreemap/VoronoiTreemapDemo';

const graphDescription = (
  <>
    <p>
      This tutorial is an introduction to creating a Voronoi treemap with React
      and D3.js. A Voronoi treemap is a space-filling visualization that
      recursively partitions a plane into regions based on a set of points,
      where each region contains all points closer to one of the generating
      points than to any other.
    </p>
    <p>
      This example will show you how to create a basic Voronoi treemap that
      displays hierarchical data in a visually appealing way, with each cell's
      size proportional to its value.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a Voronoi treemap with React and D3.js"
      seoDescription="A step-by-step guide to build your Voronoi treemap component. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={
          <h1>
            Voronoi Treemap{' '}
            <span className="text-gray-600 font-light hidden sm:inline">
              with React and D3.js
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="treemap"
      />

      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>Here's what we're going to create:</p>
      <p>
        A Voronoi treemap is a powerful visualization that combines the
        space-filling properties of a treemap with the geometric elegance of a
        Voronoi diagram. It's particularly useful for displaying hierarchical
        data where the size of each cell represents a quantitative value.
      </p>
      <ChartOrSandbox
        vizName={'VoronoiTreemap'}
        VizComponent={VoronoiTreemapDemo}
        maxWidth={600}
        height={400}
        caption={
          <span>
            A Voronoi treemap showing hierarchical data with cell sizes
            proportional to their values.
          </span>
        }
      />

      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The dataset used for this example is a hierarchical structure where each
        node has:
      </p>
      <ul>
        <li>
          A <code>name</code> property for identification
        </li>
        <li>
          A <code>value</code> property determining the cell size
        </li>
        <li>
          Optional <code>children</code> for nested data
        </li>
      </ul>
      <CodeBlock code={snippetData} />

      {/*
      //
      // Implementation
      //
      */}
      <h2 id="implementation">Implementation</h2>
      <p>The implementation involves several key steps:</p>
      <ol>
        <li>
          Creating a Voronoi diagram using D3's <code>d3-delaunay</code>
        </li>
        <li>Recursively partitioning the space based on the data hierarchy</li>
        <li>Rendering the cells with appropriate colors and labels</li>
      </ol>
      <CodeBlock code={snippetImplementation} />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="hierarchy" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = {
  name: "root",
  value: 100,
  children: [
    {
      name: "Category A",
      value: 40,
      children: [
        { name: "A1", value: 20 },
        { name: "A2", value: 20 }
      ]
    },
    {
      name: "Category B",
      value: 60,
      children: [
        { name: "B1", value: 30 },
        { name: "B2", value: 30 }
      ]
    }
  ]
};
`.trim();

const snippetImplementation = `
import { useMemo } from 'react';
import * as d3 from 'd3';

const VoronoiTreemap = ({ data, width, height }) => {
  // Compute the Voronoi diagram
  const voronoi = useMemo(() => {
    const points = generatePoints(data, width, height);
    return d3.Delaunay.from(points).voronoi([0, 0, width, height]);
  }, [data, width, height]);

  return (
    <svg width={width} height={height}>
      {voronoi.cellPolygons().map((polygon, i) => (
        <path
          key={i}
          d={\`M\${polygon.join("L")}Z\`}
          fill={d3.interpolateRainbow(i / data.children.length)}
          stroke="white"
        />
      ))}
    </svg>
  );
};
`.trim();
