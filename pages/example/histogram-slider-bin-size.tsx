import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { ArcDiagramVerticalDemo } from 'viz/ArcDiagramVertical/ArcDiagramVerticalDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import { HistogramSliderBinSizeDemo } from '@/viz/HistogramSliderBinSize/HistogramSliderBinSizeDemo';

const graphDescription = (
  <>
    <p>
      Constructing a <Link href="/histogram">histogram</Link> carries a
      significant responsibility: selecting the <b>appropriate bin size</b>.
      It's crucial to experiment with different values, as an incorrect choice
      can <b>obscure</b> the underlying narrative.
    </p>
    <p>
      Many aspire to complete a marathon in <b>under four hours</b>, leading to
      a pronounced gap in the histogram. Choosing a bin size that is too large
      can cause you to overlook this important detail!
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Histogram with Adjustable Bin Size Slider"
      seoDescription="Learn how to create a histogram with react and d3.js, with a slider that controls the bin size of the chart."
    >
      <TitleAndDescription
        title="Histogram with Adjustable Bin Size Slider"
        description={graphDescription}
        chartType="histogram"
      />
      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="data">Data</h2>
      <p>
        Countless marathons are held around the globe each year.{' '}
        <a href="https://pubsonline.informs.org/doi/suppl/10.1287/mnsc.2015.2417">
          This article
        </a>{' '}
        examines the completion times for male participants across various
        events.
      </p>
      <p>
        I downloaded the data and used{' '}
        <a href="https://www.r-graph-gallery.com">R</a> to filter it down to
        just the first 100,000 rows focused on male finishers.
      </p>
      <p>
        The cleaned dataset is just an array of numbers, stored in an array
        called <code>data</code>.
      </p>

      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Plot and code</h2>
      <p>
        If you are in a hurry, here is the final plot we're trying to achieve
        here, together with its code:🙇‍♂️
      </p>
      <p>
        It is a very simple vertical <b>arc diagram</b>, a variation of the
        <b>horizontal</b> version deeply described in the{' '}
        <Link href="/arc-diagram">arc diagram section</Link> of the gallery
      </p>

      <LinkAsButton isFilled size="sm" href="/histogram">
        Histogram section
      </LinkAsButton>
      <ChartOrSandbox
        vizName={'HistogramSliderBinSize'}
        VizComponent={HistogramSliderBinSizeDemo}
        maxWidth={1200}
        height={500}
        caption="A histogram with a slider that controls the bin size."
      />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="distribution" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetFunction = `
const verticalArcGenerator = (
  xStart: number,
  yStart: number,
  xEnd: number,
  yEnd: number
) => {
  return [
    // the arc starts at the coordinate xStart, yStart
    "M",
    xStart,
    yStart,
    // A means we're gonna build an Elliptical Arc Curve
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve
    "A",
    ((yStart - yEnd) / 2) * 2, // rx: first radii of the ellipse (inflexion point)
    (yStart - yEnd) / 2, // ry: second radii of the ellipse  (inflexion point)
    0, // angle: rotation (in degrees) of the ellipse relative to the x-axis
    1, // large-arc-flag: large arc (1) or small arc (0)
    yStart < yEnd ? 1 : 0, // sweep-flag: the clockwise turning arc (1) or counterclockwise turning arc (0)
    // Position of the end of the arc
    xEnd,
    ",",
    yEnd,
  ].join(" ");
};
`.trim();
