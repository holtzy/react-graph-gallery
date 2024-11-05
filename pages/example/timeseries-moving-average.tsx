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
import { ImageGrid } from 'component/UI/ImageGrid';
import GraphGallery from 'component/GraphGallery';

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
      <Link href="/line-chart">line charts</Link> and annotations.
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
      <p>
        <br />
      </p>
      <p>Here is the chart we're learning to build today:</p>
      <div className="flex justify-center mt-14">
        <ScatterplotCheryTreesDemo width={600} height={500} />
      </div>
      {/*
      //
      // Pre-requis
      //
      */}
      <h2 id="prerequisite">Prerequisite</h2>
      <p>
        This graph combines elements of both a{' '}
        <Link href="/scatter-plot">scatterplot</Link> and a{' '}
        <Link href="/line-chart">line chart</Link>, making it essential to grasp
        the fundamentals of each chart type before diving in.
      </p>
      <p>
        Good news, the <Link href="/">react graph gallery</Link> has some very
        basic examples to illustrate those concepts!
      </p>
      <GraphGallery
        images={['scatterplot-most-basic.png', 'line-chart-basic.png']}
      />
      {/*
      //
      // Annotation
      //
      */}
      <h2 id="annotation">Annotation</h2>
      <p>
        The deepest layer of this chart is the annotation that says{' '}
        <code>1950 - 2023</code>. It uses stripes in the background. Stripes can
        be build in SVG as follow:
      </p>
      <CodeBlock code={snippetStripe} />
      <p>
        There is nothing too complicated here thanks to the <code>pattern</code>{' '}
        element. But it's always a bit comsuming to make this manually so
        hopefully this code snippet can help!
      </p>
      {/*
      //
      // Axes
      //
      */}
      <h2 id="axes">Axes</h2>
      <p>
        The axes are highly customized to fit the style of the original
        newspaper.
      </p>
      <p>
        In this case, I prefer to use custom <code>AxisLeft</code> and{' '}
        <code>AxisBottom</code> components instead of using the pre-made{' '}
        <code>d3.js</code>
        functions.
      </p>
      <p>Here is how the rendering part of the axis component looks like.</p>
      <CodeBlock code={snippetAxis} />
      {/*
      //
      // Full code
      //
      */}
      <h2 id="full code">Full code</h2>
      <p>Let's wrap this up!</p>
      <p>
        The full code for this chart is available below. Click the{' '}
        <code>Show Code</code> button.
      </p>
      <ChartOrSandbox
        vizName={'ScatterplotCheryTrees'}
        VizComponent={ScatterplotCheryTreesDemo}
        maxWidth={700}
        height={500}
        caption="Reproduction of a chart published in the newspaper Le Monde."
      />
      {/*
      //
      // Going further
      //
      */}
      <h2 id="improvement">Going further</h2>
      <p>This graph looks pretty good. A few potential improvements:</p>
      <ul>
        <li>
          Add a <Link href="/scatter-plot#tooltip">tooltip</Link> to give more
          information about each data point
        </li>
        <li>
          Use{' '}
          <Link href="/example/scatterplot-tooltip-with-voronoi-for-closest-point-detection">
            Voronoi
          </Link>{' '}
          for closest point detection to trigger the hover effect
        </li>
      </ul>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />

      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetStripe = `
<defs>
  <pattern
    id="pattern_annotation"
    patternUnits="userSpaceOnUse"
    width="9.5"
    height="2.5"
    patternTransform="rotate(41)"
  >
    <line x1="0" y="0" x2="0" y2="9.5" stroke="#f2f2f2" strokeWidth="9" />
  </pattern>
</defs>
<rect
  x={xScale(1950)}
  width={xScale(2023) - xScale(1950)}
  y={0}
  height={boundsHeight}
  fill="url(#pattern_annotation)"
  opacity="1"
/>
`.trim();

const snippetAxis = `
return (
  <>
    {/* Ticks and labels */}
    {ticks.map(({ value, yOffset }) => (
      <g key={value} transform={"translate(0, yOffset"}>
        <line
          x1={0}
          x2={width}
          stroke="#D2D7D3"
          strokeWidth={0.5}
          shapeRendering={'crispEdges'}
          stroke-dasharray="2,2"
        />
        <text
          key={value}
          style={{
            fontSize: '13px',
            textAnchor: 'start',
            transform: 'translateY(-5px)',
            fill: '#D2D7D3',
          }}
        >
          {getDateFromDayOfYear(value)}
        </text>
      </g>
    ))}
  </>
);
`.trim();
