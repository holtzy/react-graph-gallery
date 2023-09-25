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
import { BoxplotHorizontalDemo } from 'viz/BoxplotHorizontal/BoxplotHorizontalDemo';

const graphDescription = (
  <>
    <p>
      This tutorial is a variation around the general{' '}
      <Link href="/boxplot">introduction to boxplot with react</Link> and d3.js.
      You should probably understand the concepts described there before reading
      here.
    </p>
    <p>
      The general introduction relies on a <code>VerticalBox</code> function
      that draws a.. <i>vertical box</i> 🙃. The main difference here is that we
      are now building a <code>HorizontalBox</code> function and swap the X and
      Y axes.
    </p>
    <p>
      As usual, this post comes with explanation, a code sandbox and a template
      that you can reuse instantly in your web application.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Horizontal Boxplot"
      seoDescription="Learn how to build a horizontal boxplot using React and D3.js. Code and explanation provided."
    >
      <TitleAndDescription
        title="Horizontal Boxplot"
        description={graphDescription}
        chartType="scatter"
      />

      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="Implementation">Horizontal Boxplot implementation</h2>
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

      <ChartOrSandbox
        vizName={'BoxplotHorizontalDemo'}
        VizComponent={BoxplotHorizontalDemo}
        maxWidth={500}
        height={500}
        caption="A horizontal boxplot made with React and D3.js."
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
