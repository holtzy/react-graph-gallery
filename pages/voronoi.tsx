import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import { VoronoiBasicDemo } from 'viz/VoronoiBasic/VoronoiBasicDemo';
import Link from 'next/link';
import { VoronoiScatterOnlyDemo } from 'viz/VoronoiScatterOnly/VoronoiScatterOnlyDemo';
import { VoronoidelaunayOnlyDemo } from 'viz/VoronoidelaunayOnly/VoronoidelaunayOnlyDemo';
import { ResponsiveExplanationSection } from 'component/ResponsiveExplanationSection';
import DatavizInspirationParallaxLink from 'component/DatavizInspirationParallaxLink';
import { VoronoiClosestPointDemo } from 'viz/VoronoiClosestPoint/VoronoiClosestPointDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import { ToDoSection } from 'component/UI/ToDoSection';
import GraphGallery from 'component/GraphGallery';

const graphDescription = (
  <>
    <p>
      A{' '}
      <a href="https://en.wikipedia.org/wiki/Voronoi_diagram">
        voronoi diagram
      </a>{' '}
      is a partition of a plane into regions called <b>voronoi cells</b>. A
      voronoi cell consists of every point in the plane whose distance to its
      linked data point is less than or equal to its distance to{' '}
      <b>any other data point</b>.{' '}
    </p>
    <p>
      This page is a step-by-step guide on how to build your own voronoi diagram
      for the web, using <a href="https://reactjs.org/">React</a> and{' '}
      <a href="https://d3-graph-gallery.com">D3.js</a>.
    </p>
    <p>
      It starts by describing how the <b>data</b> should be organized and
      explains how to run and plot a <b>Delaunay triangulation</b>. Based on
      this, it explains how to build the voronoi diagram. Finally it shows how
      this can be used for real life application like for a <b>scatterplot</b>{' '}
      or to build a <b>voronoi treemap</b>.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a histogram with React and D3."
      seoDescription="A step-by-step guide to build your very own histogram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={'Voronoi Diagram'}
        description={graphDescription}
        chartType="voronoi"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        Everything starts with a set of <b>two-dimensional points</b>. Their
        coordinates are available with <code>x</code> representing the position
        on the <b>horizontal</b> axis and <code>y</code> being for the{' '}
        <b>vertical</b> axis.
      </p>
      <p>
        As a result, the dataset is pretty simple: an <code>array</code> of{' '}
        objects that looks like this:
      </p>
      <br />
      <CodeBlock code={snippetData} />
      <p>
        Note: this is the same dataset as the one used for a{' '}
        <Link href="/scatter-plot">scatterplot</Link>.
      </p>

      {/*
      //
      // 2d plane
      //
      */}
      <h2 id="2d plane">A set of two-dimensional points</h2>
      <p>
        Let's start by plotting those data points on a two-dimensional points.
        This is basically a <Link href="/scatter-plot">scatterplot</Link> except
        that we're not drawing the axes.
      </p>
      <p>
        If you're not familiar with the basic steps used in the following
        sandbox, please take a look at the{' '}
        <Link href="/scatter-plot">scatterplot</Link> section of the gallery
        that goes in deep on what's going on here.
      </p>
      <LinkAsButton isFilled size="sm" href="scatter-plot">
        Scatterplot section
      </LinkAsButton>
      <p>
        <br />
      </p>
      <p>
        You need a good understanding about <b>d3 scales</b>, how to{' '}
        <b>loop through a data</b> array to create <b>svg elements</b> and how
        to make the component <b>renders</b> them.
      </p>
      <ChartOrSandbox
        VizComponent={VoronoiScatterOnlyDemo}
        vizName={'VoronoiScatterOnly'}
        maxWidth={600}
        height={300}
        caption={
          'A voronoi diagram starts with a set of 2d coordinate points plotted on a plane.'
        }
      />

      {/*
      //
      // Delaunay
      //
      */}
      <h2 id="delaunay">Delaunay triangulation</h2>
      <p>
        The first required step to build a voronoi diagram is to run a{' '}
        <a href="https://en.wikipedia.org/wiki/Delaunay_triangulation">
          Delaunay triangulation
        </a>
        .
      </p>
      <p>
        You don't necessarily need to understand what a Delaunay triangulation
        is. But if you're interested in the topic, it will be covered in the{' '}
        <Link href="subscribe">dataviz universe</Link> newsletter soon.
      </p>
      <p>
        Fortunately, d3.js has a module called{' '}
        <a href="https://github.com/d3/d3-delaunay">d3-delaunay</a> that does
        this triangulation for us. You can import this module as follow. You can
        also read its complete doc on{' '}
        <a href="https://github.com/d3/d3-delaunay">github</a>.
      </p>
      <CodeBlock code={snippetImport} />
      <p>
        Start by creating a <code>delaunay</code> object thanks to the{' '}
        <code>Delaunay.from()</code> function. This function expects an array of
        array of numbers, so there is a tiny bit of data wrangling to do here.
      </p>
      <CodeBlock code={snippetDelaunay1} />
      <p>
        This <code>delaunay</code> object contains all the information about the
        triangulation 🎉. It also has a method called <code>render()</code> that
        provides the svg path of all the <code>adjacent triangles</code>.
      </p>
      <CodeBlock code={snippetDelaunay2} />
      <p>
        This path is provided as a string that we can pass to a{' '}
        <code>path</code> svg element as follow:
      </p>
      <CodeBlock code={snippetDelaunay3} />
      <p>
        We can now render this inside an <code>svg</code> element to get an
        overview of this <b>delaunay triangulation</b>:
      </p>
      <ChartOrSandbox
        VizComponent={VoronoidelaunayOnlyDemo}
        vizName={'VoronoidelaunayOnly'}
        maxWidth={600}
        height={300}
        caption={
          'Second step: run a Delaunay triangulation on the set of two-dimensional points.'
        }
      />

      {/*
      //
      // Voronoi
      //
      */}
      <h2 id="voronoi">Voronoi diagram</h2>
      <p>
        The Delaunay triangulation above corresponds to the <b>dual graph</b> of
        the Voronoi diagram. Basically, it means that the <b>circumcenters</b>{' '}
        of the Delaunay triangles are the <b>vertices</b> of the Voronoi
        diagram.
      </p>
      <p>
        But no worries, the <code>delaunay</code> object we built in the
        previous section has a <code>voronoi()</code> method. It computes the
        voronoi cell coordinates based on the delaunay information:
      </p>
      <CodeBlock code={snippetvoronoi} />
      <p>
        We can plot the voronoi cells using the same kind of code as for the
        delaunay triangles. Resulting in our first voronoi diagram! 🎉
      </p>
      <br />
      <ChartOrSandbox
        VizComponent={VoronoiBasicDemo}
        vizName={'VoronoiBasic'}
        maxWidth={600}
        height={300}
        caption={
          'Last step: join the circumcenters of each triangle to get the voronoi diagram.'
        }
      />

      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="voronoi" />
      {/*
      //
      // Inspiration
      //
      */}
      <DatavizInspirationParallaxLink chartId="voronoi" />

      {/*
      //
      // Closest point detection
      //
      */}
      <h2 id="closest point">Closest point detection</h2>
      <p>
        The voronoi diagram is commonly used to detect the <b>closest</b> data
        point of the mouse position. This can be pretty useful to highlight the
        closest point without having to hover <b>exactly</b> over it.
      </p>
      <p>
        In the example below, the closest dot will be highlighted with a red
        circle ⭕️ using the voronoi cells.
      </p>
      <br />
      <ChartOrSandbox
        VizComponent={VoronoiClosestPointDemo}
        vizName={'VoronoiClosestPoint'}
        maxWidth={600}
        height={300}
        caption={
          'Use the voronoi algorithm to detect the closest point of the mouse position.'
        }
      />

      {/*
      //
      // Variations
      //
      */}
      <h2 id="variations">Variations</h2>
      <p>
        A glimpse of what it is possible to do using the voronoi diagram for
        data visualization.
      </p>
      <p>Click on the overview below to get details and code.</p>
      <br />
      <GraphGallery
        images={[
          'scatterplot-tooltip-with-voronoi-for-closest-point-detection.gif',
        ]}
      />

      <ToDoSection text="Add voronoi treemap example" />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="partOfAWhole" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
export const data = [
  { x: 10, y: 10 },
  { x: 4, y: 4 },
  { x: 35, y: 90 },
  { x: 67, y: 34 },
  ...
];
`.trim();

const snippetImport = `
import { Delaunay } from "d3";
`.trim();

const snippetDelaunay1 = `
const delaunay = useMemo(() => {
  const formattedData = data.map((d) => [xScale(d.x), yScale(d.y)]);
  return Delaunay.from(formattedData);
}, []);
`.trim();

const snippetDelaunay2 = `
const delaunayPath = delaunay.render();
`.trim();

const snippetDelaunay3 = `
const allDelaunayShapes = (
  <path d={delaunayPath} stroke="grey" fill="transparent" opacity={0.2} />
);
`.trim();

const snippetvoronoi = `
const voronoi = useMemo(() => {
  return delaunay.voronoi([0, 0, width, height]);
}, [data]);
`.trim();
