import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import GraphGallery from 'component/GraphGallery';
import { BarplotTheEconomistDemo } from '@/viz/BarplotTheEconomist/BarplotTheEconomistDemo';
import { BarplotVerticalDemo } from '@/viz/BarplotVertical/BarplotVerticalDemo';
import { CodeBlock } from '@/component/UI/CodeBlock';

const graphDescription = (
  <>
    <p>
      Bar charts are often better using horizontal bars and the gallery does a{' '}
      <Link href="/barplot">in-depth description</Link> on how to make them.
    </p>
    <p>
      In some situation, the vertical barplot can still be a good option. If
      group labels are very short and can still be written horizontally, or if
      you're dealing with time related data.
    </p>
    <p>Let's see how to make them using React and D3!</p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Vertical Barplot"
      seoDescription="How to make a vertical barplot using React and D3.js"
    >
      <TitleAndDescription
        title={<h1>Vertical barplot</h1>}
        description={graphDescription}
        chartType="barplot"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>
        Here is a code sandbox in case you want to jump straight into the code.
      </p>
      <p>
        Note that the gallery provides an in-depth description of the process
        leading to a <Link href="/barplot">barplot</Link>. This page will just
        highlight the differences for the vertical version!
      </p>

      <ChartOrSandbox
        vizName={'BarplotVertical'}
        VizComponent={BarplotVerticalDemo}
        height={400}
        maxWidth={600}
        caption="Basic vertical barplot made with React and D3.js"
      />

      {/*
      //
      // Deal with vertical rectangles
      //
      */}
      <h2 id="plot">Deal with vertical rectangles</h2>
      <p>
        Vertical barplot are slightly more tricky to deal with than horizontal
        barplots.
      </p>
      <p>
        Indeed, in SVG, rectangles are drawn <b>from top to bottom</b>. You
        provide a <code>y</code> argument that is the position of the top of the
        bar, and a <code>height</code> argument that tells how much lower the
        bar should go.
      </p>
      <p>
        I strongly recommend to invert the <code>domain</code> argument of the{' '}
        <code>yScale</code> function:
      </p>
      <CodeBlock
        code={`
const yScale = scaleLinear()
  .domain([max, 0])
  .range([0, boundsHeight]);
      `.trim()}
      />
      <p>
        This way, the max value will be mapped to the <b>top</b> of the SVG area
        (<code>0px</code>), and the lowest values will be sent to the very
        bottom of the SVG area.
      </p>
      <p>
        It also makes easy to find the value of the <code>y</code> argument of
        the <code>rectangle</code>: you just have to call the{' '}
        <code>yScale</code> with the bar value.
      </p>
      <p>
        To find the rectangle <code>height</code>, you must use to total height
        of the graph and substract the bar value:
      </p>
      <CodeBlock
        code={`
<rect
    x={x}
    y={yScale(d.value)}
    width={xScale.bandwidth()}
    height={boundsHeight - yScale(d.value)}
/>
        `.trim()}
      />
      {/*
      //
      // Variation
      //
      */}
      <h2 id="variation">Variation</h2>
      <p>
        Check those other barplot and stacked barplot that can interest you:
      </p>
      <GraphGallery
        images={[
          'barplot-basic.png',
          'barplotDatasetAnimation.gif',
          'barplot-stacked-horizontal.png',
          'barplot-the-economist',
        ]}
      />

      {/*
      //
      // Footer
      //
      */}
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
    </Layout>
  );
}
