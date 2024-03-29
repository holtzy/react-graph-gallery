import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { BoxplotHorizontalDemo } from 'viz/BoxplotHorizontal/BoxplotHorizontalDemo';
import { RadarDatasetAnimationDemo } from 'viz/RadarDatasetAnimation/RadarDatasetAnimationDemo';

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
      title="Types of Data Professionals"
      seoDescription="An animated radar chart showing the skills required to belong to any specific type of data professional."
    >
      <TitleAndDescription
        title="Types of Data Professionals"
        description={graphDescription}
        chartType="radar"
      />

      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="Implementation">Horizontal Boxplot implementation</h2>
      <p>
        Here is a proposal of implementation for a horizontal boxplot with react
        and d3.js.
      </p>
      <p>
        D3 actually has a very minor role here. It is only used to compute the{' '}
        <code>x</code>
        and <code>y</code> scales. The x scale is a <b>linear scale</b> made
        with the <code>scaleLinear()</code> function. The Y scale shows groups
        thanks to the <code>scaleBand()</code> function.
      </p>
      <ChartOrSandbox
        vizName={'RadarDatasetAnimation'}
        VizComponent={RadarDatasetAnimationDemo}
        maxWidth={900}
        height={500}
        caption="An animated radar chart made with React and D3.js."
      />

      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="Drawing">Horizontal box drawing</h2>
      <p>
        We need a function that draws a horizontal box in SVG based on the
        quartiles position in pixels.
      </p>
      <p>The function looks like this:</p>
      <CodeBlock code={snippetFunction} />

      {/*
      //
      // Next
      //
      */}
      <h2 id="Next steps">Next steps</h2>
      <p>
        This post is a translation of the{' '}
        <Link href={'/boxplot'}>basic boxplot example</Link>, switching from{' '}
        <b>vertical</b> to <b>horizontal</b> mode.
      </p>
      <p>
        Now that this basic horizontal boxplot is available, it should be
        straightforward to add interesting features like showing{' '}
        <Link href="/example/boxplot-jitter">individual data points</Link> or
        switching to a <Link href={'/violin-plot'}>violin plot</Link>.
      </p>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetFunction = `
export const HorizontalBox = ({
  min,
  q1,
  median,
  q3,
  max,
  height,
  stroke,
  fill,
}: HorizontalBoxProps) => {
  return (
    <>
      <line
        y1={height / 2}
        y2={height / 2}
        x1={min}
        x2={max}
        stroke={stroke}
        width={STROKE_WIDTH}
      />
      <rect
        x={q1}
        y={0}
        width={q3 - q1}
        height={height}
        stroke={stroke}
        fill={fill}
      />
      <line
        y1={0}
        y2={height}
        x1={median}
        x2={median}
        stroke={stroke}
        width={STROKE_WIDTH}
      />
    </>
  );
};
`.trim();
