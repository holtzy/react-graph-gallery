import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { LinkAsButton } from 'component/LinkAsButton';
import { ScatterplotCanvasBasicDemo } from 'viz/ScatterplotCanvas/ScatterplotCanvasBasicDemo';
import { ScatterplotCheryTreesDemo } from 'viz/ScatterplotCheryTrees/ScatterplotCheryTreesDemo';

const graphDescription = (
  <>
    <p>
      In this tutorial, we'll explore the art of plotting{' '}
      <Link href="/timeseries">time series data</Link>, incorporating a dynamic{' '}
      <b>moving average</b> line chart overlaid on the primary plot.
    </p>
    <p>
      Inspired by a visualization featured in the renowned French newspaper{' '}
      <a href="https://www.lemonde.fr/les-decodeurs/article/2024/03/23/en-graphiques-au-japon-les-cerisiers-fleurissent-de-plus-en-plus-tot_6223754_4355770.html?lmd_medium=al&lmd_campaign=envoye-par-appli&lmd_creation=ios&lmd_source=whatsapp">
        Le Monde
      </a>
      , depicting the blooming patterns of cherry trees over time, we'll
      recreate this compelling chart.
    </p>
    <p>
      With readily available code and straightforward explanations, you'll
      witness the prowess of React in seamlessly stacking multiple layers of
      rendering – from <Link href="/scatter-plot">scatterplots</Link> to{' '}
      <Link href="/line-chart">line charts</Link> and annotations."
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Timeseries with moving average"
      seoDescription="Learn how to build a customized timeseries chart with React and D3. A reproduction of a chart published in the french newspaper Le Monde, with the moving average represented as a line chart on top."
    >
      <TitleAndDescription
        title="Timeseries with moving average"
        description={graphDescription}
        chartType="timeseries"
      />
      {/*
      //
      // Dataset
      //
      */}
      <h2 id="dataset">🇯🇵 Poetry in Data</h2>
      <p>
        Amidst the myriad visualizations of global warming, one stands out for
        its poetic resonance – an unexpected gem found within the pages of a{' '}
        <a href="https://www.lemonde.fr/les-decodeurs/article/2024/03/23/en-graphiques-au-japon-les-cerisiers-fleurissent-de-plus-en-plus-tot_6223754_4355770.html?lmd_medium=al&lmd_campaign=envoye-par-appli&lmd_creation=ios&lmd_source=whatsapp">
          French newspaper
        </a>
        : the <b>flourishing timelines of cherry trees</b> in Japan.
      </p>
      <p>
        Intriguingly,{' '}
        <a href="http://atmenv.envi.osakafu-u.ac.jp/aono/kyophenotemp4/">
          Yasuyuki Aono
        </a>{' '}
        delved into ancient texts dating back to the 800s to unearth this data.
        Thanks to the meticulous efforts of{' '}
        <a href="https://ourworldindata.org/grapher/date-of-the-peak-cherry-tree-blossom-in-kyoto">
          Our World in Data
        </a>{' '}
        in cleaning and refining the dataset, we're now presented with a
        captivating portrayal of our changing world.
      </p>
      <p>Here is the chart we're learning to build today:</p>
      <ChartOrSandbox
        vizName={'ScatterplotCheryTreesDemo'}
        VizComponent={ScatterplotCheryTreesDemo}
        maxWidth={500}
        height={500}
        caption="A scatterplot made with React, using SVG for the axes and Canvas for the markers to improve performance."
      />

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
