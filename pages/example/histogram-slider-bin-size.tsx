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
      Building an histogram comes with a big responsability: choosing the right
      bin size. It is essential to try different values, as picking up the wrong
      one can completely hide the underlying story.
    </p>
    <p>
      Men really want to run a marathon in less than 4 hours, and that creates a
      massive break in the histogram. Pick a too big bin size and you will miss
      the story!
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Histogram with slider to control bin size"
      seoDescription="Learn how to create a histogram with react and d3.js, with a slider that controls the bin size of the chart."
    >
      <TitleAndDescription
        title="Histogram with slider to control bin size"
        description={graphDescription}
        chartType="histogram"
      />
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
      <ChartFamilySection chartFamily="flow" />
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
