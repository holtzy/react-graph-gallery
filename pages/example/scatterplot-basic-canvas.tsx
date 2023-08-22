import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { ArcDiagramVerticalDemo } from 'viz/ArcDiagramVertical/ArcDiagramVerticalDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import { ScatterplotCanvasBasicDemo } from 'viz/ScatterplotCanvas/ScatterplotCanvasBasicDemo';

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{' '}
      <Link href="/scatter-plot">introduction to scatterplot with react</Link>{' '}
      and d3.js. You should probably understand the concepts described there
      before reading here.
    </p>
    <p>
      Rendering a scatterplot using SVG can <b>arm the performance</b> of your
      webpage if the number of data points is high. A common workaround is to
      draw the circles in <b>canvas</b> instead.
    </p>
    <p>
      This post explains how to <b>combine</b> SVG for the axes and canvas for
      the scatterplot markers in React.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Scatterplot with Canvas"
      seoDescription="Learn how to build a scatterplot rendered in canvas with React for better performance. Code and explanation provided."
    >
      <TitleAndDescription
        title="Scatterplot with Canvas"
        description={graphDescription}
        chartType="scatter"
      />
      {/*
      //
      // Why Canvas
      //
      */}
      <h2 id="Why Canvas">Why using canvas? 🤔</h2>
      <p>
        A scatterplot is a chart type that is commonly used to display a{' '}
        <b>high amount of data points</b>.
      </p>
      <p>
        When you draw it in SVG, it means adding a bunch of <code>circle</code>{' '}
        elements. As a result, your <b>DOM will quickly become really heavy</b>.
        It can result in <b>poor performances</b>. If you want to add some
        animation on top of it, you are pretty sure to freeze the page.
      </p>
      <p>
        When using canvas, you add <b>only 1 node in your DOM</b>, and benefit
        the very high speed of it. It is game changer for any viz type that
        requires good performances.
      </p>
      {/*


      //
      // Plot and code
      //
      */}
      <h2 id="Implementation">Scatterplot canvas implementation</h2>
      <p>The trick here is to use 2 layers of drawing:</p>
      <ul>
        <li>
          The first layer is for the <b>axes</b>. It is an SVG element that will
          add the X and Y axes using some usual <code>AxisLeft</code> and{' '}
          <code>AxisBottom</code> components.
        </li>
        <li>
          The second layer is for the <b>markers</b>, it is the{' '}
          <code>canvas</code> element. It has a <code>ref</code>. We can then
          call a function in a <code>useEffect</code> hook to draw inside this
          canvas element.
        </li>
      </ul>

      <p>This is how the useEffect hook looks like, drawing our circles:</p>
      <CodeBlock code={snippetFunction} />
      <p>
        Here is a complete implementation of the scatterplot using this
        technique with 10000 data points:
      </p>
      <ChartOrSandbox
        vizName={'ScatterplotCanvasBasicDemo'}
        VizComponent={ScatterplotCanvasBasicDemo}
        maxWidth={500}
        height={500}
        caption="A scatterplot made with React, using SVG for the axes and Canvas for the markers to improve performance."
      />
      <p>
        <br />
        <br />
      </p>
      <p>
        Canvas is an important topic in data visualization for the web. I plan
        to write complete articles on the topic. You can know when it's ready by{' '}
        <Link href="/subscribe">subscribing</Link> to the project.
      </p>
      <LinkAsButton size="sm" isFilled href="/subscribe">
        {'Tell me when the canvas post is ready!'}
      </LinkAsButton>

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetFunction = `
useEffect(() => {
  const canvas = canvasRef.current;

  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext('2d');

  // Clear the canvas
  ctx.clearRect(0, 0, width, height);

  // Draw each data point as a circle
  data.forEach((point) => {
    ctx.beginPath();
    ctx.arc(xScale(point.x), yScale(point.y), CIRCLE_RADIUS, 0, 2 * Math.PI);
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = '#cb1dd1';
    ctx.fill();
  });
}, [data, xScale, yScale, width, height]);
`.trim();
