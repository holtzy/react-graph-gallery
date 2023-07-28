import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import Link from 'next/link';
import DatavizInspirationParallaxLink from '../component/DatavizInspirationParallaxLink';
import { ResponsiveExplanationSection } from 'component/ResponsiveExplanationSection';
import { LinkAsButton } from 'component/LinkAsButton';
import { ConnectedScatterplotBasicDemo } from 'viz/ConnectedScatterplotBasic/ConnectedScatterplotBasicDemo';
import { ToDoSection } from 'component/UI/ToDoSection';

const graphDescription = (
  <>
    <p>
      A{' '}
      <a href="https://www.data-to-viz.com/graph/connectedscatter.html">
        connected scatterplot
      </a>{' '}
      displays the evolution of a numeric variable. Data points are represented
      by a <b>dot</b> and connected with straight line <b>segments</b>. A
      variation of the connected scatterplot allows to study the evolution of{' '}
      <b>2 numeric variables</b> together.
    </p>
    <p>
      This page explains how to build a connected scatterplot using{' '}
      <code>react</code> and
      <code>d3.js</code>. It is highly connected with the{' '}
      <Link href="line-chart">line chart</Link> section of the gallery but
      provides further information concerning connected scatterplot specific
      features.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Connected scatterplot with React and D3.js"
      seoDescription="How to build a connected scatterplot with React and D3.js. A set of re-usable components coming with editable code and explanations."
    >
      <TitleAndDescription
        title="Connected Scatterplot"
        description={graphDescription}
        chartType="connectedScatter"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>{' '}
      <p>
        The dataset required to build a connected scatterplot is the same as for
        a <Link href="line-chart">line chart</Link>. It is usually an array
        where each item is an object providing the <code>x</code> and the{' '}
        <code>y</code> values of the data point.
      </p>
      <br />
      <p>Here is a minimal example:</p>
      <CodeBlock code={snippetData} />
      <p>
        <u>Note</u>: if your data is in <code>.csv</code> format, you can
        translate it thanks to the <code>d3.csv()</code> function as suggested{' '}
        <a href="https://d3-graph-gallery.com/graph/line_basic.html">here</a>.
      </p>
      <p>
        <u>Note</u>: a line chart is often made to represent <b>time</b>. If
        your <code>x</code> property is a <b>date</b>, please visit the{' '}
        <Link href="/timeseries">timeseries</Link> section.
      </p>
      <LinkAsButton href="/timeseries" size="sm" isFilled>
        Timeseries section
      </LinkAsButton>
      {/*
      //
      // Skeleton
      //
      */}
      <h2 id="skeleton">Component skeleton</h2>
      <p>
        The goal here is to create a <code>ConnectedScatterplot</code> component
        that will be stored in a <code>ConnectedScatterplot.tsx</code> file.
        This component requires 3 props to render: a <code>width</code>, a{' '}
        <code>height</code>, and some <code>data</code>.
      </p>
      <p>
        The shape of the <code>data</code> is described above. The{' '}
        <code>width</code> and <code>height</code> will be used to render an{' '}
        <code>svg</code> element in the DOM, in which we will insert the
        Connected Scatterplot.
      </p>
      <p>
        To put it in a nutshell, that's the skeleton of our{' '}
        <code>ConnectedScatterplot</code> component:
      </p>
      <CodeBlock code={snippetSkeleton} />
      <p>
        It's fundamental to understand that with this code organization, d3.js
        will be used to prepare the SVG <code>path</code>, but it's React that
        will render them in the <code>return()</code> statement. We won't use d3
        methods like <code>append</code> that you can find in usual{' '}
        <a href="https://www.d3-graph-gallery.com">d3.js examples</a>.
      </p>
      {/*
      //
      // Basic connected scatter
      //
      */}
      <h2 id="basic example">Basic connected scatterplot</h2>
      <p>
        All the explanation about <b>margins</b>, <b>scales</b>, <b>axes</b> and{' '}
        <code>d3.line()</code> are already made in the{' '}
        <Link href="line-chart">line chart</Link> section of the gallery.
      </p>
      <p>
        The only thing we need to add here is some <b>circles</b> for each data
        point. The process is exactly the same as for a{' '}
        <Link href="scatter-plot">scatterplot</Link>. We have to loop through
        the data and a <code>circle</code> for each item using the x and y
        scales:
      </p>
      <ChartOrSandbox
        vizName={'ConnectedScatterplotBasic'}
        VizComponent={ConnectedScatterplotBasicDemo}
        height={500}
        maxWidth={600}
        caption="Most basic line chart made with react (rendering) and d3.js (path computation)"
      />
      <p>
        Note: you can compare this with a{' '}
        <a href="https://d3-graph-gallery.com/graph/line_basic.html">
          d3.js only approach
        </a>
      </p>
      {/*
      //
      // Responsiveness
      //
      */}
      <ResponsiveExplanationSection chartId="connectedScatter" />
      {/*
      //
      // Inspiration
      //
      */}
      <ToDoSection text="add links to line chart examples" />
      <ToDoSection text="reproduce the connected scatter from the state of JS survey" />
      <DatavizInspirationParallaxLink chartId="connectedScatter" />
      <div className="full-bleed border-t h-0 bg-gray-100 my-3" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  {x:1, y: 90},
  {x: 2, y: 12},
  {x: 3, y: 34},
  {x: 4, y: 53},
  {x: 5, y: 98},
]
`.trim();

const snippetSkeleton = `
import * as d3 from "d3"; // we will need d3.js

type ConnectedScatterplotProps = {
  width: number;
  height: number;
  data: {x: number, y: number}[];
};

export const ConnectedScatterplot = ({ width, height, data }: ConnectedScatterplotProps) => {

  // read the data
  // build the scales and axes
  // build the lines and circles

  return (
    <div>
      <svg width={width} height={height}>
        // render axes
        // render all the <path>
      </svg>
    </div>
  );
};
`.trim();
